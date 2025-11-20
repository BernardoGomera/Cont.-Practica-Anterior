# Cont.-Practica-Anterior
Esta práctica consolida tu entrega continua de DevOps para el proyecto “Hola Mundo”, enfocada en construir la imagen desde tu Dockerfile original, subirla a Docker Hub y disparar un despliegue automático en Render cada vez que haces push a `main`.

## Flujo de CI/CD (`CI-CD DevOps Pipeline`)

- **Trigger**: `on: push` sobre la rama `main`.
- **Job `build_and_push`**: crea la imagen `bernardogomera/hola-mundo:latest` usando `docker/build-push-action@v5`, construye para `linux/amd64` y `linux/arm64`, hace login con los secrets de Docker Hub y sube la imagen.
- **Job `deploy_render`**: espera a que termine el build anterior y dispara un `curl` a la API de Render para crear un nuevo deploy apuntando a tu servicio.

## Secrets requeridos

1. `DOCKERHUB_USERNAME`: tu usuario de Docker Hub (`bernardogomera`).
2. `DOCKERHUB_TOKEN`: token de acceso con permisos de `write` para `bernardogomera/hola-mundo`.
3. `RENDER_API_KEY`: token (Bearer) que creaste en tu cuenta de Render.
4. `RENDER_SERVICE_ID`: el identificador del servicio Render (`srv-d4f6mp3uibrs73bcks40`).

Los secrets se configuran en GitHub → Settings → Secrets and variables → Actions. No los pongas en el repositorio a texto plano.

## Destinos

- Imagen publicada: `docker.io/bernardogomera/hola-mundo:latest`.
- Web App (Render): <https://cont-practica-anterior.onrender.com>.

Con esta documentación, cualquier integrante puede entender el pipeline actual y saber dónde actualizar los secretos o ver el despliegue.
