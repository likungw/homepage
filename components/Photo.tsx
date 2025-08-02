// components/Photo.tsx

import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

type PhotoProps = {
  src: StaticImageData | string;
  alt?: string;
  width?: number;
  height?: number;
  rotate?: number;
  flipDirection?: "left" | "right";
  index?: number;
  meta?: React.ReactNode;
  className?: string;
};

export function Photo({
  src,
  alt = "Photo",
  width = 180,
  height = 240,
  rotate = 0,
  flipDirection,
  meta,
  index = 1,
  className,
}: PhotoProps) {
  const rotationStyle = `rotate(${rotate}deg)`;

  return (
    <div
      className={clsx(
        "not-prose relative float-right ml-8 mb-6 w-fit",
        className
      )}
      style={{ zIndex: index }}
    >
      <div
        className="inline-block"
        style={{
          transform: rotationStyle,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={clsx(
            "rounded-lg shadow-lg",
            flipDirection === "left" && "scale-x-[-1]",
            flipDirection === "right" && "scale-x-100"
          )}
        />
      </div>
      {meta && <div className="mt-2 text-sm text-secondary">{meta}</div>}
    </div>
  );
}
