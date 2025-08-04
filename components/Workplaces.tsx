import Link from "components/Link";
import Image, { StaticImageData } from "next/image";

type Workplace = {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  time?: string;
  link?: string;
};

function Workplace({ title, description, imageSrc, time, link }: Workplace) {
  const content = (
    <>
      {/* 左侧：头像 + 文本 */}
      <div className="flex items-center gap-4">
        <Image
          src={imageSrc}
          alt={description}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-col gap-px">
          <p className={link ? "external-arrow" : ""}>{title}</p>
          <p className="text-secondary">{description}</p>
        </div>
      </div>

      {/* 右侧：时间列（固定宽度 + 右对齐 + 垂直居中） */}
      {time && (
        <p className="text-secondary w-32 text-right">{/* ✅ 统一 w-32 */}
          {time}
        </p>
      )}
    </>
  );

  return (
    <li className="" key={description}>
      {link ? (
        <Link
          href={link}
          className="flex justify-between items-center w-full no-underline" // ✅ items-center 保证右侧垂直居中
        >
          {content}
        </Link>
      ) : (
        <div className="flex justify-between items-center w-full">{content}</div> // ✅ 同样加 items-center
      )}
    </li>
  );
}

export default function Workplaces({ items, isAnimated }: { items: Workplace[], isAnimated?: boolean }) {
  return (
    <ul className={`flex flex-col gap-4 ${isAnimated ? 'animated-list' : ''}`}>
      {items.map(Workplace)}
    </ul>
  );
}
