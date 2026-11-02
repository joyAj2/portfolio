import { person } from "../content/portfolio";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-ink-700 px-6 pt-16 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-6 text-sm text-bone-300 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {person.name}. {person.role}, {person.location}.
          </p>
          <a href="#top" data-cursor="Top" className="w-fit transition-colors duration-300 hover:text-accent-400">
            Back to top ↑
          </a>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="mt-12 select-none whitespace-nowrap text-center font-display leading-[1.2] text-[clamp(3.5rem,17vw,18rem)] text-ink-600"
      >
        {person.name}
      </p>
    </footer>
  );
}
