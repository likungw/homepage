import Image from "next/image";
import { Person } from "../types/people";

interface PeopleGridProps {
  title: string;
  people: Person[];
}

export default function PeopleGrid({ title, people }: PeopleGridProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-medium text-secondary">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {people.map((person) => {
          const CardContent = (
            <div
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md min-h-[250px] transition-all duration-300"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
              <h3 className="mt-4 font-semibold text-lg">{person.name}</h3>
              <p className="text-secondary text-center mt-1">{person.description}</p>
            </div>
          );

          return (
            <div
              key={person.name}
              className="relative rounded-xl p-[2px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#660099] hover:via-[#9900cc] hover:to-[#cc33ff]"
            >
              {person.link ? (
                <a
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {CardContent}
                </a>
              ) : (
                CardContent
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
