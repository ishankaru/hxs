# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 16 application using the App Router with React 19.

### Tech Stack
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives
- **Styling**: Tailwind CSS v4 with CSS variables for theming (OKLCH color space)
- **Icons**: lucide-react
- **Forms**: react-hook-form with zod validation
- **Analytics**: @vercel/analytics

### Project Structure
- `app/` - Next.js App Router pages (each route has its own `page.tsx`)
- `components/` - React components
  - `components/ui/` - shadcn/ui component library
  - `components/site-header.tsx` and `site-footer.tsx` - Layout components
- `lib/utils.ts` - Contains `cn()` helper for merging Tailwind classes

### Path Aliases
- `@/*` maps to project root (e.g., `@/components`, `@/lib/utils`)

### Adding UI Components
Use shadcn CLI to add new components:
```bash
npx shadcn@latest add <component-name>
```
Components are configured in `components.json` with RSC support enabled.
