import Image from "next/image";
import { Person } from "../data/people";

export default function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <div className="flex flex-wrap gap-8">
      {people.map((person) => (
        <div key={person.name} className="w-32 text-center">
          <Image
            src={person.image}
            alt={person.name}
            width={80}
            height={80}
            className="rounded-full mx-auto"
          />
          <p className="mt-2 font-semibold">{person.name}</p>
          <p className="text-sm text-secondary">{person.description}</p>
        </div>
      ))}
    </div>
  );
}
