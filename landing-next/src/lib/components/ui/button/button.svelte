<script lang="ts">
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";
  import { tv, type VariantProps } from "tailwind-variants";
  import { cn } from "$lib/utils";

  export const buttonVariants = tv({
    base: "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-semibold transition-[background,border-color,color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_14px_32px_-16px_rgba(15,22,56,0.45)] hover:-translate-y-0.5",
        secondary:
          "border border-border bg-card text-primary hover:-translate-y-0.5 hover:border-primary/35",
        ghost: "text-primary hover:bg-secondary"
      },
      size: {
        default: "min-h-11 px-5",
        sm: "min-h-10 px-4 text-xs",
        lg: "min-h-12 px-7 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  });

  type ButtonVariants = VariantProps<typeof buttonVariants>;
  type ButtonProps = HTMLButtonAttributes & ButtonVariants & { href?: undefined; children?: Snippet };
  type AnchorProps = HTMLAnchorAttributes & ButtonVariants & { href: string; children?: Snippet };

  let {
    href,
    variant = "default",
    size = "default",
    class: className,
    children,
    ...rest
  }: ButtonProps | AnchorProps = $props();
</script>

{#if href}
  <a href={href} class={cn(buttonVariants({ variant, size }), className)} {...rest}>
    {@render children?.()}
  </a>
{:else}
  <button class={cn(buttonVariants({ variant, size }), className)} {...rest}>
    {@render children?.()}
  </button>
{/if}
