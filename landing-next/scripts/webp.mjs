import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, dirname, extname, join } from "node:path";

const ROOT = "public/assets";
const EXT = new Set([".jpg", ".jpeg", ".png"]);
const RESPONSIVE_ROOT = join(ROOT, "img");
const RESPONSIVE_WIDTHS = [480, 768, 1024];

async function walk(dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else if (EXT.has(extname(e.name).toLowerCase())) out.push(p);
  }
  return out;
}

const files = await walk(ROOT);
let generated = 0;
let skipped = 0;

async function writeIfStale(source, destination, transform) {
  if (existsSync(destination)) {
    const [src, dst] = await Promise.all([stat(source), stat(destination)]);
    if (dst.mtimeMs >= src.mtimeMs) {
      skipped++;
      return;
    }
  }

  await transform().toFile(destination);
  generated++;
}

function variantPath(file, width) {
  const ext = extname(file);
  const name = basename(file, ext);
  return join(dirname(file), `${name}-${width}.webp`);
}

for (const file of files) {
  const webp = file.replace(/\.(jpe?g|png)$/i, ".webp");
  await writeIfStale(file, webp, () => sharp(file).webp({ quality: 82, effort: 5 }));

  if (file.startsWith(RESPONSIVE_ROOT)) {
    const metadata = await sharp(file).metadata();
    const sourceWidth = metadata.width ?? 0;
    const widths = RESPONSIVE_WIDTHS.filter((width) => width < sourceWidth);

    for (const width of widths) {
      await writeIfStale(file, variantPath(file, width), () =>
        sharp(file)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: 82, effort: 5 })
      );
    }
  }
}

console.log(`\n${generated} generated, ${skipped} up-to-date.`);
