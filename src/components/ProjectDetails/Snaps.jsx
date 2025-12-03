import React, { useEffect, useRef, useState } from 'react';

function Snaps() {
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
            <h1 className='text-6xl mb-10 text-[#08fb1d] tracking-wider'>SNAPS</h1>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
                {/* Left Section - Description */}
                <div className='space-y-6  text-lg leading-relaxed text-gray-300'>
                    <p>
                        🚀 I recently built my first <span className='text-[#08fb1d] font-semibold'>web application</span> using Html CSS JS —
                        a major start for my journey as a full-stack developer. This project helped me understand how frontend and backend systems work
                        in a real-world product setup while polishing my UI/UX.
                    </p>

                    <p>
                        🔧 <span className='text-[#08fb1d] font-semibold'>Tech Stack:</span>HTML, Bootstrap, CSS, JavaScript, OpenCV, Python, pyTesseract, cv2, Stack Overflow
                    </p>

                    <p>
                        🧠 <span className='text-[#08fb1d] font-semibold'>Key Features:</span><br /> <br />
                        🔍 AI License Plate Detection
                        <br />
                        Automatic vehicle entry/exit tracking
                        <br />
                        💰 Dynamic Pricing & QR Payments
                        <br />
                        Time-based fare calculation (₹5/hour)
                        <br />
                        Automated QR code generation for payments
                        <br />
                        3x3 grid slot allocation system
                        <br />
                        🖥️ Web Dashboard
                        <br />
                        Live vehicle logs and system monitoring
                    </p>

                    <p>
                        SNAPS is an AI-powered parking management system that revolutionizes the traditional parking experience through automated license plate recognition and contactless operations. Built using Python, OpenCV, and Tesseract OCR, the system automatically detects vehicle license plates upon entry and exit, eliminating the need for physical tickets or manual intervention. The core technology leverages computer vision algorithms with Haar Cascade classifiers for real-time plate detection and contour analysis for accurate text extraction.
<br />
                        The system features a comprehensive web-based dashboard built with Bootstrap and JavaScript that provides real-time monitoring of parking occupancy, vehicle logs, and automated fare calculation. With dynamic pricing at ₹5 per hour and QR code payment integration, SNAPS offers seamless billing while managing a 3x3 grid parking layout with intelligent slot allocation. The full-stack solution demonstrates expertise in computer vision, web development, and system integration, delivering a zero-touch parking experience that enhances both operational efficiency and user convenience.
                    </p>

                    <p>
                        🔗 <a href='https://github.com/mandeepsinghmankoo/SNAPS' target='_blank' rel='noopener noreferrer' className='text-[#08fb1d] underline'>
                            View Source Code
                        </a><br />
                        🌐 <a href='https://youtu.be/kaT_ax_ES44' target='_blank' rel='noopener noreferrer' className='text-[#08fb1d] underline'>
                            Live Demo
                        </a>
                    </p>
                </div>

                {/* Right Section - Project Image */}
                <div className='space-y-10'>
                    <img
                        className='w-998 rounded-lg transition-transform duration-700 hover:scale-110'
                        src='snap1.png'
                        alt='snaps main page'
                        style={{ boxShadow: '0 10px 20px -10px #08fb1d' }}
                    />
                    <img
                        className='w-full max-w-2xl rounded-lg transition-transform duration-700 hover:scale-105'
                        src='snap2.png'
                        alt='Number plate list'
                        style={{ boxShadow: '0 10px 20px -10px #08fb1d' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Snaps;
