import Image from "next/image";
import { Person } from "../types/people";

interface PeopleGridProps {
  people: Person[];
}

export default function PeopleGrid({ people }: PeopleGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">
      {people.map((person) => {
        const CardContent = (
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md transition-all duration-300 h-full">
            {/* 头像 */}
            <div className="relative w-24 h-24 mb-4 flex-shrink-0">
              <Image
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover rounded-full"
                width={96}
                height={96}
              />
            </div>

            {/* 名字 */}
            <h3 className="text-lg font-semibold">{person.name}</h3>

            {/* 描述 */}
            <p className="text-secondary mt-1">{person.description}</p>
          </div>
        );

        return person.link ? (
          <a
            key={person.name}
            href={person.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full rounded-2xl transition-all duration-300 hover:shadow-lg 
                       hover:ring-4 hover:ring-transparent hover:ring-offset-2 hover:ring-offset-white
                       hover:bg-gradient-to-r hover:from-[#660099] hover:via-[#9933CC] hover:to-[#CC66FF]"
            style={{ padding: "2px" }} // 外周高亮
          >
            {CardContent}
          </a>
        ) : (
          <div
            key={person.name}
            className="block h-full rounded-2xl transition-all duration-300 
                       hover:shadow-lg hover:ring-4 hover:ring-transparent hover:ring-offset-2 hover:ring-offset-white
                       hover:bg-gradient-to-r hover:from-[#660099] hover:via-[#9933CC] hover:to-[#CC66FF]"
            style={{ padding: "2px" }} // 外周高亮
          >
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}
