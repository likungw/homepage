/**
 * Visual highlights shown on the Home page.
 *
 * Put four looping MP4/WebM/GIF files in public/research/ and update mediaSrc.
 * Until those files are available, each card displays a designed fallback.
 * MP4/WebM is recommended for performance and reduced-motion support.
 */
export type ResearchDemo = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  mediaSrc: string;
  poster?: string;
  accent: string;
  background: string;
  href: string;
  linkText: string;
};

export const researchDemos: ResearchDemo[] = [
  {
    id: "atomworld-mirror",
    number: "01",
    title: "AtomWorld-Mirror",
    category: "SCIENTIFIC WORLD MODELS",
    description: "Macro-step world modeling of long-horizon materials evolution.",
    mediaSrc: "/research/atomworld-mirror-lineart-v14.mp4",
    poster: "/research/atomworld-mirror-lineart-v14-poster.png",
    href: "https://arxiv.org/abs/2610.11527",
    linkText: "Open arXiv",
    accent: "#91A6DF",
    background: "#FEFEFF",
  },
  {
    id: "swarmthinkers",
    number: "02",
    title: "SwarmThinkers",
    category: "AI-DRIVEN SIMULATION",
    description: "Physically consistent, learned atomic KMC transitions at scale.",
    mediaSrc: "/research/swarmthinkers-lineart-v14.mp4",
    poster: "/research/swarmthinkers-lineart-v14-poster.png",
    href: "https://arxiv.org/abs/2505.20094",
    linkText: "Open arXiv",
    accent: "#89B9CF",
    background: "#FEFEFF",
  },
  {
    id: "makoxc",
    number: "03",
    title: "MakoXC",
    category: "ACCELERATOR-NATIVE QUANTUM CHEMISTRY",
    description: "Matrix-aligned exchange–correlation evaluation for DFT.",
    mediaSrc: "/research/makoxc-lineart-v14.mp4",
    poster: "/research/makoxc-lineart-v14-poster.png",
    href: "https://arxiv.org/abs/2609.01025",
    linkText: "Open arXiv",
    accent: "#B79AD8",
    background: "#FEFEFF",
  },
  {
    id: "flashfftstencil",
    number: "04",
    title: "FlashFFTStencil",
    category: "SCALABLE SCIENTIFIC COMPUTING",
    description: "FFT-based dense stencil computation on tensor cores.",
    mediaSrc: "/research/flashfftstencil-lineart-v14.mp4",
    poster: "/research/flashfftstencil-lineart-v14-poster.png",
    href: "https://www.microsoft.com/en-us/research/publication/flashfftstencil-bridging-fast-fourier-transforms-to-memory-efficient-stencil-computations-on-tensor-core-units/",
    linkText: "Open paper",
    accent: "#7F95D5",
    background: "#FEFEFF",
  }
];

export type ResearchDirection = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
};

export const researchDirections: ResearchDirection[] = [
  {
    number: "01",
    title: "Physical AI",
    subtitle: "World models for the physical world",
    description:
      "We develop physically grounded world models that learn dynamics, support long-horizon reasoning, and connect perception with interaction in real environments.",
    keywords: ["World Models", "Embodied Intelligence", "Physical Dynamics"],
  },
  {
    number: "02",
    title: "AI for Science",
    subtitle: "Intelligence at atomic and molecular scales",
    description:
      "We combine machine learning with scientific simulation to understand and predict complex microscopic processes, from quantum chemistry and molecular dynamics to kinetic evolution.",
    keywords: ["Atomistic Simulation", "Molecular Modeling", "Long-Horizon Dynamics"],
  },
  {
    number: "03",
    title: "High-Performance Computing",
    subtitle: "Scalable systems for scientific intelligence",
    description:
      "We rethink numerical algorithms, matrix-native operators, compilers, and parallel systems to make large-scale AI and scientific computing efficient on modern accelerators.",
    keywords: ["GPU / AI Accelerators", "Matrix-Native Algorithms", "Scalable Systems"],
  },
];
