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
        "flex gap-8", // ✅ 保持左右两列布局
        className
      )}
    >
      {/* 左列标题 */}
      <h2
        className={cn(
          "text-base font-normal text-secondary", // ✅ 字体大小改为正文大小 + 字重正常 + 灰色
          headingAlignment === "right" ? "text-right" : "text-left"
        )}
      >
        {heading}
      </h2>


      {/* 右列内容 */}
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
}
