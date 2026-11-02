import { focusAreas, person } from "../content/portfolio";
import { Reveal } from "./Reveal";
import { eyebrow } from "./styles";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12 md:gap-12">
        <Reveal className="md:sticky md:top-32 md:col-span-5 md:self-start">
          <figure>
            <div className="aspect-[3/4] overflow-hidden bg-ink-800">
              <img
                src="https://images.pexels.com/photos/35175022/pexels-photo-35175022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Aerial view of the Greater Accra Region, Ghana"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
              />
            </div>
            <figcaption className="mt-4 flex justify-between text-sm text-ink-400">
              <span>{person.location}</span>
              <span className="tabular-nums">5.60° N, 0.19° W</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className={eyebrow}>About</p>
            <h2 className="mt-5 font-display text-[clamp(2.75rem,5vw,5rem)] leading-[1.2] tracking-[-0.02em]">
              I'm a Computer Science student building <span className="italic text-accent-400">things that work</span>{" "}
              in the real world.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 space-y-6 text-lg leading-[1.5] text-bone-300">
            <p>
              I study Computer Science at the University of Ghana, and I learned early that code matters most when it
              changes something for someone. I build practical software, from AI-driven matching tools to the
              department websites students use every day.
            </p>
            <p>
              I'm drawn to the parts that hold everything together: backend engineering, clean data models, and the
              security that keeps a product trustworthy when real people depend on it.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-16 divide-y divide-ink-700 border-y border-ink-700">
              {focusAreas.map((area, i) => (
                <li key={area.title} className="grid grid-cols-[3rem_1fr] gap-4 py-7 md:grid-cols-[4rem_1fr] md:gap-6">
                  <span className="pt-1 text-sm tabular-nums text-ink-400">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-3xl leading-[1.2]">{area.title}</h3>
                    <p className="mt-2 leading-[1.5] text-bone-300">{area.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
