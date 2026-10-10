import { useState } from "react";
import Image from "next/image";
import type { Person } from "../types/people";

export function personImageSrc(path: string): string {
  return path.startsWith("/") || /^https?:\/\//i.test(path) ? path : `/${path}`;
}

/**
 * Two-sided portrait: a cartoonized front and the original profile photo.
 * Mouse hover flips on desktop; click/keyboard toggles on touch and desktop.
 * If only a university logo is available, the reverse shows that logo instead
 * of suggesting a fictional portrait is the member's real photograph.
 */
export default function PortraitFlip({
  person,
  featured = false,
  cloned = false,
}: {
  person: Person;
  featured?: boolean;
  cloned?: boolean;
}) {
  const [flipped, setFlipped] = useState(false);
  const originalIsLogo = person.image.includes("/schools/");
  const backLabel = originalIsLogo ? "affiliation logo" : "original photo";
  const styleName = person.avatar ? "Illustrated portrait" : "Portrait";
  const inner = (
    <>
      <span className="portrait-flip-inner">
        <span className="portrait-flip-face portrait-flip-face--front">
          <Image
            src={personImageSrc(person.avatar ?? person.image)}
            alt=""
            fill
            sizes={featured ? "(max-width: 767px) 90vw, 360px" : "(max-width: 530px) 90vw, (max-width: 980px) 44vw, 280px"}
            priority={featured && !cloned}
            className="portrait-image portrait-image--illustrated"
          />
          <span className="portrait-face-hint" aria-hidden="true">↻ <span>{originalIsLogo ? "School logo" : "Real photo"}</span></span>
        </span>
        <span className={`portrait-flip-face portrait-flip-face--back ${originalIsLogo ? "portrait-flip-face--logo" : ""}`}>
          <Image
            src={personImageSrc(person.image)}
            alt=""
            fill
            sizes={featured ? "(max-width: 767px) 90vw, 360px" : "(max-width: 530px) 90vw, (max-width: 980px) 44vw, 280px"}
            className="portrait-image"
          />
          {originalIsLogo && <span className="portrait-pending-label">Photo not yet available</span>}
        </span>
      </span>
    </>
  );

  return (
    <button
      type="button"
      tabIndex={cloned ? -1 : undefined}
      aria-hidden={cloned || undefined}
      className={`portrait-flip ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped((current) => !current)}
      aria-label={`${styleName} of ${person.name}. Show ${backLabel} on the reverse.`}
      aria-pressed={flipped}
      title={`Hover or click to flip ${person.name}'s portrait`}
    >
      {inner}
    </button>
  );
}
