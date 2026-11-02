import { education, skillGroups } from "../content/portfolio";
import { Reveal } from "./Reveal";
import { eyebrow } from "./styles";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-ink-700 px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className={eyebrow}>Skills & education</p>
          <h2 className="mt-5 font-display text-6xl leading-[1.2] md:text-7xl">
            What I <span className="italic text-ink-400">work with</span>
          </h2>
        </Reveal>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <dl className="divide-y divide-ink-700 border-y border-ink-700">
              {skillGroups.map((group) => (
                <div key={group.label} className="grid gap-4 py-7 md:grid-cols-12 md:gap-6">
                  <dt className="text-sm text-ink-400 md:col-span-4">{group.label}</dt>
                  <dd className="md:col-span-8">
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li key={item} className="rounded-full border border-ink-600 px-3 py-1 text-xs text-bone-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="mt-20">
            <p className={eyebrow}>Education</p>
            <article className="mt-6 grid gap-4 md:grid-cols-12 md:gap-6">
              <p className="text-sm tabular-nums text-ink-400 md:col-span-3">{education.period}</p>
              <div className="md:col-span-9">
                <h3 className="font-display text-4xl leading-[1.2]">{education.degree}</h3>
                <p className="mt-2 text-sm text-bone-300">{education.school}</p>
                <p className="mt-6 text-sm text-ink-400">Relevant coursework</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <li key={course} className="rounded-full border border-ink-600 px-3 py-1 text-xs text-bone-300">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
