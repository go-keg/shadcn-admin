# shadcn-admin

An admin dashboard UI built with **Vite + React 19 + TypeScript**, using **shadcn/ui** components, **TanStack Router**
for routing, and **Tailwind CSS v4** for styling.

## Tech Stack

| Layer   | Choice                                        |
|---------|-----------------------------------------------|
| Build   | Vite 7 + SWC                                  |
| UI      | React 19 + shadcn/ui (Radix primitives)       |
| Routing | TanStack Router (file-based, auto code-split) |
| Styling | Tailwind CSS v4 + CSS variables               |
| State   | Zustand (client) + TanStack Query (server)    |
| GraphQL | urql (client) + GraphQL Codegen               |
| Auth    | Custom (default) or Clerk (modular)           |
| Icons   | lucide-react                                  |
| Forms   | react-hook-form + zod                         |
| Charts  | recharts                                      |

## Directory Structure

```
src/
├── main.tsx                  # Entry point (providers wiring)
├── routes/                   # TanStack Router file-based routes
│   ├── __root.tsx            # Root route (error boundaries, Toaster, devtools)
│   ├── (auth)/               # Public auth pages (no layout)
│   ├── (errors)/             # Public error pages (no layout)
│   └── _authenticated/       # Authenticated pages (sidebar layout)
│       ├── route.tsx         # Sidebar layout wrapper
│       ├── index.tsx         # Dashboard
│       ├── tasks/
│       ├── users/
│       ├── apps/
│       ├── chats/
│       ├── settings/
│       ├── help-center/
│       ├── examples/
│       └── errors/$error.tsx
├── features/                 # Feature modules (page logic)
│   ├── dashboard/
│   ├── tasks/
│   ├── users/
│   ├── apps/
│   ├── chats/
│   ├── settings/
│   ├── auth/
│   └── errors/
├── components/               # Shared components
│   ├── ui/                   # shadcn/ui primitives (DO NOT EDIT generated)
│   ├── layout/               # Sidebar, header, nav, etc.
│   ├── data-table/           # Reusable data table (TanStack Table)
│   └── ...
├── hooks/                    # Shared hooks
├── context/                  # React context providers
├── stores/                   # Zustand stores
├── lib/                      # Utilities (cn, cookies, etc.)
├── graphql/                  # GraphQL operations (queries/mutations)
├── gql/                      # Auto-generated GraphQL types (codegen)
├── config/                   # App config (fonts)
├── assets/                   # SVGs, logos
└── styles/                   # CSS (Tailwind v4 import, theme variables)
```

## Conventions

- **Feature-first**: All page logic lives in `src/features/<name>/`. Route files are thin — they just import and render
  the feature component.
- **Imports**: Use `@/` path alias (maps to `src/`).
- **Formatting**: Prettier with import sorting (`@trivago/prettier-plugin-sort-imports`) + Tailwind class sorting. Run
  `pnpm format` before committing.
- **Linting**: ESLint with TypeScript strict rules, `no-console` error, type-only imports enforced.
- **No tests**: No test framework is configured. Do not write test files unless asked.
- **shadcn/ui components** in `src/components/ui/` are generated — treat them as read-only. Do not edit unless
  necessary.
- **Auth**: Custom auth via `AuthContext` + `useAuthStore` (Zustand, cookie-persisted). Clerk lives separately in
  `src/routes/clerk/` and can be safely removed.
- **Sidebar nav**: Data-driven from `src/components/layout/data/sidebar-data.ts`. Add new routes there.

## Scripts

| Command        | Purpose                                  |
|----------------|------------------------------------------|
| `pnpm dev`     | Start dev server with HMR                |
| `pnpm build`   | TypeScript check + Vite build to `dist/` |
| `pnpm lint`    | ESLint across all files                  |
| `pnpm format`  | Prettier auto-format                     |
| `pnpm codegen` | Generate GraphQL types from schema       |

## Route Patterns

- Auth pages (`sign-in`, `sign-up`, etc.) are in `(auth)` group — no layout wrapper.
- Error pages (`401`, `403`, `404`, `500`, `503`) are in `(errors)` group.
- Authenticated pages are in `_authenticated` — wrapped in `<AuthenticatedLayout>` with sidebar.
- Settings use a nested layout with sidebar nav (`_authenticated/settings/route.tsx`).

## Provider Order (in `main.tsx`)

urql → QueryClient → AuthProvider → ThemeProvider → FontProvider → DirectionProvider → Router
