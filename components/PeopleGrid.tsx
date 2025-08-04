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
          <div className="relative group flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md transition-all duration-300 h-full">
            {/* 渐变外框 */}
            <div className="absolute -inset-0.5 rounded-2xl border-2 border-transparent pointer-events-none transition-all duration-300 
                group-hover:border-[3px] group-hover:border-transparent 
                group-hover:bg-gradient-to-r group-hover:from-[#660099] group-hover:via-[#9933CC] group-hover:to-[#CC66FF]"></div>

            {/* 头像 */}
            <div className="relative w-24 h-24 mb-4 flex-shrink-0 z-10">
              <Image
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover rounded-full"
                width={96}
                height={96}
              />
            </div>

            {/* 名字 */}
            <h3 className="text-lg font-semibold z-10">{person.name}</h3>

            {/* 描述 */}
            <p className="text-secondary mt-1 z-10">{person.description}</p>
          </div>
        );

        return person.link ? (
          <a
            key={person.name}
            href={person.link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full"
          >
            {CardContent}
          </a>
        ) : (
          <div key={person.name} className="h-full">
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}
