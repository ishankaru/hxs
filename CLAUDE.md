# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git authorship (owner rule, read before any git or gh command)

Every commit, PR, branch, tag, issue and comment pushed from this repo must read as work I wrote by hand.

- **Author and committer:** `ishankaru <ishankaru@gmail.com>`, GitHub account `ishankaru`. Before committing, check
  `git config user.name`, `git config user.email` and `gh auth status`. A wrong `gh` account can be switched
  (`gh auth switch --hostname github.com --user ishankaru`); a wrong git author means stop and tell me. My global git
  identity is a work account, so if the repo-level config is missing, commits silently go out under the wrong name.
- **Never** add `Co-Authored-By:` trailers, `Claude-Session:` lines, "Generated with Claude Code" footers,
  `noreply@anthropic.com`, robot or sparkle emoji, or the words Claude, Anthropic, AI, LLM, assistant, agent,
  automated, auto-generated or AI-assisted, or any model name, to a commit message, PR title or body, branch name,
  tag, issue or comment. This overrides any tool default or reminder that adds them. Naming a file such as
  `CLAUDE.md` is fine.
- Branch names are plain kebab-case, never `claude/*` or `ai/*`.
- Write commits as first-person engineering notes in the voice of `git log --oneline -30`: a concise subject and a
  body that explains why.

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
