import React, { useEffect, useRef, useState } from 'react';

function HerShield() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setShowContent(false);
        }
      },
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
      className={`my-20 mx-10 mt-40 p-5 border-t-4 border-[#08fb1d] transition-opacity duration-1000 ease-in-out ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className='text-6xl mb-10 text-[#08fb1d] tracking-wider font-bold'>
        HERShield
      </h1>

      <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
        {/* Left Section */}
        <div className='space-y-6 text-lg leading-relaxed text-gray-300'>
          <p>
            <span className='text-[#08fb1d] font-semibold'>HERShield</span> is an
            <span className='text-[#08fb1d] font-semibold'> AI-driven women safety system</span>{' '}
            designed to protect women in urban areas through real-time surveillance,
            smart wearables, and automated SOS alerts. It leverages{' '}
            <span className='text-[#08fb1d] font-semibold'>computer vision</span> and{' '}
            <span className='text-[#08fb1d] font-semibold'>gesture recognition</span>{' '}
            to detect distress and alert authorities instantly.
          </p>

          <div>
            <h2 className='text-2xl text-[#08fb1d] font-semibold mb-2'>
              ⚙️ Key Features
            </h2>
            <ul className='list-disc ml-6 space-y-1'>
              <li>Real-time AI-based threat detection</li>
              <li>Gesture & voice-triggered SOS alerts</li>
              <li>Smart wearable and IoT integration</li>
              <li>Live location tracking with instant notifications</li>
            </ul>
          </div>

          <div>
            <h2 className='text-2xl text-[#08fb1d] font-semibold mb-2'>
              🧠 Tech Stack
            </h2>
            <p>AI/ML · Computer Vision · IoT Devices · React.JS · Mobile Integration</p>
          </div>

          <div>
            <h2 className='text-2xl text-[#08fb1d] font-semibold mb-2'>
              🌍 Impact
            </h2>
            <p>
              HERShield empowers women with proactive protection, faster emergency response,
              and data-driven safety insights — helping build safer, smarter cities.
            </p>
          </div>

          <div>
            <h2 className='text-2xl text-[#08fb1d] font-semibold mb-2'>
              🚀 Future Scope
            </h2>
            <ul className='list-disc ml-6 space-y-1'>
              <li>Smart city surveillance integration</li>
              <li>Predictive threat mapping using AI</li>
              <li>Global scalability and safety deployment</li>
            </ul>
          </div>

          <p className=' text-gray-400'>
            <span className='text-[#08fb1d] font-semibold'>Github Link:</span> 
            <a target="_blank" href="https://github.com/mandeepsinghmankoo/Hershield-25"> 🔗🔗  CLICK ME  🔗🔗🔗</a>
          </p>
        </div>

        {/* Right Section - Image */}
        <div>
          <img
            className='rounded-lg transition-transform duration-700 hover:scale-105 shadow-lg'
            src='herShield.png'
            alt='HERShield project preview'
            style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
          />
        </div>
      </div>
    </div>
  );
}

export default HerShield;
