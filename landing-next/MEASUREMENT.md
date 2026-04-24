# Measurement Plan

Esta base paralela ya deja instrumentación lista para un stack lightweight.

## Opción recomendada

- **Plausible** como analytics principal
- **Netlify Forms** para captura de formularios

## Opción ultraliviana

- **Cloudflare Web Analytics** como baseline
- Mantener la misma convención de eventos desde `window.eliteTrack`

## Eventos implementados

### 1. `cta_click`

Se dispara en:

- CTA principal del home
- CTA de exploración de áreas
- botones de hero en páginas sectoriales
- botón de envío del formulario
- links destacados a catálogo o detalle

Props:

- `label`
- `location`

### 2. `route_select`

Se dispara cuando el visitante elige una de las tres rutas:

- equipo
- medida
- profesional

Props:

- `route`
- `location`

### 3. `whatsapp_click`

Se dispara en:

- CTA header
- CTA dentro del bloque de formulario

### 4. `form_focus`

Se dispara una sola vez por formulario cuando el usuario entra al primer campo.

### 5. `form_submit`

Se dispara al enviar el formulario.

## Qué falta luego

Cuando el sitio vaya a producción paralela, conviene sumar:

- UTMs consistentes por canal
- thank-you page o success state medible
- diferenciación de source / campaign en hidden fields
- validación de qué formularios son enterprise vs individual

## Nota de privacidad

La medición está pensada para registrar comportamiento, no PII.

Los datos sensibles siguen entrando por:

- Netlify Forms
- o el backend / integración que se elija más adelante
