# Version 2 — Organic Home gallery & original About photo animations

A focused update to the **previous Home/About redesign**. This is an incremental
patch, NOT a new Next.js project; keep all your local `data/`, `public/`, `.git/`,
`package.json` and personal edits outside the three files below.

## What changed

- **Home:** the four research cards become slightly overlapped, differently
  sized and rotated photographic prints. Spring entrance, hover-to-flip notes,
  drag-to-rearrange on desktop, tap-to-flip and horizontal swipe on mobile.
  Reduced-motion mode is respected. The fallback graphics now differ by topic.
- **About:** restores the **original** four-picture personal Gallery and its
  `Photo` motion effects. The portrait also uses the original draggable,
  tilting, 3D-flipping `Photo` component instead of the rigid static frame.
- The rest of Home (intro and Research Directions) and the rest of About
  (biography, awards, experience, recruiting, service) are unchanged.

## Installation: Windows / VS Code

1. In `D:\Home\homepage`, back up these 3 files:
   - `components/ResearchShowcase.tsx`
   - `pages/about.tsx`
   - `styles/globals.css`
2. Unzip `homepage_gallery_v2_patch.zip`.
3. Copy the **three named files** into the corresponding paths of
   `D:\Home\homepage`, allowing replacement. Don't replace entire folders.
4. If the Next.js development server is already running, saving these files
   should refresh the page. Otherwise run:

       npm.cmd run dev

5. Preview `http://localhost:3000` (Home) and `http://localhost:3000/about`.

No new npm dependencies and no `npm install` necessary after this patch.

## Four real animations (important)

The uploaded source did **not** include the research footage. The new fallback
art is **illustrative only**, not images of actual research. The media paths
are unchanged from the previous design; put your own videos in:

- `public/research/physical-world.mp4`
- `public/research/atomistic-dynamics.mp4`
- `public/research/quantum-chemistry.mp4`
- `public/research/hpc-systems.mp4`

Or change `mediaSrc` in `data/research.ts` to point to your `.gif`, `.webm`,
`.mp4` files. Videos are muted and loop when visible. A `poster` image is
recommended for reduced-motion users.

## Fine tuning

- **Angle/overlap/order:** `photoPositions` at top of
  `components/ResearchShowcase.tsx`. Change `left`, `top`, `width`, `angle`.
- **Mobile layout:** `.research-fan` rules at the end of `styles/globals.css`.
- **Titles and video paths:** `data/research.ts` (not overwritten by this patch).
- **Original photo interaction:** `components/Gallery.tsx` is intentionally
  reused unchanged.

## Testing note

Source/JSX syntax and patch file contents were checked locally. No Next.js
production build or browser acceptance test was performed here, because
`node_modules` were not available in the processing environment. Your working
Windows installation can run `npm.cmd run dev` and `npm.cmd run build` for final
verification.
