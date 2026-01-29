import Hero from '@/components/home/Hero';
import Painpoint from '@/components/home/Painpoint';
import About from '@/components/home/About';
import TechStack from '@/components/home/TechStack';
import Projects from '@/components/home/Projects';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Painpoint />
      <About />
      <TechStack />
      <Projects />
      <FAQ />
      <Contact />
    </>
  );
}
