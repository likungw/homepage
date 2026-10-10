import type { Person } from "../types/people";
import PortraitFlip from "./PortraitFlip";

/** Two identical groups slide together for a seamless rightward marquee. */
export default function AlumniCarousel({ people }: { people: Person[] }) {
  if (!people.length) return null;

  const cards = (duplicate: boolean) => people.map((person) => (
    <article className="alumni-card" key={`${person.name}-${duplicate ? "copy" : "original"}`}>
      <div className="alumni-card-image">
        <PortraitFlip person={person} cloned />
      </div>
      <h3>{person.name}</h3>
      <p>{person.description}</p>
    </article>
  ));

  return (
    <div className="alumni-carousel" role="region" aria-label="Alumni, continuously moving from left to right">
      <div className="alumni-carousel-top">
        <p>Where our alumni are now <span className="alumni-spark" aria-hidden="true">✳</span></p>
        <span className="alumni-motion-note">ALWAYS PART OF THE JOURNEY <span aria-hidden="true">✦</span></span>
      </div>
      <ul className="sr-only" aria-label="Alumni names">
        {people.map((person) => <li key={person.name}>{person.name}, {person.description}</li>)}
      </ul>
      <div className="alumni-marquee" aria-hidden="true">
        <div className="alumni-marquee-track">
          <div className="alumni-marquee-group">{cards(false)}</div>
          <div className="alumni-marquee-group" aria-hidden="true">{cards(true)}</div>
        </div>
      </div>
      <p className="alumni-help">Hover to pause · Tap a portrait to see the original</p>
    </div>
  );
}
