export interface Publication {
  title: string;
  authors: string;
  journal: string;         // Full conference or journal citation, e.g. "SC 2026"
  date: string;
  link?: string;
  repo?: string;
  slides?: string;
  project?: string;
  award?: string;
  corresponding?: boolean;
  /** Optional short venue shown in the badge and venue filter (e.g. "SC", "ACM TACO"). */
  venue?: string;
  /** Optional research-direction override; for new papers, prefer setting this explicitly. */
  researchArea?: string;
}
