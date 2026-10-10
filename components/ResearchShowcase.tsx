import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, RefObject } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ResearchDemo } from "../data/research";

/**
 * Loosely based on the original About-page Gallery:
 * tilted, slightly overlapping photographic prints, spring entrances,
 * drag-to-arrange on desktop, and a front/back reveal on hover or tap.
 *
 * Keep artwork independent of the layout so each lab animation can be replaced
 * just by editing data/research.ts.
 */
const photoPositions = [
  { left: "0%", top: "52px", width: "30%", angle: -7.5 },
  { left: "23%", top: "6px", width: "28%", angle: 4.0 },
  { left: "46%", top: "60px", width: "28%", angle: -5.5 },
  { left: "70%", top: "12px", width: "30%", angle: 6.5 },
];

/** Distinct schematic placeholders; these are NOT research visualizations. */
function FallbackArtwork({ demo }: { demo: ResearchDemo }) {
  const common = { fill: "none", stroke: demo.accent, strokeWidth: 1.3 };

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 50% 44%, ${demo.accent}37 0%, transparent 59%), ${demo.background}`,
      }}
    >
      <svg
        viewBox="0 0 300 220"
        className="research-artwork h-full w-full"
        role="presentation"
        focusable="false"
      >
        {demo.id === "world-models" && (
          <g {...common}>
            {[0, 1, 2, 3, 4, 5, 6].map((row) => (
              <path
                key={row}
                d={`M -15 ${86 + row * 14} C 65 ${20 + row * 12}, 119 ${158 + row * 9}, 191 ${85 + row * 12} S 287 ${48 + row * 12}, 325 ${93 + row * 12}`}
                opacity={0.38 + row * 0.075}
              />
            ))}
            <circle cx="152" cy="106" r="35" strokeDasharray="2 7" opacity=".65" />
            <circle cx="152" cy="106" r="6" fill={demo.accent} stroke="none" />
          </g>
        )}
        {demo.id === "atomistic-dynamics" && (
          <g>
            <g stroke={demo.accent} strokeWidth="2" opacity=".7">
              {[[53, 116, 98, 75], [98, 75, 153, 94], [153, 94, 204, 59], [153, 94, 194, 150], [194, 150, 255, 133], [98, 75, 88, 152], [88, 152, 147, 179], [147, 179, 194, 150]].map((v, i) => (
                <line key={i} x1={v[0]} y1={v[1]} x2={v[2]} y2={v[3]} />
              ))}
            </g>
            {[[53, 116, 8], [98, 75, 13], [153, 94, 17], [204, 59, 10], [194, 150, 16], [255, 133, 8], [88, 152, 12], [147, 179, 9]].map((v, i) => (
              <circle key={i} cx={v[0]} cy={v[1]} r={v[2]} fill={demo.accent} fillOpacity={i % 2 ? ".83" : ".52"} stroke="white" strokeOpacity=".35" />
            ))}
          </g>
        )}
        {demo.id === "quantum-chemistry" && (
          <g {...common}>
            {[0, 45, 90, 135].map((angle) => (
              <ellipse key={angle} cx="150" cy="110" rx="98" ry="38" transform={`rotate(${angle} 150 110)`} opacity=".76" />
            ))}
            <circle cx="150" cy="110" r="15" fill={demo.accent} fillOpacity=".6" />
            <circle cx="150" cy="110" r="5" fill="#fff" stroke="none" />
          </g>
        )}
        {demo.id === "hpc-systems" && (
          <g>
            {Array.from({ length: 8 }, (_, row) =>
              Array.from({ length: 10 }, (_, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={35 + col * 24}
                  y={18 + row * 24}
                  width="17"
                  height="17"
                  rx="2"
                  stroke={demo.accent}
                  strokeOpacity=".6"
                  fill={demo.accent}
                  fillOpacity={(row + col) % 4 === 0 ? ".86" : ".11"}
                />
              ))
            )}
          </g>
        )}
      </svg>
      <span className="absolute bottom-3 left-3 rounded bg-black/30 px-2 py-1 text-[9px] uppercase tracking-[0.13em] text-white/70 backdrop-blur-sm">
        Add your lab animation
      </span>
    </div>
  );
}

function ResearchMedia({ demo }: { demo: ResearchDemo }) {
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const isGif = /\.gif(?:\?.*)?$/i.test(demo.mediaSrc);
  const hasSource = Boolean(demo.mediaSrc);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    if (typeof IntersectionObserver === "undefined") {
      video.play().catch(() => undefined);
      return () => video.pause();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.15 }
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [reducedMotion, demo.mediaSrc]);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[7px]" aria-hidden="true">
      <FallbackArtwork demo={demo} />
      {!reducedMotion && hasSource && isGif && (
        <Image
          src={demo.mediaSrc}
          alt=""
          width={720}
          height={540}
          unoptimized
          loading="lazy"
          className={`absolute inset-0 h-full w-full bg-black/10 object-contain transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
        />
      )}
      {!reducedMotion && hasSource && !isGif && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={demo.poster}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full bg-black/10 object-contain transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoadedData={() => setLoaded(true)}
          onError={() => setLoaded(false)}
        >
          <source src={demo.mediaSrc} type={/\.webm(?:\?.*)?$/i.test(demo.mediaSrc) ? "video/webm" : "video/mp4"} />
        </video>
      )}
      {reducedMotion && demo.poster && (
        <Image src={demo.poster} alt="" width={720} height={540} className="absolute inset-0 h-full w-full object-contain" />
      )}
      <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/25 px-2 py-1 font-mono text-[10px] text-white/85 backdrop-blur-sm">
        {demo.number} / 04
      </span>
    </div>
  );
}

