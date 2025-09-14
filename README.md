# FS-Contracting CRM

This repository contains a minimal prototype scaffold for the FS-Contracting N.V. CRM.  
It includes a Next.js 14 App Router structure with a persistent sidebar layout and placeholder pages for future features.

## Development

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev

## Environment Variables

- `FEATURE_PROJECTS` – enable the Projects page in navigation.
- `NEXTAUTH_URL` – the application URL (e.g., `http://localhost:3000`).
- `NEXTAUTH_SECRET` – secret key for NextAuth.
- `DATABASE_URL` – connection string for the SQLite database (e.g., `file:./dev.db`).
