import React, { useEffect, useRef, useState } from 'react';

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If section is in view → fade in; if not → fade out
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // triggers when 30% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="about"
      ref={sectionRef}
      className={`my-10 sm:my-16 lg:my-20 mx-4 sm:mx-6 lg:mx-10 p-3 sm:p-4 lg:p-5 border-t-4 border-[#08fb1d] transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 lg:mb-10 text-[#08fb1d] tracking-wider text-center lg:text-left'>ABOUT ME</h1>

      <div className='flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10'>
        {/* Left Text Section */}
        <div className='space-y-4 sm:space-y-5 lg:space-y-6 lg:w-1/2 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300 text-center lg:text-left'>
          <p>
            I'm <span className='text-[#08fb1d] font-semibold'>Mandeep Singh Mankoo</span>, 
            a passionate Computer Science Engineering student at Chandigarh University, deeply focused on building immersive and intuitive digital experiences.
            I specialize in frontend development, where creativity meets logic — transforming ideas into responsive, efficient, and visually engaging user interfaces using tools like React, Tailwind CSS, and modern JavaScript practices.
          </p>

          <p>
            Currently, I’m expanding my expertise into backend development, exploring how APIs, servers, and databases power full-stack applications. 
            I’ve been learning to integrate Appwrite for authentication, databases, and cloud functions — making my projects more dynamic and scalable.
          </p>

          <p>
            Beyond just writing code, I love designing smooth interactions, meaningful animations, and pixel-perfect layouts that bring life to the web. 
            My goal is to craft web applications that not only work seamlessly but also feel great to use — combining performance, simplicity, and aesthetics in every project I build.
          </p>
        </div>

        {/* Right Image Section */}
        <div className='flex justify-center lg:justify-end lg:w-1/2'>
          <img
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-120 lg:h-120 xl:w-140 xl:h-140 rounded-lg transition-transform duration-700 hover:scale-105 object-cover"
            src="MyPic.png"
            alt="mypic"
            style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
