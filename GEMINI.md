# Project: shadcn-admin

## Overview
`shadcn-admin` is a modern, feature-rich admin dashboard application built with React 19, Vite, and TypeScript. It leverages `shadcn/ui` for a polished user interface and follows a modular, feature-based architecture.

## Tech Stack

### Core
-   **Framework**: React 19
-   **Build Tool**: Vite
-   **Language**: TypeScript

### UI & Styling
-   **Component Library**: shadcn/ui (Radix UI + Tailwind CSS)
-   **Additional UI**: Ant Design (v5 patch for React 19)
-   **Styling**: Tailwind CSS v4
-   **Icons**: Lucide React, Radix UI Icons
-   **Charts**: Recharts

### State Management & Data Fetching
-   **Server State**: TanStack Query (React Query)
-   **Global State**: Zustand
-   **GraphQL Client**: urql (with `graphql-ws` for subscriptions)
-   **Routing**: TanStack Router

### Forms & Validation
-   **Forms**: React Hook Form
-   **Validation**: Zod

### Utilities
-   **Dates**: date-fns
-   **Classnames**: clsx, tailwind-merge

## Architecture

The project follows a **Feature-Based Architecture**, organizing code by business domain rather than technical layer.

### Directory Structure
-   **`src/features`**: Contains the core business logic, split by domain (e.g., `auth`, `users`, `dashboard`). Each feature folder typically contains its own components, hooks, and queries.
-   **`src/routes`**: Implements file-based routing using TanStack Router.
    -   `__root.tsx`: The root layout/route.
    -   `_authenticated`: Layout for routes requiring authentication.
    -   `(auth)`: Public authentication routes (login, etc.).
-   **`src/components`**: Shared, reusable UI components (mostly shadcn/ui primitives).
-   **`src/gql`**: Generated GraphQL types and hooks (via `graphql-codegen`).
-   **`src/stores`**: Global Zustand stores (e.g., `auth-store`).
-   **`src/lib`**: Utility functions and configurations (e.g., `utils.ts` for class merging, `handle-server-error.ts`).
-   **`src/context`**: Global React Context providers (Auth, Theme, etc.).

## Key Configuration

-   **Entry Point**: `src/main.tsx` - Sets up providers (QueryClient, Router, Urql Client, Auth, Theme).
-   **Vite Config**: `vite.config.ts` - Configured with React, Tailwind, and TanStack Router plugins. Alias `@` points to `./src`.
-   **GraphQL Codegen**: `codegen.ts` - Configures generation of TypeScript types from the GraphQL schema (`http://127.0.0.1:9001/query`).

## Development Workflow

### Commands
-   **Start Dev Server**: `npm run dev`
-   **Build**: `npm run build`
-   **Lint**: `npm run lint`
-   **Format**: `npm run format`
-   **Generate GraphQL Types**: `npm run codegen` (Run this after modifying `.graphql` files or queries in `.tsx` files).

### Backend Connection
-   The application expects a GraphQL backend running at `http://127.0.0.1:9001/query`.
-   WebSocket connection for subscriptions is at `ws://127.0.0.1:9001/query`.

## Authentication
-   Authentication state is managed by `src/stores/auth-store`.
-   The `AuthProvider` in `src/context/auth-context` likely initializes auth state.
-   Protected routes are nested under `src/routes/_authenticated`.
