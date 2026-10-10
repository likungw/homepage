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
        "info-section grid grid-cols-1 gap-x-7 gap-y-3 md:grid-cols-[136px_minmax(0,1fr)]",
        className
      )}
    >
      <h2
        className={cn(
          "info-section-title text-sm font-medium text-secondary self-start",
          headingAlignment === "right" ? "md:text-right text-left" : "text-left"
        )}
      >
        {heading}
      </h2>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}
