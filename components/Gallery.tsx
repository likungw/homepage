import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import cn from "clsx";
import localFont from "@next/font/local";

import imageMe from "public/gallery/me.jpg";
import imageConf from "public/gallery/scecr.jpg";
import imageSnowboarding from "public/gallery/snowboarding.jpg";
import imageDissertation from "public/gallery/dissertation_defence.jpg";
import { ReactNode } from "react";
import Activity, { ActivityType, SnowboardActivity } from "./Activity";
import Link from "./Link";
import Halo from "./Halo";

const ticketingFont = localFont({
  src: "../public/ticketing.woff2",
  display: "swap",
});

type PhotoProps = {
  src: StaticImageData | string;
  meta?: ReactNode;
  filename?: string;
  alt: string;
  width: number;
  height: number;
  rotate: number;
  index: number;
  flipDirection?: "left" | "right";
  children?: ReactNode;
};

export function Photo({
  src,
  alt,
  filename,
  width,
  height,
  rotate,
  index,
  flipDirection,
  meta,
  children,
}: PhotoProps) {
  const fileName =
    filename ||
    (typeof src !== "string" &&
      `${src.src.split("/").at(-1)?.split(".")[0]}.jpg`);
  const shared = "absolute h-full w-full rounded-2xl overflow-hidden";
  return (
    <motion.div
      className="relative cursor-grab hover:before:block hover:before:w-[calc(100%+55px)] hover:before:h-[300px] hover:before:absolute hover:before:-top-8 hover:before:-left-7"
      style={{ rotate: `${rotate}deg`, width, height, perspective: 1000 }}
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: 0,
        opacity: 0,
      }}
      transition={{
        default: {
          type: "spring",
          bounce: 0.2,
          duration: 0.8 + index * 0.05,
          delay: index * 0.15,
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15,
        },
        scale: { duration: 0.12 },
      }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      drag
      whileTap={{ scale: 1.1, cursor: "grabbing" }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      whileHover="flipped"
    >
      <motion.div
        className="relative w-full h-full shadow-md rounded-2xl will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ type: "spring", duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === "right" ? -180 : 180,
            rotateX: 5,
          },
        }}
      >
        <div className={shared} style={{ backfaceVisibility: "hidden" }}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="absolute inset-0 object-cover w-full h-full bg-gray-400 pointer-events-none rounded-2xl"
            priority
          />
          {children}
        </div>
        <div
          className={cn(
            shared,
            "bg-[#FFFAF2] flex items-center rounded-2xl overflow-hidden"
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Halo strength={50} className="flex items-center">
            <span className="absolute w-[500px] h-[500px] rotate-[-20deg] bg-repeat bg-[length:280px] bg-[url('/photopaper.png')]" />
            <div className="z-[1] px-6">
              <div
                className={cn(
                  ticketingFont.className,
                  "flex flex-col gap-1 uppercase"
                )}
              >
                <p className="text-sm text-secondary">{fileName}</p>
                {meta && <p className="text-sm text-secondary">{meta}</p>}
              </div>
            </div>
          </Halo>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery({
  activities,
  lastActivity,
}: {
  activities: ActivityType[];
  lastActivity?: ActivityType;
}) {
  const snowboardingActivities = activities.filter(
    (activity) => activity.sport_type === "Snowboard"
  );
  return (
    <section className="flex gap-6 overflow-x-auto no-scrollbar px-4 py-4">
      <Photo
        src={imageMe}
        meta={
          <span className="flex flex-col gap-3">
            <span className="block">
              2024-03-01 <br />
              PHOTO AT Edinburgh
            </span>
          </span>
        }
        alt="PHOTO AT Edinburgh"
        width={314}
        height={229}
        rotate={-6}
        index={1}
      />
      <Photo
        src={imageDissertation}
        meta="2023-04-30" 
        width={230}
        height={253}
        rotate={2}
        index={2}
        flipDirection="left"
      />
      <Photo
        src={imageConf}
        meta="2023-09-22" 
        width={180}
        height={240}
        rotate={6.3}
        index={3}
        flipDirection="left"
      />
      <Photo
        src={imageSnowboarding}
        meta={
          snowboardingActivities.length ? (
            <span className="flex flex-col gap-3">
              <span className="block">
                {snowboardingActivities[0].name.toString().split("-").at(-1)}
              </span>
              <Link
                href={`https://www.strava.com/activities/${activities[0].id}`}
              >
                See latest day on Strava ↗
              </Link>
            </span>
          ) : (
            "Universal Studios"
          )
        }
        alt="Universal Studios"
        filename={`snowboarding.jpg`}
        width={270}
        height={225}
        rotate={-5.4}
        index={4}
        flipDirection="left"
      >
        {snowboardingActivities.length ? (
          <SnowboardActivity activities={snowboardingActivities} />
        ) : null}
      </Photo>
    </section>
  );
}
