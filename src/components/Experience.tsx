import { experience } from "../content/portfolio";
import { Reveal } from "./Reveal";
import { eyebrow } from "./styles";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-ink-700 px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className={eyebrow}>Experience</p>
          <h2 className="mt-5 font-display text-6xl leading-[1.2] md:text-7xl">
            Where I've <span className="italic text-ink-400">worked</span>
          </h2>
        </Reveal>

        <div className="md:col-span-7 md:col-start-6">
          {experience.map((item) => (
            <Reveal key={`${item.role}-${item.period}`}>
              <article className="grid gap-4 border-b border-ink-700 py-10 transition-colors duration-500 hover:bg-ink-900 md:grid-cols-12 md:gap-6 md:px-6">
                <p className="text-sm tabular-nums text-ink-400 md:col-span-3">{item.period}</p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-4xl leading-[1.2]">{item.role}</h3>
                  <p className="mt-2 text-sm font-semibold text-bone-100">
                    {item.organization} <span className="font-normal text-ink-400">· {item.location}</span>
                  </p>
                  <ul className="mt-4 space-y-3 leading-[1.5] text-bone-300">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="grid grid-cols-[1rem_1fr] gap-3">
                        <span aria-hidden="true" className="text-accent-400">–</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
