import Image from "next/image";
import Section from "components/Section";
import { faculty, phdStudents } from "../data/people";
import Link from "next/link";

export default function PeoplePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Faculty Section */}
      <Section heading="Faculty" headingAlignment="left">
        <ul className="flex flex-col gap-6 animated-list">
          {faculty.map((person) => (
            <li
              key={person.name}
              className="flex items-center gap-4 p-4 rounded-lg transition-all hover:bg-secondaryA"
            >
              {person.link ? (
                <Link
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover border-2 border-transparent transition-all group-hover:border-blue-500"
                  />
                </Link>
              ) : (
                <Image
                  src={person.image}
                  alt={person.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover border-2 border-transparent"
                />
              )}
              <div>
                <p className="font-semibold">{person.name}</p>
                <p className="text-secondary text-sm">{person.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Ph.D. Students Section */}
      <Section heading="Ph.D. Students" headingAlignment="left">
        <ul className="flex flex-col gap-6 animated-list">
          {phdStudents.map((person) => (
            <li
              key={person.name}
              className="flex items-center gap-4 p-4 rounded-lg transition-all hover:bg-secondaryA"
            >
              {person.link ? (
                <Link
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover border-2 border-transparent transition-all group-hover:border-blue-500"
                  />
                </Link>
              ) : (
                <Image
                  src={person.image}
                  alt={person.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover border-2 border-transparent"
                />
              )}
              <div>
                <p className="font-semibold">{person.name}</p>
                <p className="text-secondary text-sm">{person.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
