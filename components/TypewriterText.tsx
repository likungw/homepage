import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Accessible, intersection-triggered typewriter effect.
 * The full text is always present in the DOM so layout does not jump while typing.
 * Runs only once and respects the OS "reduce motion" preference.
 */
export default function TypewriterText({
  text,
  className = "",
  speed = 28,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [started, setStarted] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const element = containerRef.current;
    if (!element || started) return;
    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -24px 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [reduceMotion, started]);

  useEffect(() => {
    if (!started || reduceMotion) return;
    setCharacterCount(0);
    let count = 0;
    const timer = window.setInterval(() => {
      count = Math.min(text.length, count + 1);
      setCharacterCount(count);
      if (count >= text.length) window.clearInterval(timer);
    }, speed);
    return () => window.clearInterval(timer);
  }, [started, text, speed, reduceMotion]);

  if (reduceMotion) return <p ref={containerRef} className={className}>{text}</p>;

  return (
    <p ref={containerRef} className={`relative ${className}`}>
      {/* A layout-only copy prevents jumping and remains indexable. */}
      <span className="invisible block" aria-hidden="true">{text}</span>
      {/* Assistive technology receives the complete text immediately. */}
      <span className="sr-only">{text}</span>
      <span className="absolute inset-0 block" aria-hidden="true">
        {text.slice(0, characterCount)}
        {started && characterCount < text.length && <span className="typewriter-caret" />}
      </span>
    </p>
  );
}
