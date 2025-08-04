import { ReactNode } from "react";
import cn from "clsx";

type SectionProps = {
  heading: string;
  headingAlignment?: "left" | "right";
  children: React.ReactNode;
  className?: string; // ✅ 新增
};

export default function Section({
  heading,
  headingAlignment = "left",
  children,
  className
}: SectionProps) {
  return (
    <section
      className={`flex flex-col gap-4 ${className || ""}`} // ✅ 合并默认样式和外部传入的样式
    >
      <h2
        className={`text-xl font-bold ${
          headingAlignment === "right" ? "text-right" : "text-left"
        }`}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
