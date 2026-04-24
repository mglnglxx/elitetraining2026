# Elite Landing Next

Versión paralela de `landing.hidrocarburos.com.co`, construida con Astro y componentes reutilizables.

## Objetivo

- No tocar la versión actual en `docs/` hasta que la nueva esté aprobada.
- Rehacer el minisite con una base mantenible y lista para medición.
- Tener una sola estructura para homepage, áreas sectoriales y futuras landings de webinars o campañas.

## Comandos

```bash
npm install
npm run dev
npm run build
```

## Despliegue

La idea es publicar esta carpeta por separado en Netlify mientras se valida. El sitio actual sigue intacto.

## Medición

Esta base ya viene preparada para instrumentación ligera:

- `PUBLIC_PLAUSIBLE_DOMAIN`
- `PUBLIC_PLAUSIBLE_SCRIPT_SRC`

Si no se configuran, el sitio sigue funcionando sin analytics.

Eventos listos para capturar:

- `cta_click`
- `route_select`
- `whatsapp_click`
- `guide_click`
- `form_focus`
- `form_submit`

## Rutas incluidas

- `/`
- `/capacitacion-oil-gas-produccion-pozos`
- `/capacitacion-seguridad-riesgos-procesos-psm`
- `/capacitacion-integridad-equipos-inspeccion-api`
- `/capacitacion-gestion-activos-mantenimiento-confiabilidad`
- `/capacitacion-gas-natural-glp-energia`
- `/capacitacion-habilidades-directivas-industria`
