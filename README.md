# danex.dev — Web Portafolio Profesional

Portafolio web de ingeniería de software y arquitectura de sistemas desarrollado con **Angular 16**, **TypeScript**, **SCSS Modular** y contenedorizado para producción con **Docker** y **Nginx**.

---

## Características de la Aplicación
- **Identidad & Branding:** Logotipo oficial `DANEX | DEV` y diseño de consola técnico `[danex.dev]`.
- **Proyectos Insignia Destacados:**
  - **OmniMark:** Plataforma y agente de marketing con IA generativa para creación automatizada de imágenes publicitarias y copys comerciales (Cliente: *PROTECLINE S.A.C.*).
  - **PROTECEDU:** ERP de gestión educativa integral multi-tenant para Inicial (control de asistencia QR), Primaria/Secundaria (actas SIAGIE) y Superior (mallas curriculares por créditos).
  - **HILDAX S.A.C.:** Sistema transaccional en 3 capas de inventarios y facturación.
- **Consola de API RESTful Interactiva:** Pruebas en vivo con simulación de latencia de red, badges HTTP y formateador de JSON con botón para copiar al portapapeles.
- **Terminal CLI Emulada:** Shell interactivo (`help`, `omnimark`, `protecedu`, `hildax`, `skills`, `clear`).
- **Diseño 100% Responsivo:** Menú móvil *drawer*, sin emojis informales (iconografía vectorial SVG de precisión).

---

## Despliegue con Docker (Producción)

El proyecto cuenta con una arquitectura de contenedorización de **múltiples etapas (*multi-stage build*)**:
1. **Fase de Compilación (*Builder*):** `node:20-alpine` compila la aplicación Angular en modo de máxima optimización y emite los artefactos minificados.
2. **Fase de Producción (*Web Server*):** `nginx:1.27-alpine` ultraligero (<30MB) sirve los archivos estáticos con compresión Gzip, cabeceras de seguridad y soporte para rutas SPA (*HTML5 pushState*).

### Opción A: Usando Docker Compose (Recomendado)
Desde la raíz del proyecto o dentro de `/portafolio`:
```bash
# Levantar el contenedor en segundo plano
docker compose up -d --build

# Ver los logs del servidor Nginx
docker compose logs -f

# Detener el contenedor
docker compose down
```
La aplicación estará disponible inmediatamente en `http://localhost/` (o en el puerto definido por la variable de entorno `PORT`).

### Opción B: Usando Docker CLI directamente
```bash
# 1. Construir la imagen de producción
docker build -t danex-portfolio ./portafolio

# 2. Ejecutar el contenedor
docker run -d -p 80:80 --name danex-portfolio --restart unless-stopped danex-portfolio
```

### Opciones de Despliegue en la Nube
- **Render / Railway / Fly.io:** Detectan automáticamente el `Dockerfile` y exponen el puerto 80 (o la variable `$PORT`).
- **VPS (Ubuntu / Debian / DigitalOcean / AWS EC2):** Clona el repositorio y ejecuta `docker compose up -d --build`.
- **Nginx Proxy Manager / Traefik / Cloudflare Tunnel:** Conecta fácilmente el contenedor mapeado al puerto 80 con certificados SSL/TLS automáticos.

---

## Ejecución Local sin Docker (Desarrollo)

Requisitos: Node.js 18+ y npm.

```bash
cd portafolio
npm install
npm start
```
Abre `http://localhost:4200/`.

## Compilación Manual
```bash
npm run build
```
Genera la carpeta `dist/portafolio/` lista para ser servida.
