import Link from "components/Link";
import type { Person } from "../types/people";
import PortraitFlip from "./PortraitFlip";

export { personImageSrc } from "./PortraitFlip";

export default function PeopleGrid({ people, featured = false }: { people: Person[]; featured?: boolean }) {
  if (featured) {
    return (
      <div className="people-feature-list">
        {people.map((person) => (
          <article className="people-feature" key={person.name}>
            <div className="people-feature-image">
              <PortraitFlip person={person} featured />
              <span className="people-image-corner" aria-hidden="true">01 / PI</span>
            </div>
            <div className="people-feature-copy">
              <p className="home-section-kicker"><span className="home-kicker-line" /> GROUP LEAD</p>
              <h3>{person.name}<span className="home-accent">.</span></h3>
              <p className="people-feature-role">Assistant Professor · {person.description}</p>
              <p className="people-feature-overview">Pursuing RSI Science through scientific agents, atomistic world models, and accelerator-native computing — with verifiable scientific progress as the long-term goal.</p>
              <Link href="https://air.tsinghua.edu.cn/en/info/1046/1962.htm" className="people-profile-link">Meet the PI <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="people-grid">
      {people.map((person) => (
        <article key={person.name} className="people-member-card">
          <div className="people-member-image">
            <PortraitFlip person={person} />
          </div>
          <div className="people-member-info">
            <h3>{person.link ? (
              <a href={person.link} target="_blank" rel="noopener noreferrer">{person.name} <span aria-hidden="true">↗</span></a>
            ) : person.name}</h3>
            <p>{person.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
