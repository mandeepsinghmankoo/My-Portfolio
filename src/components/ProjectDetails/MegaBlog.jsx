import React, { useEffect, useRef, useState } from 'react';

function MegaBlog() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let timeout;
    if (isVisible) {
      timeout = setTimeout(() => setShowContent(true), 500);
    } else {
      setShowContent(false);
    }
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className={`my-20 my-40 mx-10 p-5 border-t-4 border-[#08fb1d] transition-opacity duration-1000 ease-in-out ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className='text-6xl mb-10 text-[#08fb1d] tracking-wider'>BLOG WEB APP</h1>

      <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
        {/* Left Section - Description */}
        <div className='space-y-6  text-lg leading-relaxed text-gray-300'>
          <p>
            🚀 I recently built my first <span className='text-[#08fb1d] font-semibold'>production-grade full-stack blog application</span> using React — 
            a major step forward in my journey as a full-stack developer. This project helped me understand how frontend and backend systems connect 
            in a real-world product setup while polishing my UI/UX, state management, and deployment skills.
          </p>

          <p>
            🔧 <span className='text-[#08fb1d] font-semibold'>Tech Stack:</span> React.js, Redux, React Router, Tailwind CSS, Appwrite (Backend as a Service),
            HTML Parser, Protected Routes, and Custom Components — all structured with a clean, component-based architecture for scalability.
          </p>

          <p>
            🧠 <span className='text-[#08fb1d] font-semibold'>Key Features:</span><br />
            🔐 User Authentication (Sign up / Login / Logout with Appwrite)<br />
            📝 Full CRUD operations (Create, Read, Update, Delete posts)<br />
            🖼️ Image uploads with live previews<br />
            🧑‍💼 Author-only controls (edit/delete permissions)<br />
            🌐 Dynamic routing using React Router<br />
            🧾 HTML parsing for rich post content<br />
            🪄 Fully responsive, modern UI using Tailwind CSS
          </p>

          <p>
            Every feature — from authentication to CRUD — was implemented from scratch, teaching me about real-time backend integration, 
            efficient state handling, and writing maintainable, modular React code. This project represents my transition from learning React 
            to building production-level full-stack applications.
          </p>

          <p>
            🔗 <a href='https://github.com/mandeepsinghmankoo/12MegaBlog' target='_blank' rel='noopener noreferrer' className='text-[#08fb1d] underline'>
              View Source Code
            </a><br />
            🌐 <a href='https://12-mega-blog-blond.vercel.app/' target='_blank' rel='noopener noreferrer' className='text-[#08fb1d] underline'>
              Live Demo
            </a>
          </p>
        </div>

        {/* Right Section - Project Image */}
        <div className='space-y-10'>
          <img
            className='rounded-lg transition-transform duration-700 hover:scale-105'
            src='mega1.png'
            alt='Blog Web App preview'
            style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
          />
          <img
            className='rounded-lg transition-transform duration-700 hover:scale-105'
            src='mega2.png'
            alt='Blog Web App preview'
            style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
          />
        </div>
      </div>
    </div>
  );
}

export default MegaBlog;
