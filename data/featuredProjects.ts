/** Featured research entry points. All descriptions reflect actual project scope. */
import type { ResearchProject } from "./projects";

export const featuredResearchProjects: ResearchProject[] = [
  {
    slug: "atomworld-mem",
    direction: "02",
    title: "AtomWorld-Mem",
    eyebrow: "SCIENTIFIC WORLD MODELS · MEMORY",
    summary: "Memory-restored world states for long-horizon atomistic evolution.",
    overview:
      "AtomWorld-Mem integrates multi-scale atomistic keyframes, short-term event memory, and long-term structural memory to restore latent state from incomplete snapshots. Simulator-governed KMC provides physical event legality and time updates.",
    focus: ["Atomistic world models", "Memory-based state restoration", "Long-horizon KMC"],
    status: "Research showcase",
    paperUrl: "https://arxiv.org/abs/2609.31133",
    // No project-homepage URL has been provided yet. Falls back to /projects/atomworld-mem.
    // Add websiteUrl: "https://<verified project site>/" once available.
  },
  {
    slug: "atomworld-mirror",
    direction: "02",
    title: "AtomWorld-Mirror",
    eyebrow: "SCIENTIFIC WORLD MODELS · MACRO-STEP DYNAMICS",
    summary: "Macro-step modeling of critical evolution backbones for materials dynamics.",
    overview:
      "AtomWorld-Mirror learns physically reachable transitions between decisive atomistic states, predicting structural updates together with their accumulated physical time to accelerate long-term materials evolution.",
    focus: ["Macro-step dynamics", "Physical consistency", "Materials evolution"],
    status: "Research showcase",
    websiteUrl: "https://atomworld-mirror.github.io/",
  },
  {
    slug: "wamachine",
    direction: "01",
    title: "WAMachine",
    eyebrow: "PRIOR SYSTEMS RESEARCH · STATEFUL AI INFERENCE",
    summary: "Reuse intermediate inference states to accelerate world-action models.",
    overview:
      "WAMachine is prior research on training-free, stateful world-action model inference. It preserves useful computation across replanning, denoising, and model layers. It is included as relevant efficiency and agent-systems experience, not as a demonstrated self-improving scientific agent.",
    focus: ["Stateful inference", "Computational reuse", "Low-latency AI systems"],
    status: "Research showcase",
    websiteUrl: "https://parrotkk.github.io/WAMachine_page/",
  },
  {
    slug: "scientific-agents-vision",
    direction: "01",
    title: "Self-Improving Scientific Agents",
    eyebrow: "RSI SCIENCE · RESEARCH VISION",
    summary: "A research direction toward verifiable, feedback-driven scientific workflows.",
    overview:
      "This is a proposed research direction, not a claim of an implemented self-improving system. The goal is to connect scientific hypothesis generation, computational verification, and iterative improvement of models, methods, and tools.",
    focus: ["Scientific hypotheses", "Verification and feedback", "Method improvement"],
    status: "Concept demo",
  },
];
