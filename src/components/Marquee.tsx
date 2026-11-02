import { marqueeItems } from "../content/portfolio";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-ink-700 py-6 md:py-8" aria-hidden="true">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center font-display text-4xl italic text-bone-300 md:text-6xl">
            {item}
            <span className="mx-10 not-italic text-accent-400 md:mx-14">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
