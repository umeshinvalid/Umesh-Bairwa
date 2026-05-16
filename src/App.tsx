/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-brand-purple selection:text-white bg-brand-black min-h-screen overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-50px] right-[-50px] w-[500px] h-[500px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-purple z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Trust />
        <About />
        <Skills />
        <Portfolio />
        <FeaturedCaseStudy />
        <Services />
        <Testimonials />
        <Workflow />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
