# Gimnasio Web

Base en Astro para una escuela de taekwondo, preparada para:

- web publica rapida y economica
- panel de edicion con Sanity
- deploy gratis en Cloudflare Pages o Vercel

## Comandos

```sh
npm install
npm run dev
npm run build
```

## Panel de administracion con Sanity

La web ya esta preparada para usar Sanity como panel de edicion. Mientras no haya variables de entorno configuradas, la home usa contenido de ejemplo y la ruta `/admin-info` muestra los pasos pendientes.

### 1. Crear el proyecto en Sanity

Crear una cuenta y un proyecto gratis en Sanity. Cuando lo tengais, necesitareis:

- `projectId`
- `dataset` normalmente `production`

Documentacion oficial:

- https://www.sanity.io/docs/astro
- https://www.sanity.io/docs/astro/configure-sanity-astro
- https://www.sanity.io/docs/astro/embedding-studio-in-astro

### 2. Configurar variables de entorno

Copiad `.env.example` a `.env` y rellenad los valores reales:

```sh
PUBLIC_SANITY_PROJECT_ID="tu_project_id"
PUBLIC_SANITY_DATASET="production"
SANITY_STUDIO_PROJECT_NAME="Escuela de Taekwondo"
```

### 3. Reiniciar el servidor

Cuando reinicies `npm run dev`, Astro montara automaticamente el panel embebido en:

```text
/admin
```

## Que puede editar ella

Con la estructura actual del panel, tu amiga podra gestionar:

- nombre del centro y textos principales
- llamadas a la accion
- bloques destacados
- clases
- horarios
- datos de contacto

## Notas importantes

- Sin variables de Sanity, la web sigue funcionando con contenido local de ejemplo.
- Para que `/admin` funcione en local, Sanity recomienda anadir `http://localhost:4321` al CORS del proyecto con credenciales permitidas.
- Si luego quereis noticias o blog, se puede anadir como nuevo tipo de contenido sin rehacer la web.
