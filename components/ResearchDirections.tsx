import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "components/Link";
import type { ResearchDirection } from "../data/research";
import type { ResearchProject } from "../data/projects";

/** Distinct abstract illustrations; intentionally not presented as scientific results. */
function DirectionIllustration({ number }: { number: string }) {
  if (number === "01") {
    return (
      <svg className="direction-illustration" viewBox="0 0 520 390" aria-hidden="true">
        <defs>
          <radialGradient id="physical-center"><stop stopColor="#B8A1FF" stopOpacity=".7"/><stop offset="1" stopColor="#AA9CE8" stopOpacity="0"/></radialGradient>
          <linearGradient id="physical-line" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#E8DFFF"/><stop offset="1" stopColor="#9C83FF"/></linearGradient>
        </defs>
        <circle cx="270" cy="188" r="132" fill="url(#physical-center)" opacity=".5"/>
        <g className="direction-orbit direction-orbit-slow" style={{ transformOrigin: "270px 188px" }} fill="none" stroke="url(#physical-line)" strokeWidth="1.3">
          <ellipse cx="270" cy="188" rx="171" ry="71" transform="rotate(-26 270 188)" opacity=".8"/>
          <ellipse cx="270" cy="188" rx="159" ry="61" transform="rotate(56 270 188)" opacity=".75"/>
          <ellipse cx="270" cy="188" rx="105" ry="107" strokeDasharray="3 8" opacity=".6"/>
        </g>
        <g className="direction-orbit direction-orbit-reverse" style={{ transformOrigin: "270px 188px" }}>
          <ellipse cx="270" cy="188" rx="193" ry="102" fill="none" stroke="#C9C0FF" strokeDasharray="2 9" opacity=".38"/>
          <circle cx="440" cy="188" r="7" fill="#D8CAFF"/>
          <circle cx="118" cy="230" r="5" fill="#A899FF"/>
        </g>
        <g className="direction-illustration-pulse">
          <circle cx="270" cy="188" r="62" fill="#7D6AF1" opacity=".12"/>
          <circle cx="270" cy="188" r="39" fill="#C5B2FF" opacity=".20"/>
          <circle cx="270" cy="188" r="13" fill="#E5D8FF"/>
        </g>
        <g stroke="#D4C9FF" opacity=".45" fill="none">
          <path d="M60 315 C160 256 226 316 310 282 S446 260 490 296" strokeDasharray="4 9" />
        </g>
      </svg>
    );
  }

  if (number === "02") {
    const nodes = [
      [102, 149, 13], [161, 91, 19], [239, 133, 23], [308, 82, 14], [391, 125, 18],
      [136, 248, 17], [226, 234, 25], [322, 252, 22], [406, 235, 13], [259, 318, 14],
    ];
    const bonds = [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,2],[6,7],[7,4],[7,8],[6,9],[2,7]];
    return (
      <svg className="direction-illustration" viewBox="0 0 520 390" aria-hidden="true">
        <defs>
          <radialGradient id="science-node" cx="35%" cy="28%"><stop stopColor="#F3E6FF"/><stop offset=".35" stopColor="#CDB9FF"/><stop offset="1" stopColor="#7258C7"/></radialGradient>
        </defs>
        <g className="direction-molecule">
          <g stroke="#C5B5F5" strokeWidth="6" strokeLinecap="round" opacity=".55">
            {bonds.map(([a,b],i) => <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}/>)}
          </g>
          <g stroke="#EEE7FF" strokeWidth="1.5" opacity=".65">
            {nodes.map(([cx,cy,r],i) => <circle key={i} cx={cx} cy={cy} r={r} fill="url(#science-node)"/>)}
          </g>
          <circle cx="226" cy="234" r="55" fill="none" stroke="#E1D1FF" strokeDasharray="3 8" opacity=".45"/>
        </g>
        <circle className="direction-satellite" cx="390" cy="125" r="49" fill="none" stroke="#BFB0FF" strokeDasharray="3 10" opacity=".65"/>
      </svg>
    );
  }

  const boxes = Array.from({ length: 7 }, (_, r) => Array.from({ length: 9 }, (_, c) => ({ r, c })) ).flat();
  return (
    <svg className="direction-illustration" viewBox="0 0 520 390" aria-hidden="true">
      <defs>
        <linearGradient id="matrix-cell" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#D1BAFF"/><stop offset="1" stopColor="#725DC8"/></linearGradient>
      </defs>
      <g className="direction-matrix" transform="translate(98 54) skewY(-12)">
        {boxes.map(({r,c}) => (
          <rect key={`${r}-${c}`} className={((r+c)%4===0 || (r===3 && c>1 && c<7)) ? "direction-matrix-cell" : ""} style={{ animationDelay: `${(r*3+c)*95}ms` }}
            x={c*36} y={r*38} width="28" height="29" rx="5"
            stroke="#DCCEFF" strokeOpacity=".44" strokeWidth="1"
            fill={((r+c)%4===0 || (r===3 && c>1 && c<7)) ? "url(#matrix-cell)" : "#836ECA"}
            fillOpacity={((r+c)%4===0 || (r===3 && c>1 && c<7)) ? ".8" : ".16"}
          />
        ))}
      </g>
      <path d="M70 327 H420" stroke="#D6C6FF" opacity=".24" strokeWidth="2" strokeDasharray="3 10"/>
      <path d="M58 320 L110 320" className="direction-matrix-signal" stroke="#E7DFFF" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

/**
 * Interactive direction explorer. Project mini-cards enter in a raised, floating
 * panel beneath the selected direction. The other cards recede but remain
 * keyboard-accessible and touch-friendly. Desktop pointers reveal a direction on hover.
 */
export default function ResearchDirections({
  directions,
  projects,
}: {
  directions: ResearchDirection[];
  projects: ResearchProject[];
}) {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<string | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPointerType = useRef<string>("mouse");

  const cancelPendingClose = () => {
    if (leaveTimer.current !== null) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  };

  const openDirection = (number: string) => {
    cancelPendingClose();
    setSelected(number);
  };

  const closeAfterPointerLeaves = (number: string) => {
    cancelPendingClose();
    // Tiny grace period prevents flicker when crossing the gap between cards.
    leaveTimer.current = setTimeout(() => {
      setSelected(current => current === number ? null : current);
      leaveTimer.current = null;
    }, 180);
  };

  useEffect(() => () => {
    if (leaveTimer.current !== null) clearTimeout(leaveTimer.current);
  }, []);

  return (
    <div className={`direction-list project-explorer ${selected ? "project-explorer--selected" : ""}`}>
      {directions.map((direction, index) => {
        const isSelected = selected === direction.number;
        const isDimmed = selected !== null && !isSelected;
        const childProjects = projects.filter(project => project.direction === direction.number);
        const panelId = `direction-projects-${direction.number}`;

        return (
          <motion.section
            key={direction.number}
            layout={!reduceMotion}
            className={`project-direction ${isSelected ? "is-selected" : ""} ${isDimmed ? "is-dimmed" : ""}`}
            onPointerEnter={event => {
              if (event.pointerType === "mouse" || event.pointerType === "pen") {
                openDirection(direction.number);
              }
            }}
            onPointerLeave={event => {
              if (event.pointerType === "mouse" || event.pointerType === "pen") {
                closeAfterPointerLeaves(direction.number);
              }
            }}
            onPointerDown={event => { lastPointerType.current = event.pointerType; }}
            onBlur={event => {
              // Keyboard users keep the panel open while tabbing into child links.
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                cancelPendingClose();
                setSelected(current => current === direction.number ? null : current);
              }
            }}
            onKeyDown={event => {
              if (event.key === "Escape" && isSelected) {
                cancelPendingClose();
                setSelected(null);
              }
            }}
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .1 }}
            transition={{ duration: reduceMotion ? 0 : .55, delay: reduceMotion ? 0 : index * .055 }}
          >
            <motion.button
              layout={!reduceMotion}
              type="button"
              className="direction-card project-direction-trigger"
              aria-controls={panelId}
              aria-expanded={isSelected}
              aria-label={`${direction.title}: ${isSelected ? "hide" : "show"} ${childProjects.length} projects`}
              onClick={event => {
                // Hover is primary for mouse/pen. Touch and keyboard retain click toggling.
                if (event.detail === 0 || lastPointerType.current === "touch") {
                  cancelPendingClose();
                  setSelected(current => current === direction.number ? null : direction.number);
                }
              }}
              whileHover={reduceMotion ? undefined : { scale: isSelected ? 1.012 : 1.004 }}
              transition={{ type: "spring", stiffness: 210, damping: 28 }}
            >
              <div className={`direction-visual direction-visual-${direction.number}`} aria-hidden="true">
                <div className="direction-visual-grid" />
                <span className="direction-visual-caption">KUN LI RESEARCH GROUP <span>— {direction.number}</span></span>
                <DirectionIllustration number={direction.number} />
                <span className="direction-visual-footer">AGENTS <span>×</span> MODELS <span>×</span> COMPUTE</span>
              </div>
              <div className="direction-card-content">
                <div className="direction-eyebrow"><span className="direction-index">{direction.number} / 03</span> RESEARCH DIRECTION</div>
                <h2 className="direction-card-title">{direction.title}<span className="home-accent">.</span></h2>
                <p className="direction-card-subtitle">{direction.subtitle}</p>
                <p className="direction-card-description">{direction.description}</p>
                <ul className="direction-keywords" aria-label={`${direction.title} research topics`}>
                  {direction.keywords.map(keyword => <li key={keyword}>{keyword}</li>)}
                </ul>
                <span className="direction-card-link project-direction-cta">
                  {isSelected ? `Showing ${childProjects.length} projects` : `Explore ${childProjects.length} projects`}
                  <span aria-hidden="true">{isSelected ? "−" : "↗"}</span>
                </span>
              </div>
            </motion.button>
            <AnimatePresence initial={false} mode="sync">
              {isSelected && (
                <motion.div
                  key={panelId}
                  id={panelId}
                  className="project-float-wrap"
                  initial={reduceMotion ? false : { height: 0, opacity: 0, y: -20 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={reduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0, y: -14 }}
                  transition={{ duration: reduceMotion ? 0 : .47, ease: [.22, 1, .36, 1] }}
                >
                  <div className="project-float-panel">
                    <div className="project-float-heading">
                      <div>
                        <p className="project-detail-label">EXPLORE THIS DIRECTION</p>
                        <h3>{direction.title} <span className="home-accent">projects</span></h3>
                      </div>
                      <span className="project-count">{childProjects.length.toString().padStart(2, "0")} PROJECTS</span>
                    </div>
                    <div className="project-sub-grid">
                      {childProjects.map((project, projectIndex) => (
                        <motion.div
                          key={project.slug}
                          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reduceMotion ? 0 : .12 + .07 * projectIndex, duration: reduceMotion ? 0 : .35 }}
                        >
                          <Link href={project.websiteUrl ?? `/projects/${project.slug}`} className="project-sub-card">
                            <span className="project-sub-eyebrow">{project.eyebrow}</span>
                            <strong>{project.title}<span aria-hidden="true"> ↗</span></strong>
                            <span className="project-sub-summary">{project.summary}</span>
                            <span className="project-sub-status">{project.status}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        );
      })}
    </div>
  );
}
