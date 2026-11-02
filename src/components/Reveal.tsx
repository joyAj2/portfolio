import type { ReactNode } from "react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function WordReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="mr-[0.25em] inline-block overflow-hidden pb-[0.1em] align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "105%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + i * 0.08, ease }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
