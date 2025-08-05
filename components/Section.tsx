import { ReactNode } from "react";
import cn from "clsx";

type SectionProps = {
  heading: string;
  headingAlignment?: "left" | "right";
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  heading,
  headingAlignment = "left",
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4", // ✅ 去掉 p-4 / border / rounded
        className
      )}
    >
      <h2
        className={cn(
          "text-base font-normal text-secondary self-start",
          headingAlignment === "right" ? "md:text-right text-left" : "text-left"
        )}
      >
        {heading}
      </h2>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}
