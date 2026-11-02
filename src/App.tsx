import { Cursor } from "./components/Cursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
