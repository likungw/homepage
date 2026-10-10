import { useMemo, useState } from "react";
import { NextSeo } from "next-seo";
import { FullName, SiteURL } from "./about";
import { publications } from "../data/publications";
import { Publication } from "../types/publication";
import PublicationCard from "../components/PublicationCard";
import PublicationFilterSelect from "../components/PublicationFilterSelect";
import {
  ALL_RESEARCH_AREAS,
  ALL_VENUES,
  RESEARCH_AREA_ORDER,
  getPublicationResearchArea,
  getPublicationVenue,
} from "../lib/publicationTaxonomy";

const seoTitle = `Publications | ${FullName}`;
const seoDesc = `Selected publications by ${FullName}.`;
const ALL_YEARS = "All Years";

function publicationYear(pub: Publication): string {
  const match = pub.date.match(/(?:19|20)\d{2}/);
  return match ? match[0] : "Unknown";
}

const years = [
  ALL_YEARS,
  ...Array.from(new Set(publications.map(publicationYear))).sort((a, b) =>
    Number(b) - Number(a)
  ),
];

const venues = [
  ALL_VENUES,
  ...Array.from(new Set(publications.map(getPublicationVenue))).sort((a, b) =>
    a.localeCompare(b)
  ),
];

const researchAreas = [
  ALL_RESEARCH_AREAS,
  ...Array.from(new Set(publications.map(getPublicationResearchArea))).sort((a, b) => {
    const ia = RESEARCH_AREA_ORDER.indexOf(a as typeof RESEARCH_AREA_ORDER[number]);
    const ib = RESEARCH_AREA_ORDER.indexOf(b as typeof RESEARCH_AREA_ORDER[number]);
    return (ia < 0 ? 100 : ia) - (ib < 0 ? 100 : ib) || a.localeCompare(b);
  }),
];

function PublicationListGrouped({ pubs }: { pubs: Publication[] }) {
  const sorted = [...pubs].sort(
    (a, b) => Number(publicationYear(b)) - Number(publicationYear(a))
  );
  const groupYears = Array.from(new Set(sorted.map(publicationYear)));

  return (
    <>
      {groupYears.map((year) => (
        <li key={year}>
          <h2 className="mb-2 mt-6 text-xl font-bold">{year}</h2>
          <ul className="flex flex-col gap-4">
            {sorted
              .filter((pub) => publicationYear(pub) === year)
              .map((pub) => (
                <PublicationCard key={pub.title + pub.journal + pub.date} pub={pub} />
              ))}
          </ul>
        </li>
      ))}
    </>
  );
}

export default function PublicationsPage() {
  const [showAwardsOnly, setShowAwardsOnly] = useState(false);
  const [selectedYear, setSelectedYear] = useState(ALL_YEARS);
  const [selectedVenue, setSelectedVenue] = useState(ALL_VENUES);
  const [selectedArea, setSelectedArea] = useState(ALL_RESEARCH_AREAS);

  const totalPublications = publications.length;
  const correspondingCount = publications.filter((p) => p.corresponding).length;
  const awardsCount = publications.filter((p) => p.award).length;

  const publicationsByYear: Record<string, number> = {};
  publications.forEach((pub) => {
    const year = publicationYear(pub);
    publicationsByYear[year] = (publicationsByYear[year] || 0) + 1;
  });

  // The award, year, venue, and research-direction filters combine with AND semantics.
  const displayedPublications = useMemo(
    () => publications.filter((pub) =>
      (!showAwardsOnly || Boolean(pub.award)) &&
      (selectedYear === ALL_YEARS || publicationYear(pub) === selectedYear) &&
      (selectedVenue === ALL_VENUES || getPublicationVenue(pub) === selectedVenue) &&
      (selectedArea === ALL_RESEARCH_AREAS || getPublicationResearchArea(pub) === selectedArea)
    ),
    [showAwardsOnly, selectedYear, selectedVenue, selectedArea]
  );

  const anyFilter = showAwardsOnly || selectedYear !== ALL_YEARS ||
    selectedVenue !== ALL_VENUES || selectedArea !== ALL_RESEARCH_AREAS;

  const clearFilters = () => {
    setShowAwardsOnly(false);
    setSelectedYear(ALL_YEARS);
    setSelectedVenue(ALL_VENUES);
    setSelectedArea(ALL_RESEARCH_AREAS);
  };

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `${SiteURL}/publications`,
          description: seoDesc,
          site_name: FullName,
        }}
        twitter={{ cardType: "summary_large_image" }}
      />

      <div className="site-list-page flex flex-col gap-10 md:gap-10">
        <div>
          <h1 className="site-page-title">
            Selected Publications<span className="home-accent">.</span>
          </h1>
          <p className="site-page-intro mt-3 text-secondary">
            For a full list, see{" "}
            <a
              href="https://scholar.google.com.hk/citations?user=2J-7nxUAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="site-inline-link underline underline-offset-4"
            >
              Google Scholar
            </a>.
          </p>
          <p className="site-page-intro mt-1 text-secondary">
            {totalPublications} Publications • {correspondingCount} Corresponding Author • {awardsCount} Awards
            <br />
            {years.filter((y) => y !== ALL_YEARS).map((year) =>
              `${year}: ${publicationsByYear[year] || 0}`
            ).join(" • ")}
            <br />
            * denotes corresponding author.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5" aria-label="Publication filters">
            <button
              type="button"
              aria-pressed={!showAwardsOnly}
              onClick={() => setShowAwardsOnly(false)}
              className={`site-filter-button ${!showAwardsOnly ? "is-active" : ""}`}
            >
              All Publications
            </button>
            <button
              type="button"
              aria-pressed={showAwardsOnly}
              onClick={() => setShowAwardsOnly(true)}
              className={`site-filter-button ${showAwardsOnly ? "is-active" : ""}`}
            >
              Awarded Publications
            </button>
            <PublicationFilterSelect
              label="Year" value={selectedYear} onChange={setSelectedYear}
              options={years} widthClass="w-36"
            />
            <PublicationFilterSelect
              label="Venue" value={selectedVenue} onChange={setSelectedVenue}
              options={venues} widthClass="w-44"
            />
            <PublicationFilterSelect
              label="Area" value={selectedArea} onChange={setSelectedArea}
              options={researchAreas} widthClass="w-56"
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-secondary" aria-live="polite">
            <span>Showing {displayedPublications.length} of {totalPublications} publications</span>
            {anyFilter && (
              <button
                type="button"
                onClick={clearFilters}
                className="font-semibold text-[var(--site-violet-strong)] underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {displayedPublications.length ? (
          <ul className="flex flex-col gap-4">
            <PublicationListGrouped pubs={displayedPublications} />
          </ul>
        ) : (
          <div
            className="rounded-2xl border px-6 py-12 text-center"
            style={{ borderColor: "var(--site-stroke)", background: "var(--site-surface)" }}
          >
            <p className="text-lg font-semibold">No publications match these filters.</p>
            <p className="mt-2 text-secondary">Try a different venue, research area, or year.</p>
            <button type="button" onClick={clearFilters} className="site-filter-button mt-5">
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}
