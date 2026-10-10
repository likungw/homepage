# Kun Li Website — V4 Visual Refinement

This is an **incremental patch on top of the V3 purple homepage**. No dependencies, photos, videos or research-data files were changed.

## Installation on Windows / VS Code

1. Make a backup of `D:\Home\homepage` (or use Git to commit your existing local changes).
2. Extract the ZIP and copy the `pages`, `components`, and `styles` folders into your project root. When prompted, merge folders and replace matching files. **Do not replace your own `data/research.ts` or any media files.**
3. If `npm.cmd run dev` is already running, let Next.js refresh. Otherwise open a terminal in the project root and run `npm.cmd run dev`.
4. Check Home (`http://localhost:3000`), About (`/about`), People (`/people`), Publications (`/publications`), Talks (`/talks`) and Blog (`/blog`) in a desktop and phone-sized browser window.

## Changes

- Responsive design widths: Home outer container max 1244px (content approximately 1160px); all other pages max 1164px (content approximately 1080px).
- Research Directions: limited to 1040px inside the Home container; alternating image-and-copy cards are tighter (about 300px high desktop instead of 360px+).
- About: portrait and four original photo animations preserved; Publications / Email / Talks grouped with all social links below the bio, with the redundant bottom Connect block removed.
- Shared purple component palette: lavender tints, subtle borders, matching typography and line-height, unified card hover/focus behavior across all pages.
- People / Publications / Talks / Blog: improved consistency and less saturated miscellaneous colors.
- Motion: added reduced-motion-aware entrance for About and People text sections; preserved the original draggable/flippable photo galleries and Home typewriter.

## Tuning values

Edit at the bottom of `styles/globals.css`:

- `.site-container--home`: width of Home
- `.site-container--standard`: width of other pages
- `.direction-layout`: max width for the three research cards
- `.direction-card` / `.direction-visual`: research-card size
- `:root` (`--site-violet`, `--site-violet-soft`): site-wide purple accents
- `.about-connect`: integrated links near the biography

## Validation

- Static TypeScript/TSX parser and CSS parser checked.
- Layout-only browser smoke-check at widths 1440, 1080, 390px passed; *not a complete Next.js runtime test*.
- Run a full build on your local environment after accepting changes: `npm.cmd run build`.

## Changed files

- `components/PeopleGrid.tsx`
- `components/PublicationCard.tsx`
- `components/PublicationLink.tsx`
- `components/ResearchDirections.tsx`
- `components/ScrollReveal.tsx`
- `components/Section.tsx`
- `components/TalkList.tsx`
- `components/ThemeSwitcher.tsx`
- `components/Workplaces.tsx`
- `components/header.tsx`
- `pages/_app.tsx`
- `pages/about.tsx`
- `pages/blog/index.tsx`
- `pages/index.tsx`
- `pages/people.tsx`
- `pages/publications.tsx`
- `pages/talks.tsx`
- `styles/globals.css`
