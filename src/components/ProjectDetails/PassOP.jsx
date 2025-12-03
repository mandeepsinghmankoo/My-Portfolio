import React, { useEffect, useRef, useState } from 'react';

function PassOP() {
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
      className={`my-20 my-40 mx-10 p-5 border-t-4 border-[#08fb1d] transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <h1 className='text-6xl mb-10 text-[#08fb1d] tracking-wider'>PassOP</h1>

      <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
        {/* Left Section - Description */}
        <div className='space-y-6  text-lg leading-relaxed text-gray-300'>
          <p>
            🚀 I recently built my first <span className='text-[#08fb1d] font-semibold'>React application. </span>
            This Responsive Password Manager is a React-based application that allows users to securely store, edit, and manage their passwords directly on their device using Local Storage. Designed with a modern and fully responsive interface, it ensures smooth performance across all screens while keeping data private without relying on external servers. It provides a simple, efficient, and secure way for users to handle their daily credentials.
          </p>

          
            🔧 <span className='text-[#08fb1d] font-semibold'>Tech Stack:</span>⚛️ React.js · 🟨 JavaScript · 📂 LocalStorage API · 🎨 CSS <br />
            <p> <br />
              🧠 <span className='text-[#08fb1d] font-semibold'>Key Features:</span><br />
              💾 Secure password storage using Local Storage
              <br />
              📱 Fully responsive UI for seamless use on any device
              <br />
              ✏️ Add, edit, and delete password entries
              <br />
              🧩 Clean, beginner-friendly interface
              <br />
              🔗 Live demo: passmngop.netlify.app
            </p>

            <p>
              <span className='text-[#08fb1d] font-semibold'>🚀 Future Enhancements</span>
<br />
🔑 Password encryption
<br />
🔍 Search & filter functionality
<br />
🌙 Dark mode support
<br />
👥 Multi-user profiles with PIN/OTP access
            </p>

            <p>
              🔗 <a href='https://github.com/mandeepsinghmankoo/-PassOP-Password_Manager' target='_blank' rel='noopener noreferrer' className='text-[#08fb1d] underline'>
                View Source Code
              </a><br />
              🌐 <a href='https://passmngop.netlify.app/' target='_blank' rel='noopener noreferrer' className='text-[#08fb1d] underline'>
                Live Demo
              </a>
            </p>
        </div>

        {/* Right Section - Project Image */}
        <div className='space-y-10'>
          <img
            className='w-998 rounded-lg transition-transform duration-700 hover:scale-105'
            src='/passop.png'
            alt='Single page app view'
            style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
          />
          
        </div>
      </div>
    </div>
  );
}

export default PassOP;
