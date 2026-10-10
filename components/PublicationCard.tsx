import { Publication } from "../types/publication";
import { getPublicationResearchArea, getPublicationVenue } from "../lib/publicationTaxonomy";
import Section from "./Section";
import Award from "./Award";
import PublicationLink from "./PublicationLink";

type Props = { pub: Publication };

export default function PublicationCard({ pub }: Props) {
  const authorsText = pub.corresponding
    ? pub.authors.replace(/Kun Li(?!\*)/, "Kun Li*")
    : pub.authors;
  const venue = getPublicationVenue(pub);
  const researchArea = getPublicationResearchArea(pub);

  return (
    <Section
      heading={pub.date}
      className={`publication-card ${pub.award ? "publication-card--award" : ""}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold leading-snug">{pub.title}</h3>
          <p className="text-secondary">{authorsText}</p>
          <p className="text-secondary font-semibold">
            {pub.journal}
            {pub.award && (
              <>
                {" "}🏆 <Award award={pub.award} />
              </>
            )}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2" aria-label="Publication categories">
            <span
              className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold"
              style={{
                color: "var(--site-violet-strong)",
                background: "var(--site-violet-soft)",
                border: "1px solid var(--site-stroke)",
              }}
              title={`Venue: ${venue}`}
            >
              <span className="sr-only">Venue: </span>{venue}
            </span>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium"
              style={{
                color: "var(--sand11)",
                background: "var(--site-surface)",
                border: "1px solid var(--site-stroke)",
              }}
              title={`Research Area: ${researchArea}`}
            >
              <span className="sr-only">Research Area: </span>{researchArea}
            </span>
          </div>
          <div className="mt-1 flex flex-wrap gap-4 text-sm">
            {pub.link && <PublicationLink href={pub.link} icon="📄" label="Paper" />}
            {pub.repo && <PublicationLink href={pub.repo} icon="💻" label="Repo" />}
            {pub.project && <PublicationLink href={pub.project} icon="📁" label="Project" />}
            {pub.slides && <PublicationLink href={pub.slides} icon="🎤" label="Slides" />}
          </div>
        </div>
      </div>
    </Section>
  );
}
