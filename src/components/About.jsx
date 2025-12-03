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
      className={`my-20 mx-10 p-5 border-t-4 border-[#08fb1d] transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className='text-6xl mb-10 text-[#08fb1d] tracking-wider'>ABOUT ME</h1>

      <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
        {/* Left Text Section */}
        <div className='space-y-6 lg:w-1/2 text-lg leading-relaxed text-gray-300'>
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
        <div>
          <img
            className="rounded-lg transition-transform duration-700 hover:scale-105"
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
