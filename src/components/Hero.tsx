import { Reveal, WordReveal } from "./Reveal";
import { buttonPrimary, buttonSecondary } from "./styles";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-between px-6 pb-12 pt-32 md:px-12 md:pt-40">
      <div className="mx-auto w-full max-w-[1600px]">
        <Reveal className="flex flex-wrap items-center justify-between gap-4 text-sm text-bone-300">
          <p>Full-Stack &amp; Mobile Developer</p>
          <p>Accra, Ghana</p>
        </Reveal>

        <h1 className="mt-10 font-display text-[clamp(3.25rem,11vw,12rem)] leading-[1.2] tracking-[-0.025em] text-bone-100 md:mt-16">
          <WordReveal text="I build digital" className="block" />
          <WordReveal text="experiences that" className="block md:pl-[14vw]" delay={0.15} />
          <WordReveal text="solve real problems." className="block italic text-accent-400 md:pl-[4vw]" delay={0.3} />
        </h1>
      </div>

      <div className="mx-auto mt-16 grid w-full max-w-[1600px] gap-12 md:mt-24 md:grid-cols-12 md:gap-6">
        <Reveal delay={0.4} className="md:col-span-5">
          <p className="text-lg leading-[1.5] text-bone-300 md:text-xl">
            I'm Joy, a Computer Science student at the University of Ghana. I design and build full-stack products,
            AI-powered tools and backend systems, and I care most about the parts people never see: the logic, the
            data and the security that make software trustworthy.
          </p>
        </Reveal>

        <Reveal delay={0.5} className="md:col-span-5 md:col-start-8">
          <div className="rounded-2xl border border-ink-600 bg-ink-900 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success-400" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-success-400">
                Available for opportunities
              </p>
            </div>
            <p className="mt-4 leading-[1.5] text-bone-300">
              Open to full-time roles, internships and selected freelance projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className={buttonSecondary}>
                See selected work
              </a>
              <a href="#contact" className={buttonPrimary}>
                Start a conversation
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
