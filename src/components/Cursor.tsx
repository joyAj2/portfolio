import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const RING_SIZE = 40;
const HOVER_SIZE = 96;

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 420, damping: 38, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 420, damping: 38, mass: 0.4 });

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const sync = () => {
      setEnabled(query.matches);
      document.documentElement.classList.toggle("custom-cursor", query.matches);
    };
    sync();
    query.addEventListener("change", sync);
    return () => {
      query.removeEventListener("change", sync);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: PointerEvent) => {
      const target = (e.target as Element).closest<HTMLElement>("[data-cursor]");
      setLabel(target ? (target.dataset.cursor ?? null) : null);
    };
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const hovering = label !== null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        style={{ x, y }}
      >
        <div className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-xs font-semibold text-ink-950"
          animate={{
            width: hovering ? HOVER_SIZE : RING_SIZE,
            height: hovering ? HOVER_SIZE : RING_SIZE,
            backgroundColor: hovering ? "#d8ff4a" : "rgba(8, 8, 8, 0)",
            borderColor: hovering ? "#d8ff4a" : "rgba(243, 240, 234, 0.7)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
        >
          {label}
        </motion.div>
      </motion.div>
    </>
  );
}
