import { projects, type Project } from "../content/portfolio";
import { Reveal } from "./Reveal";
import { buttonPrimary, buttonSecondary, eyebrow } from "./styles";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="flex items-end justify-between gap-6 border-b border-ink-700 pb-8">
          <h2 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[1.2] tracking-[-0.02em]">
            Selected <span className="italic text-ink-400">work</span>
          </h2>
          <p className="hidden pb-4 text-sm tabular-nums text-ink-400 md:block">
            (0{projects.length})
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-32 md:mt-28 md:gap-48">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <article className="group grid gap-10 md:grid-cols-12 md:items-end md:gap-12">
      <Reveal className={`md:col-span-7 ${flipped ? "md:col-start-6 md:row-start-1" : "md:col-start-1 md:row-start-1"}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-ink-800 md:aspect-[16/11]">
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
          <span className="absolute left-5 top-5 font-display text-5xl italic text-bone-100 md:left-8 md:top-8 md:text-7xl">
            0{index + 1}
          </span>
        </div>
      </Reveal>

      <Reveal
        delay={0.15}
        className={`md:col-span-4 md:row-start-1 ${flipped ? "md:col-start-1" : "md:col-start-9"}`}
      >
        <p className={eyebrow}>{project.kicker}</p>
        <h3 className="mt-5 font-display text-5xl leading-[1.2] transition-colors duration-500 group-hover:text-accent-400 md:text-6xl">
          {project.title}
        </h3>
        <p className="mt-6 text-lg leading-[1.5] text-bone-300">{project.summary}</p>

        <dl className="mt-8 space-y-5 border-t border-ink-700 pt-6 text-sm">
          <div>
            <dt className="text-ink-400">Role</dt>
            <dd className="mt-1 font-medium text-bone-100">{project.role}</dd>
          </div>
          <div>
            <dt className="text-ink-400">Technology</dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full border border-ink-600 px-3 py-1 text-xs text-bone-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-cursor="Visit" className={buttonPrimary}>
              Visit live site
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" data-cursor="Code" className={buttonSecondary}>
              View source
            </a>
          )}
          <a href="#contact" className={project.liveUrl || project.repoUrl ? buttonSecondary : buttonPrimary}>
            Request a walkthrough
          </a>
        </div>
      </Reveal>
    </article>
  );
}
