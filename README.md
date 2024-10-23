# Development

## Cli

* Install dependencies for **frontend** and **backend** folder separately

```bash
cd frontend
pnpm i
cd ..
cd backend
pnpm i
cd ..
```

* Run needed services (postgres)

```bash
docker compose up -d
```

* Generate prisma schema and migrate dev database

```bash
npx prisma generate
npx prisma migrate dev
```
