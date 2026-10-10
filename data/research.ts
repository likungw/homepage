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
};

export const researchDemos: ResearchDemo[] = [
  {
    id: "world-models",
    number: "01",
    title: "Physical World Models",
    category: "PHYSICAL AI",
    description: "Learning how the physical world evolves",
    mediaSrc: "/research/physical-world.mp4",
    accent: "#74D8C5",
    background: "#182B30",
  },
  {
    id: "atomistic-dynamics",
    number: "02",
    title: "Atomistic Dynamics",
    category: "AI FOR SCIENCE",
    description: "Understanding matter across time and scale",
    mediaSrc: "/research/atomistic-dynamics.mp4",
    accent: "#9AAEF3",
    background: "#242F49",
  },
  {
    id: "quantum-chemistry",
    number: "03",
    title: "Quantum Chemistry",
    category: "SCIENTIFIC COMPUTING",
    description: "Accelerating molecular-scale computation",
    mediaSrc: "/research/quantum-chemistry.mp4",
    accent: "#DBAAEA",
    background: "#362C45",
  },
  {
    id: "hpc-systems",
    number: "04",
    title: "Accelerator-Native HPC",
    category: "HIGH-PERFORMANCE COMPUTING",
    description: "Matrix-first algorithms for modern accelerators",
    mediaSrc: "/research/hpc-systems.mp4",
    accent: "#E7C387",
    background: "#333128",
  },
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
