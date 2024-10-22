# Development

## Cli

* Install dependencies

```bash
pnpm i
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