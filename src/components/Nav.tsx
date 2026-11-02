import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAccraTime } from "../lib/useAccraTime";
import { person } from "../content/portfolio";
import { buttonPrimary } from "./styles";

const links = [
  { href: "#work", label: "Work", number: "01" },
  { href: "#about", label: "About", number: "02" },
  { href: "#experience", label: "Experience", number: "03" },
  { href: "#skills", label: "Skills", number: "04" },
  { href: "#contact", label: "Contact", number: "05" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const time = useAccraTime();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
          scrolled || open
            ? "border-ink-700/60 bg-ink-950/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12">
          <a href="#top" data-cursor="Top" onClick={close} className="group flex items-center gap-3" aria-label="Back to top">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bone-100/40 font-display text-xl italic transition-transform duration-700 group-hover:rotate-[360deg]">
              {person.initial}
            </span>
            <span className="hidden text-sm font-semibold tracking-wide sm:block">{person.name}</span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-ink-600 bg-ink-900/70 p-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 rounded-full px-4 py-2 text-sm text-bone-300 transition-colors duration-300 hover:bg-bone-100 hover:text-ink-950"
                  >
                    <span className="text-xs tabular-nums text-ink-400 group-hover:text-ink-600">{link.number}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <span className="hidden text-sm tabular-nums text-bone-300 lg:block">Accra {time}</span>
            <a href="#contact" className={`${buttonPrimary} hidden md:inline-flex`}>
              Let's talk
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-10 items-center rounded-full border border-ink-500 px-5 text-sm font-semibold md:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink-950 px-6 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a href={link.href} onClick={close} className="flex items-baseline gap-4 font-display text-6xl leading-[1.2]">
                    <span className="font-sans text-xs text-ink-400">{link.number}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="mt-12 text-sm text-bone-300">Accra {time} · Available for opportunities</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
