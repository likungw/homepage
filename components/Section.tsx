import { ReactNode } from "react";
import cn from "clsx";

type SectionProps = {
  heading: string;
  headingAlignment?: "left" | "right";
  children: ReactNode;
  className?: string;
};

export default function Section({
  heading,
  headingAlignment = "left",
  children,
  className
}: SectionProps) {
  return (
    <section
      className={cn("flex flex-col gap-4", className)} // ✅ 使用 clsx 合并默认样式和外部传入的 className
    >
      <h2
        className={cn(
          "text-xl font-bold",
          headingAlignment === "right" ? "text-right" : "text-left"
        )}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
