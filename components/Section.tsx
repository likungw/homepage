import { ReactNode } from "react";
import cn from "clsx";

type SectionProps = {
  heading: string;
  headingAlignment?: "left" | "right";
  children: React.ReactNode;
  className?: string; // ✅ 支持外部传入额外样式
};

export default function Section({
  heading,
  headingAlignment = "left",
  children,
  className
}: SectionProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-[120px_1fr] gap-4", // ✅ 左列固定宽度，右列自适应
        className
      )}
    >
      <h2
        className={cn(
          "text-base font-normal text-secondary self-start", // ✅ 字体灰色、和正文大小一致
          headingAlignment === "right" ? "text-right" : "text-left"
        )}
      >
        {heading}
      </h2>
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
}
