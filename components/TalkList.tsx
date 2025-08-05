import Section from "./Section";
import Link from "./Link";
import { formatDate } from "../lib/formatdate";

export interface Talk {
  title?: string;
  conference?: string;
  date: string;
  location: string;
  link?: string;
  invited?: string;
  keynote?: boolean;
  discussant?: boolean;
}

export default function TalkList({ talks }: { talks: Talk[] }) {
  return (
    <ul className="space-y-4">
      {talks
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((talk) => (
          <li
            key={`${talk.title ?? ""}${talk.conference ?? ""}${talk.date}`}
            className={`rounded-xl p-4 border ${
              talk.keynote ? "border-yellow-400 bg-yellow-50" : "border-muted"
            }`}
          >
            <Section heading={formatDate(talk.date)} className="p-0 border-0">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h3>
                    {talk.discussant && <span className="text-secondary">Discussant for </span>}
                    {talk.keynote && (
                      <span className="font-semibold text-highlight">Keynote: </span>
                    )}
                    {talk.title}
                  </h3>
                  <p className="text-secondary">{talk.conference}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    {talk.invited && <span>Invited by {talk.invited}</span>}
                    {talk.location && <span>{talk.location}</span>}
                    {talk.link && (
                      <Link href={talk.link} underline>
                        Read More
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Section>
          </li>
        ))}
    </ul>
  );
}
