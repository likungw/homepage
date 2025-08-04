import Image from "next/image";
import { faculty, phdStudents } from "../data/people";

export default function PeoplePage() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-center text-3xl font-bold">People</h1>

      {/* Faculty */}
      <div>
        <h2 className="text-lg font-medium border-b pb-1 mb-4">Faculty</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {faculty.map((person) => (
            <div key={person.name} className="flex flex-col items-center text-center">
              <Image
                src={person.image}
                alt={person.name}
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
              <h3 className="mt-2 font-semibold">{person.name}</h3>
              <p className="text-secondary text-sm">{person.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ph.D. Students */}
      <div>
        <h2 className="text-lg font-medium border-b pb-1 mb-4">Ph.D. Student</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {phdStudents.map((person) => (
            <div key={person.name} className="flex flex-col items-center text-center">
              <Image
                src={person.image}
                alt={person.name}
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
              <h3 className="mt-2 font-semibold">{person.name}</h3>
              <p className="text-secondary text-sm">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
