import Image from "next/image";
import Link from "next/link";
import { faculty, phdStudents } from "../data/people"; // 你的数据文件

function PeopleSection({ title, people }: { title: string; people: any[] }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg text-secondary mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {people.map((person) => (
          <Link
            key={person.name}
            href={person.link || "#"} // link: 个人主页地址
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-blue-500 shadow-sm transition"
          >
            <div className="flex flex-col items-center p-6">
              {/* 头像 */}
              <div className="w-28 h-28 relative mb-4 rounded-full overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition">
                <Image
                  src={person.image} // "/schools/cas.png" 形式，放在 public 目录
                  alt={person.name}
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>
              {/* 姓名 */}
              <h3 className="font-semibold text-center">{person.name}</h3>
              {/* 简介 */}
              <p className="text-sm text-secondary text-center mt-1">
                {person.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function PeoplePage() {
  return (
    <div className="flex flex-col gap-12">
      <PeopleSection title="Faculty" people={faculty} />
      <PeopleSection title="Ph.D. Students" people={phdStudents} />
    </div>
  );
}
