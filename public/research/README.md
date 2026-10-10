# Home page research videos

This directory is intentionally empty of research footage in the delivered
revision: the supplied repository did not contain the four requested animations.

Add files using the default paths in `data/research.ts`:

- physical-world.mp4
- atomistic-dynamics.mp4
- quantum-chemistry.mp4
- hpc-systems.mp4

The Home page cards already use these paths. Each card displays a styled
placeholder until its corresponding file is available.

Formats: .mp4, .webm, or .gif. If you use another name or extension, update
`mediaSrc` in `data/research.ts`. For best performance use muted, looping,
short MP4/WebM files under ~3 MB each. Prefer a static JPG/WebP `poster` for
visitors who have enabled reduced motion. The videos play only when visible.

Optional conversion from GIF to MP4:

    ffmpeg -i input.gif -vf "fps=18,scale=960:-2:flags=lanczos" \
      -an -c:v libx264 -pix_fmt yuv420p -movflags +faststart output.mp4
