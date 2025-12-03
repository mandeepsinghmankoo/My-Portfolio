import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}
import Lenis from "@studio-freight/lenis";
import Particles from './components/3d/Particles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import HerShield from './components/ProjectDetails/HerShield';
import MegaBlog from './components/ProjectDetails/MegaBlog';
import AntiSleep from './components/ProjectDetails/AntiSleep';
import Snaps from './components/ProjectDetails/Snaps';
import Portfolio from './components/ProjectDetails/Portfolio';
import PassOP from './components/ProjectDetails/PassOP';
import Skills from './components/Skills';
import Achievement from './components/Achievement';
import  Contact  from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-[300vh] bg-black text-white overflow-hidden">
        {/* Background Particles */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={['#ffffff', '#00ffcc']}
            particleCount={300}
            particleSpread={8}
            speed={0.25}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="relative z-30">
          <Header />
        </div>
        
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero/>
              <About/>
              <Projects/>
              <Skills/>
              <Achievement/>
              <Contact/>
              <Footer/>
            </>
          } />
          <Route path="/HERShield" element={<HerShield />} />
          <Route path="/Mega Blog" element={<MegaBlog />} />
          <Route path="/Anti-Sleep-System" element={<AntiSleep />} />
          <Route path="/snaps" element={<Snaps />} />
          <Route path="/<PassOP/>" element={<PassOP />} />
          <Route path="/Portfolio Website" element={<Portfolio />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
