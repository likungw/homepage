import Image from "next/image";
import Link from "components/Link";

export interface Person {
  name: string;
  description: string;
  image: string; // 图片路径: "/schools/cas.png"
  link?: string; // 个人主页外链（可选）
}

export default function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {people.map((person) => {
        const CardContent = (
          <div
            className="group relative flex flex-col items-center text-center rounded-2xl 
                       overflow-hidden border border-gray-200 bg-white shadow-md 
                       transition-transform duration-300 hover:-translate-y-1 
                       hover:shadow-lg"
          >
            {/* 头像 */}
            <div
              className="relative mt-6 w-28 h-28 rounded-full overflow-hidden border-2 border-transparent
                         group-hover:border-[3px] group-hover:border-transparent
                         group-hover:ring-4 group-hover:ring-purple-500/50
                         group-hover:bg-gradient-to-r group-hover:from-[#660099] group-hover:to-[#9B30FF]
                         p-[3px] transition-all duration-300"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={112}
                height={112}
                className="rounded-full object-cover border-2 border-white"
              />
            </div>

            {/* 姓名 */}
            <h3 className="mt-4 font-semibold text-base">{person.name}</h3>

            {/* 描述 */}
            <p className="mt-1 mb-6 text-sm text-secondary px-4">
              {person.description}
            </p>
          </div>
        );

        // 有链接才包裹 Link
        return person.link ? (
          <Link
            key={person.name}
            href={person.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {CardContent}
          </Link>
        ) : (
          <div key={person.name}>{CardContent}</div>
        );
      })}
    </div>
  );
}
