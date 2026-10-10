/**
 * Editable project portfolio data.
 * All cards link to a working /projects/[slug] detail page.
 * "Concept demo" entries are visual placeholders, not published results.
 */
export type ResearchProject = {
  slug: string;
  direction: "01" | "02" | "03";
  title: string;
  eyebrow: string;
  summary: string;
  overview: string;
  focus: string[];
  status: "Published work" | "Research showcase" | "Concept demo";
  paperUrl?: string;
  websiteUrl?: string; // Optional external project homepage
};

export const researchProjects: ResearchProject[] = [
  {
    slug: "wamachine",
    direction: "01",
    title: "WAMachine",
    eyebrow: "PHYSICAL AI 路 WORLD ACTION MODELS",
    summary: "Faster world-action model inference through adaptive reuse of intermediate states.",
    overview:
      "WAMachine reuses intermediate inference states across closed-loop replanning, denoising steps, and Transformer layers to improve inference efficiency without additional model training.",
    focus: ["World action models", "Stateful inference", "Low-latency robotics"],
    status: "Research showcase",
    websiteUrl: "https://parrotkk.github.io/WAMachine_page/",
  },
  {
    slug: "physical-world-models",
    direction: "01",
    title: "Physical World Models",
    eyebrow: "MODEL DESIGN · DEMO",
    summary: "Learning representations that explain how physical systems evolve.",
    overview:
      "A sample project page for the lab's Physical AI direction. This showcase can be replaced with your world-model architecture, videos, benchmarks, and publication links as the project develops.",
    focus: ["Physics-aware representation", "Time-dependent prediction", "Cross-scale generalization"],
    status: "Concept demo",
  },
  {
    slug: "long-horizon-physics",
    direction: "01",
    title: "Long-Horizon Physics",
    eyebrow: "DYNAMICS · DEMO",
    summary: "Reasoning about physical dynamics across longer time horizons.",
    overview:
      "A demonstration template for future research on long-horizon dynamics. Add a project visualization and validated results before presenting it as a completed scientific contribution.",
    focus: ["Temporal modeling", "Physical consistency", "Long-horizon rollouts"],
    status: "Concept demo",
  },
  {
    slug: "swarmthinkers",
    direction: "02",
    title: "SwarmThinkers",
    eyebrow: "AI FOR SCIENCE · ATOMISTIC DYNAMICS",
    summary: "Physically consistent atomic kinetic Monte Carlo transitions at scale.",
    overview:
      "SwarmThinkers brings learned proposals to atomic kinetic Monte Carlo while preserving physical consistency. This page is an editable project showcase; the linked paper contains the technical details and results.",
    focus: ["RL-guided kinetic Monte Carlo", "Atomistic transitions", "Scientific simulation"],
    status: "Published work",
    paperUrl: "https://arxiv.org/abs/2505.20094",
  },
  {
    slug: "mako-xc",
    direction: "02",
    title: "MakoXC",
    eyebrow: "QUANTUM CHEMISTRY · DFT",
    summary: "Matrix-aligned and sparsity-aware DFT exchange-correlation evaluation.",
    overview:
      "MakoXC reorganizes density functional theory exchange-correlation computation around matrix-friendly and sparsity-aware execution. Replace this short introduction with your preferred figures, demonstrations, and performance highlights.",
    focus: ["DFT exchange-correlation", "Matrix-aligned computation", "Accelerator utilization"],
    status: "Published work",
    paperUrl: "/pdf/SC26_MakoXC__arxiv_.pdf",
  },
  {
    slug: "mako",
    direction: "02",
    title: "Mako",
    eyebrow: "QUANTUM CHEMISTRY · AI ACCELERATORS",
    summary: "Matrix-first quantum chemistry on modern AI accelerators.",
    overview:
      "The Matrix Is All You Need research line adapts quantum-chemistry computation to modern AI accelerators through matrix-native formulations. See the paper for methodological and evaluation details.",
    focus: ["Quantum-chemistry kernels", "Matrix-native operators", "Scaling scientific software"],
    status: "Published work",
    paperUrl: "/pdf/sc25_62.pdf",
  },
  {
    slug: "flashfftstencil",
    direction: "03",
    title: "FlashFFTStencil",
    eyebrow: "HPC · SCIENTIFIC STENCILS",
    summary: "Connecting FFT methods with memory-efficient tensor-core stencil computation.",
    overview:
      "FlashFFTStencil explores fast Fourier transforms and accelerator tensor cores for efficient scientific stencil computation. This page is ready for a performance figure, an algorithm animation, and implementation links.",
    focus: ["Stencil operators", "FFT transformations", "Tensor-core acceleration"],
    status: "Published work",
    paperUrl: "/pdf/ppopp25_FlashFFTStencil.pdf",
  },
  {
    slug: "sparstencil",
    direction: "03",
    title: "SparStencil",
    eyebrow: "HPC · STRUCTURED SPARSITY",
    summary: "Retargeting sparse tensor cores to scientific stencil computations.",
    overview:
      "SparStencil uses structured sparsity transformations to bring scientific stencil operations onto sparse tensor cores. The linked publication provides full evaluation results.",
    focus: ["Sparse tensor cores", "Stencil transformation", "Performance portability"],
    status: "Published work",
    paperUrl: "/pdf/sc25_53.pdf",
  },
  {
    slug: "matxtract",
    direction: "03",
    title: "MatXtract",
    eyebrow: "HPC · SPARSE LINEAR ALGEBRA",
    summary: "Sparsity-aware matrix transformations for SpMV on accelerators.",
    overview:
      "MatXtract studies matrix transformations that better match sparse matrix-vector multiplication to accelerator execution. Add code availability and performance visualizations to this project page when ready.",
    focus: ["SpMV", "Sparse matrix reorganization", "Compute density"],
    status: "Published work",
    paperUrl: "/pdf/3793864.pdf",
  },
];

export function getProjectsForDirection(number: "01" | "02" | "03") {
  return researchProjects.filter((project) => project.direction === number);
}
