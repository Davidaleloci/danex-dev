# danex.dev — Web Portafolio Profesional

Portafolio web de ingeniería de software y arquitectura de sistemas desarrollado con **Angular 16**, **TypeScript** y **SCSS Modular**.

## Características del Proyecto
- **Identidad & Branding:** Identidad técnica profesional bajo `danex.dev`.
- **Diseño Responsivo:** Soporte multidispositivo con menú móvil desplegable (drawer) y diseño fluido.
- **Sin Clichés de IA / Emojis:** Iconografía vectorial SVG de precisión técnica y tipografía para desarrolladores (`Inter` + `JetBrains Mono`).
- **Arquitectura Multicapa:** Diagrama interactivo de arquitectura en 3 capas (Presentación, Negocio, Persistencia) con selección dinámica.
- **Consola de API RESTful Interactiva:** Sandbox para probar endpoints (`GET`, `POST`), simulación de latencia de red, renderizado de payloads y opción de copiado al portapapeles.
- **Terminal CLI Emulada:** Consola interactiva flotante con soporte para comandos de sistema (`help`, `skills`, `projects`, `hildax`, `api`, `contact`, `clear`, `exit`) y chips de comandos rápidos para móviles.
- **Formulario de Contacto Funcional:** Validación reactiva y canales directos de comunicación.
- **Optimización de Estilos SCSS:** Sistema de tokens de diseño desacoplado (`_variables.scss`) sin duplicación de CSS en bundles de componentes.

## Ejecución Local

Para levantar el servidor de desarrollo:
```bash
npm start
# o
ng serve
```
Navega a `http://localhost:4200/`.

## Compilación para Producción

Para compilar la aplicación optimizada para despliegue:
```bash
npm run build
```
Los archivos de salida listos para desplegar en hosting estático (Vercel, Netlify, GitHub Pages, Render) se generarán en `dist/portafolio/`.
