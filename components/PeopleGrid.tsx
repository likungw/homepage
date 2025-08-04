import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Person } from "../types/people";

interface PeopleGridProps {
  people: Person[];
}

export default function PeopleGrid({ people }: PeopleGridProps) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  // 计算最大卡片高度
  useEffect(() => {
    const heights = cardRefs.current.map((el) => el?.offsetHeight || 0);
    setMaxHeight(Math.max(...heights));
  }, [people]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {people.map((person, index) => (
        <div
          key={person.name}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
          className="group relative flex flex-col items-center text-center 
                     bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md 
                     border border-transparent transition-all duration-300"
        >
          {/* 外侧渐变高亮边框 */}
          <div
            className="absolute inset-0 rounded-2xl p-[2px] opacity-0 
                       group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg, #7a1fa2, #9c27b0, #ce93d8)"
            }}
          >
            <div className="h-full w-full bg-white dark:bg-gray-900 rounded-2xl"></div>
          </div>

          {/* 头像 */}
          {person.link ? (
            <a
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="z-10"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-sm 
                           transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ) : (
            <Image
              src={person.image}
              alt={person.name}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover mb-4 shadow-sm"
            />
          )}

          {/* 文本 */}
          <div className="z-10">
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="text-secondary mt-1">{person.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
