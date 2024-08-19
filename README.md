# Development

Pasos para levantar la app en desarrollo:

1. Levantar la base de datos

```
docker compose up -d
```

2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma Commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate

```
# Note: User by Default

__user:__ test1@google.com
__password:__ 123456

# Prod

# Stage
