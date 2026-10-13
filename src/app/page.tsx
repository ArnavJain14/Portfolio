import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Workbench from "@/components/Workbench";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ProductManagement from "@/components/ProductManagement";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Workbench />
      <Experience />
      <Skills />
      <ProductManagement />
      <Education />
      <Contact />
    </>
  );
}
