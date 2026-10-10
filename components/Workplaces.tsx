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
      <div className="flex min-w-0 items-center gap-4">
        <Image
          src={imageSrc}
          alt={description}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex min-w-0 flex-col gap-px">
          <p className={link ? "external-arrow" : ""}>{title}</p>
          <p className="text-secondary">{description}</p>
        </div>
      </div>

      {/* 右侧：时间列（固定宽度 + 右对齐 + 垂直居中） */}
      {time && (
        <p className="workplace-date shrink-0 text-secondary text-left sm:w-32 sm:text-right">
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
          className="workplace-row flex w-full flex-col gap-1 sm:flex-row sm:items-center sm:justify-between no-underline"
        >
          {content}
        </Link>
      ) : (
        <div className="workplace-row flex w-full flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">{content}</div>
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
