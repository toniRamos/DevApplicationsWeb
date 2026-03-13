# Astro Skeleton con Docker

Scaffolding mínimo para empezar un proyecto Astro desde cero. Sin datos personales ni estilos; solo estructura, Docker y scripts de arranque.

## Requisitos

- [Docker](https://docs.docker.com/get-docker/) y Docker Compose

## Uso

```bash
# Levantar el proyecto (build + servidor en http://localhost, puerto 80)
./start

# Parar contenedores
./stop
```

El primer `./start` puede tardar un poco mientras se construye la imagen e instala dependencias.

## Sin Docker

```bash
npm install
npm run dev
```

## Estructura

```
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── docker-compose.yml
├── Dockerfile
├── start          # Levanta el proyecto con Docker
└── stop           # Para los contenedores
```

## Comandos npm

| Comando        | Descripción                    |
|----------------|--------------------------------|
| `npm run dev`  | Servidor de desarrollo :4321   |
| `npm run build`| Build de producción en `dist/` |
| `npm run preview` | Vista previa del build      |
