# FS-Contracting CRM

This repository contains a minimal prototype scaffold for the FS-Contracting N.V. CRM. It includes a Next.js 14 App Router structure with a persistent sidebar layout and placeholder pages for future features.

## Development

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Environment variables:

- `FEATURE_PROJECTS` – enable the Projects page in navigation.

## Local DB (SQLite)

```bash
pnpm prisma:generate
pnpm db:push
pnpm db:seed
```
