/** RSI Science is the research vision, not a claim that existing projects recursively improve themselves. */
import type { ResearchDemo, ResearchDirection } from "./research";
import { researchDemos } from "./research";

export const rsiResearchDirections: ResearchDirection[] = [
  {
    number: "01",
    title: "Self-Improving Scientific Agents",
    subtitle: "From hypotheses to verifiable improvement",
    description:
      "We explore scientific agents that propose, test, and refine models, algorithms, and research workflows using reliable feedback from experiments and computation.",
    keywords: ["Scientific Agents", "Verifiable Feedback", "Recursive Improvement"],
  },
  {
    number: "02",
    title: "Scientific World Models",
    subtitle: "Learning dynamics across time and scale",
    description:
      "We build physically grounded models for long-horizon evolution and predictive simulation, from atomistic states to complex scientific processes.",
    keywords: ["Atomistic World Models", "Long-Horizon Dynamics", "Physical Consistency"],
  },
  {
    number: "03",
    title: "Scalable Scientific Computing",
    subtitle: "Compute and verify at scientific scale",
    description:
      "We develop matrix-native operators, accelerator-efficient algorithms, and scalable simulation systems that make scientific modeling and verification practical.",
    keywords: ["Matrix-Native Computing", "GPU / AI Accelerators", "Scientific Systems"],
  },
];

/** Relabel the four existing research demo cards without altering user-managed media paths. */
export const rsiResearchDemos: ResearchDemo[] = researchDemos;

