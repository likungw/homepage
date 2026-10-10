# Kun Li Research Group — Personal Academic Website

Research-first academic homepage built with Next.js 13 (Pages Router), React 18,
TypeScript, Tailwind CSS and Framer Motion. Uses a shared lilac/violet design language.

## Site navigation

| URL | Purpose |
|---|---|
| `/` | Research-group introduction, four draggable research-media prints and animated vision |
| `/about` | PI biography, original interactive photo gallery, recruitment and academic CV |
| `/people` | Featured PI, large graduate/undergraduate portraits and scrolling alumni |
| `/publications` | Publications from `data/publications.ts` |
| `/talks` | Presentations from `data/talks.ts` |
| `/projects` | Animated research-direction explorer with linked mini-projects |
| `/projects/[slug]` | Editable, standalone mini-project homepage |

Old `/blog` links redirect to `/projects`. Old MDX source files are still archived
under `data/blog`, `data/project` and `data/publication`, but no longer compiled.

## Run locally (Windows PowerShell / VS Code)

```powershell
npm.cmd install
npm.cmd run dev
```

Then visit `http://localhost:3000`. When upgrading a working V5 installation,
`npm.cmd run dev` is generally enough because V6 adds no new dependency.

## Edit content

- Research vision: `data/researchVision.ts` (shared between Home and Projects)
- Four research media paths: **your existing** `data/research.ts`
- Research directions: **your existing** `data/research.ts`
- Mini-projects and their details: `data/projects.ts`
- Members and alumni: **your existing** `data/people.ts`
- Publications: **your existing** `data/publications.ts`
- Talks: **your existing** `data/talks.ts`

Every mini-project gets a standalone URL such as `/projects/mako-xc`.
Project items tagged `Concept demo` are **not published research claims**.
For external references, set `paperUrl` to a valid link or a file in `public/pdf`.

## UI and accessibility

- Home image prints remain draggable / hover-to-flip on desktop.
- Project direction selection is mouse and keyboard accessible, and opens a
  raised card deck with direct links to each project homepage.
- Alumni scrolling works via buttons, trackpad and touch; optional auto-advance
  pauses when hovered or focused and respects reduced-motion settings.
- The site uses responsive layouts and common violet tokens in
  `styles/globals.css`.

## Build and test

```powershell
npm.cmd run type-check
npm.cmd run build
```

No Contentlayer preprocessing is required. The Sitemap is created dynamically at
`/sitemap.xml` and `public/robots.txt` points to the right site.
