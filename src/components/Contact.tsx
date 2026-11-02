import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { eyebrow } from "./styles";
import { contactLinks, person } from "../content/portfolio";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-ink-700 px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-6">
          <p className={eyebrow}>Contact</p>
          <h2 className="mt-5 font-display text-[clamp(3.5rem,8vw,8rem)] leading-[1.2] tracking-[-0.02em]">
            Let's build something <span className="italic text-accent-400">that matters.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-[1.5] text-bone-300">
            Hiring for a team, looking for an intern, or have a product idea? Send a message and I'll reply
            personally.
          </p>
          <p className="mt-10 text-sm text-ink-400">Based in {person.location}</p>

          <ul className="mt-10 divide-y divide-ink-700 border-y border-ink-700">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-6 py-5 transition-colors duration-300 hover:text-accent-400"
                >
                  <span className="text-sm text-ink-400">{link.label}</span>
                  <span className="font-medium">{link.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-5 md:col-start-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
