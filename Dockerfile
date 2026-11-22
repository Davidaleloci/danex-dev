# ==============================================================================
# danex.dev - Multi-Stage Production Dockerfile (Angular 16 + Nginx)
# ==============================================================================

# ------------------------------------------------------------------------------
# Fase 1: Entorno de Construcción (Builder Stage)
# ------------------------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias primero para aprovechar el caché de capas de Docker
COPY package*.json ./

# Instalación limpia y determinista de dependencias
RUN npm ci --quiet || npm install --quiet

# Copiar el código fuente y archivos de configuración
COPY . .

# Compilar la aplicación en modo producción optimizado
RUN npm run build -- --configuration production

# ------------------------------------------------------------------------------
# Fase 2: Servidor Web de Producción Ultraligero (Nginx Alpine)
# ------------------------------------------------------------------------------
FROM nginx:1.27-alpine

# Metadatos del contenedor
LABEL maintainer="danex.dev <contacto@danex.dev>"
LABEL description="Portafolio Web Profesional - danex.dev"
LABEL version="2.4.0"

# Eliminar la configuración y sitio por defecto de Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf /usr/share/nginx/html/*

# Copiar la configuración personalizada de Nginx optimizada para SPA y seguridad
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los artefactos de compilación generados en la Fase 1
COPY --from=builder /app/dist/portafolio /usr/share/nginx/html

# Exponer el puerto estándar HTTP
EXPOSE 80

# Chequeo de salud del contenedor (Healthcheck)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ || exit 1

# Iniciar servidor Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
