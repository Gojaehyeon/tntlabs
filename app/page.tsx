import Hero from '@/components/home/Hero';
// import Highlights from '@/components/home/Highlights';
import Statement from '@/components/home/Statement';
import Products from '@/components/home/Products';
// import Capabilities from '@/components/home/Capabilities';
import Mission from '@/components/home/Mission';
import Testimonials from '@/components/home/Testimonials';
// import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
// import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Highlights /> */}
      <Statement />
      <Products />
      <Mission />
      <Testimonials />
      {/* <Capabilities /> */}
      {/* <About /> */}
      <Contact />
      {/* <CTA /> */}
    </>
  );
}
