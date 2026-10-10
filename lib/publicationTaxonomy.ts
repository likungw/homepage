import type { Publication } from "../types/publication";

export const ALL_VENUES = "All Venues";
export const ALL_RESEARCH_AREAS = "All Research Areas";

/** Consistent research taxonomy. Physical AI will appear when an entry uses it. */
export const RESEARCH_AREA_ORDER = [
  "Physical AI",
  "AI for Science",
  "High-Performance Computing",
  "AI Systems",
  "Other",
] as const;

/**
 * Existing papers are mapped by a stable title prefix rather than vague keywords.
 * This avoids classifying all GPU or AI papers as Physical AI.
 * Future entries can set publication.researchArea to override the mapping.
 */
const RESEARCH_AREA_BY_TITLE: ReadonlyArray<readonly [string, string]> = [
  ["MakoXC:", "AI for Science"],
  ["PyramidFFT:", "High-Performance Computing"],
  ["Redundant Array Computation Elimination", "High-Performance Computing"],
  ["Pushing a Single GPU", "AI for Science"],
  ["MatXtract:", "High-Performance Computing"],
  ["SwarmThinkers:", "AI for Science"],
  ["SparStencil:", "High-Performance Computing"],
  ["Matrix Is All You Need:", "AI for Science"],
  ["Matryoshka:", "AI for Science"],
  ["JENGA:", "AI Systems"],
  ["Neuralink:", "AI Systems"],
  ["FlashFFTStencil:", "High-Performance Computing"],
  ["Jigsaw:", "High-Performance Computing"],
  ["LoRAStencil:", "High-Performance Computing"],
  ["LONG EXPOSURE:", "AI Systems"],
  ["VNEC:", "High-Performance Computing"],
  ["ConvStencil:", "High-Performance Computing"],
  ["OpenFFT:", "High-Performance Computing"],
  ["AGCM-3DLF:", "High-Performance Computing"],
  ["EgpuIP:", "High-Performance Computing"],
  ["LBBGEMM:", "High-Performance Computing"],
  ["An Efficient Vectorization Scheme", "High-Performance Computing"],
  ["An Accurate and Efficient Large-scale Regression Method", "AI Systems"],
  ["Reducing Redundancy in Data Organization", "High-Performance Computing"],
  ["Temporal Vectorization for Stencils", "High-Performance Computing"],
  ["OpenKMC:", "AI for Science"],
  ["swMD:", "AI for Science"],
  ["FastNBL:", "AI for Science"],
  ["Communication-Avoiding for Dynamical Core", "High-Performance Computing"],
];

export function getPublicationResearchArea(pub: Publication): string {
  if (pub.researchArea?.trim()) return pub.researchArea.trim();
  const title = pub.title.trim().toLowerCase();
  const match = RESEARCH_AREA_BY_TITLE.find(([prefix]) =>
    title.startsWith(prefix.toLowerCase())
  );
  return match?.[1] ?? "Other";
}

/**
 * Derives short, filter-friendly venue abbreviations from existing journal text.
 * No venue is changed in the source publication data; override via pub.venue.
 */
export function getPublicationVenue(pub: Publication): string {
  if (pub.venue?.trim()) return pub.venue.trim();
  const source = pub.journal?.trim() ?? "";
  if (!source) return "Unspecified";

  if (/programming language design and implementation|\bPLDI\b/i.test(source)) return "PLDI";
  if (/transactions on architecture and code optimization|\bTACO\b/i.test(source)) return "ACM TACO";
  if (/transactions on parallel and distributed systems|\bTPDS\b/i.test(source)) return "IEEE TPDS";
  if (/journal of supercomputing/i.test(source)) return "Journal of Supercomputing";
  if (/isc high performance|\bISC\s*(?:20\d{2})?\b/i.test(source)) return "ISC";
  if (/\bPPoPP\b/i.test(source)) return "PPoPP";
  if (/\bASPLOS\b/i.test(source)) return "ASPLOS";
  if (/\bUSENIX\s*ATC\b|^ATC\b/i.test(source)) return "USENIX ATC";
  if (/^SC(?:\s*20\d{2})?$/i.test(source)) return "SC";
  if (/\bIPDPS\b/i.test(source)) return "IPDPS";
  if (/\bICPP\b/i.test(source)) return "ICPP";
  if (/\bISPA\b/i.test(source)) return "ISPA";
  if (/\bHPCC\b/i.test(source)) return "HPCC";
  if (/^ICS\b/i.test(source)) return "ICS";
  if (/\barXiv\b/i.test(source)) return "arXiv";
  if (/to be appeared|to appear|forthcoming/i.test(source)) return "To appear";

  return source.replace(/\s*(?:\(?(?:19|20)\d{2}\)?)$/, "").trim() || source;
}
