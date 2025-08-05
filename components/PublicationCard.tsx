// components/PublicationCard.tsx
import { Publication } from "../types/publication";
import Section from "./Section";
import Award from "./Award";
import PublicationLink from "./PublicationLink";

type Props = {
  pub: Publication;
};

export default function PublicationCard({ pub }: Props) {
  let authorsText = pub.authors;
  if (pub.corresponding) {
    authorsText = authorsText.replace(/Kun Li(?!\*)/, "Kun Li*");
  }

  return (
    <Section
      heading={pub.date}
      className={`p-4 rounded-lg border ${
        pub.award ? "bg-yellow-50 border-yellow-400" : "border-gray-200"
      }`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h3>{pub.title}</h3>
          <p className="text-secondary">{authorsText}</p>
          {pub.award && (
            <p className="text-secondary font-semibold">
              {pub.journal}
              {pub.award && (
                <>
                  {" "}
                  🏆 <span className="font-semibold text-secondary">❬{pub.award}❭</span>
                </>
              )}
            </p>
          )}
          <p className="text-secondary">{pub.journal}</p>
          <div className="flex flex-wrap gap-4 text-sm">
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