function ResearchPrint({
  demo,
  index,
  dragBoundary,
}: {
  demo: ResearchDemo;
  index: number;
  dragBoundary: RefObject<HTMLDivElement>;
}) {
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [pinnedOpen, setPinnedOpen] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [canDrag, setCanDrag] = useState(false);
  const position = photoPositions[index % photoPositions.length];
  const flipped = hovered || pinnedOpen;

  // Don't intercept touch swipes on the horizontally scrolling mobile layout.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px) and (hover: hover)");
    const update = () => setCanDrag(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const cardStyle = {
    "--research-left": position.left,
    "--research-top": position.top,
    "--research-width": position.width,
    zIndex: dragging || hovered || pinnedOpen ? 20 : index + 1,
  } as CSSProperties;

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setPinnedOpen((wasOpen) => !wasOpen);
    }
  };

  return (
    <motion.article
      className="research-fan-card select-none rounded-[13px] outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4"
      style={cardStyle}
      role="button"
      aria-label={`${demo.title}. ${flipped ? "Show research image" : "Show research details"}`}
      aria-pressed={flipped}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onTap={() => setPinnedOpen((wasOpen) => !wasOpen)}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      initial={reducedMotion ? false : { y: 125 + index * 13, rotate: position.angle - 13, opacity: 0 }}
      whileInView={{ y: 0, rotate: position.angle, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reducedMotion ? undefined : { scale: 1.045 }}
      whileDrag={reducedMotion ? undefined : { scale: 1.07, cursor: "grabbing" }}
      drag={canDrag && !reducedMotion}
      dragConstraints={dragBoundary}
      dragMomentum={false}
      transition={{
        default: { type: "spring", stiffness: 155, damping: 21, delay: reducedMotion ? 0 : index * 0.1 },
        opacity: { duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : index * 0.1 },
        scale: { duration: 0.18 },
      }}
    >
      <div style={{ perspective: 1100 }}>
        <motion.div
        className="relative w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 25, duration: reducedMotion ? 0 : undefined }}
      >
        {/* Front: photographic-print treatment, inspired by the original Gallery.Photo. */}
        <div
          className="relative overflow-hidden rounded-[13px] border border-[#E8DFF6] bg-[#FCFAFF] p-2.5 shadow-[0_20px_45px_rgba(80,46,134,0.17),0_2px_7px_rgba(52,23,91,0.10)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[7px] bg-[#17252F]">
            <ResearchMedia demo={demo} />
          </div>
          <div className="flex min-h-[61px] items-center justify-between gap-3 px-1 pb-1 pt-3">
            <div className="min-w-0">
              <p className="truncate text-[9px] font-semibold uppercase tracking-[0.13em] text-[#80778F]">
                {demo.category}
              </p>
              <h3 className="mt-0.5 text-[clamp(12px,1.5vw,15px)] font-semibold leading-tight tracking-[-0.02em] text-[#36294B]">
                {demo.title}
              </h3>
            </div>
            <span className="shrink-0 text-lg font-light text-[#8A77AE]" aria-hidden="true">↗</span>
          </div>
        </div>
        {/* Reverse: paper texture and a compact research caption. */}
        <div
          className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[13px] border border-[#E8DFF6] bg-[#FCF8FF] px-5 py-5 text-[#36294B] shadow-[0_20px_45px_rgba(80,46,134,0.17)]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{ backgroundImage: "url('/photopaper.png')", backgroundSize: "220px" }}
            aria-hidden="true"
          />
          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7B6F8C]">Research note / {demo.number}</p>
            <div className="mt-5 h-1 w-9 rounded-full" style={{ background: demo.accent }} />
          </div>
          <div className="relative">
            <p className="text-lg font-semibold leading-tight tracking-[-0.04em] sm:text-xl">{demo.title}</p>
            <p className="mt-3 text-[12px] leading-relaxed text-[#71677E] sm:text-[13px]">{demo.description}</p>
            <p className="mt-5 text-[10px] uppercase tracking-[0.11em] text-[#80748E]">{demo.category}</p>
          </div>
        </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function ResearchShowcase({ demos }: { demos: ResearchDemo[] }) {
  const deckRef = useRef<HTMLDivElement>(null);

  return (
    <section aria-labelledby="research-showcase-heading" className="space-y-5 sm:space-y-7">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.17em] text-secondary">Visual highlights</p>
          <h2 id="research-showcase-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Research in Motion<span className="ml-1 home-purple-dot">.</span>
          </h2>
        </div>
        <p className="hidden font-mono text-[10px] uppercase tracking-wider text-secondary md:block">
          Drag to rearrange · Hover to flip
        </p>
        <p className="text-xs text-secondary md:hidden">Swipe to explore · Tap for details</p>
      </div>

      <div ref={deckRef} className="research-fan no-scrollbar" aria-label="Four interactive research highlights">
        {demos.slice(0, 4).map((demo, index) => (
          <ResearchPrint key={demo.id} demo={demo} index={index} dragBoundary={deckRef} />
        ))}
      </div>
    </section>
  );
}
