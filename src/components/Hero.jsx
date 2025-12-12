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
      className={`mt-16 sm:mt-20 lg:mt-28 mx-4 sm:mx-8 lg:mx-20 z-20 flex items-center flex-col justify-center h-auto py-8 sm:py-12 lg:py-16 text-center px-4 lg:px-0 space-y-4 sm:space-y-6 lg:space-y-10 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Main Hero Row */}
      <div className="hero1 flex items-center justify-center gap-3 sm:gap-6 lg:gap-0 w-full">
        {/* Left Text Section */}
        <div className="flex flex-col items-start w-1/2">
          <div className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#08fb1d] backdrop-blur-2xl drop-shadow-2xl drop-shadow-[#023f1a] typing-loop1 leading-tight">
            Hello,
          </div>
          <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl typing-loop2 leading-tight">I'm MANDEEP SINGH</div>
          <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl typing-loop3 leading-tight">MANKOO</div>
        </div>

        {/* Right Image Section */}
        <div className="w-1/2 flex justify-center transition-transform hover:scale-110 duration-300">
          <img
            src="hell.png"
            alt="hero1"
            className="w-32 h-32 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-140 xl:h-80 rounded-lg object-contain"
          />
        </div>
      </div>

      {/* Sub Hero Row */}
      <div className="hero2 flex items-center justify-center gap-2 sm:gap-4 lg:gap-8 mx-2 sm:mx-5 w-full">
        <div className="transition-transform duration-300 w-1/5">
          <img
            className="w-full h-auto transition-transform duration-300 hover:scale-90"
            src="Heropic2.png"
            alt="hero2"
          />
        </div>
        <div className="text-xs sm:text-lg md:text-2xl lg:text-3xl animate-pulse flex flex-col items-start pl-2 sm:pl-4 lg:pl-10">
          <span className="text-sm sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-1 sm:mb-2">A Frontend Developer,</span>
          <span className="text-xs sm:text-sm md:text-lg lg:text-xl leading-relaxed">
            Crafting seamless, high-performance interfaces with precision and
            creativity.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
