import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

function Hero() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 } // triggers when 30% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="home"
      ref={sectionRef}
      className={`mt-35 mx-20 z-20 flex items-center flex-col justify-center h-[80%] text-center px-4 lg:px-0 space-y-10 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Main Hero Row */}
      <div className="hero1 flex items-center justify-center m-0">
        {/* Left Text Section */}
        <div className="flex flex-col items-start w-1/2">
          <div className="text-8xl font-bold text-[#08fb1d] backdrop-blur-2xl drop-shadow-2xl drop-shadow-[#023f1a] typing-loop1">
            Hello,
          </div>
          <div className="text-6xl typing-loop2">I'm MANDEEP SINGH</div>
          <div className="text-6xl typing-loop3">MANKOO</div>
        </div>

        {/* Right Image Section */}
        <div className="w-1/2 flex justify-center transition-transform hover:scale-110 duration-300">
          <img
            src="hell.png"
            alt="hero1"
            className="w-140 h-80  rounded-lg"
          />
        </div>
      </div>

      {/* Sub Hero Row */}
      <div className="hero2 flex items-center justify-center gap-3 mx-5">
        <div className="transition-transform duration-300 w-1/5">
          <img
            className="w-100 h-45 mt-0 transition-transform duration-300 hover:scale-90"
            src="Heropic2.png"
            alt="hero2"
          />
        </div>
        <div className="text-3xl animate-pulse flex flex-col items-start pl-10">
          <span className="text-6xl">A Frontend Developer,</span>
          <span>
            Crafting seamless, high-performance interfaces with precision and
            creativity.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
