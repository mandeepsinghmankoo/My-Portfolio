import React, { useEffect, useRef, useState } from 'react';

function Achievement() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    
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
            id="achievements"
            ref={sectionRef}
            className={`my-10 sm:my-16 lg:my-20 mx-4 sm:mx-6 lg:mx-10 p-3 sm:p-4 lg:p-5 border-t-4 border-[#08fb1d] transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`} >

            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 lg:mb-10 text-[#08fb1d] tracking-wider text-center lg:text-left'>ACHIEVEMENTS / PARTICIPATIONS</h1>

           <div className='space-y-1.5 '>
                <div className='bg-white/20 p-3 sm:p-4 lg:p-5 rounded-xl space-y-2 text-sm sm:text-base lg:text-lg xl:text-xl'>
                    Participated in   
                    <span className='text-blue-400'>  DevCreate BuildFest 1.0,</span> a 30-hour hackathon organized by CT Group in collaboration with Google Developer Groups (GDG) Jalandhar, contributing creativity and problem-solving to the event.
                </div>
                <div className='bg-white/20 p-3 sm:p-4 lg:p-5 rounded-xl space-y-2 text-sm sm:text-base lg:text-lg xl:text-xl'>
                    Achieved a  
                    <span className='text-red-400'>  Top 9 position out of 200+ teams </span> at Hack N Win 2.0, organized by CGC Jhanjeri in collaboration with the D4 Community, demonstrating strong innovation and problem-solving skills.
                </div>
                <div className='bg-white/20 p-3 sm:p-4 lg:p-5 rounded-xl space-y-2 text-sm sm:text-base lg:text-lg xl:text-xl'>
                    Reached the 
                    <span className='text-green-400'>  Top 30 teams in  </span>  Hack for Impact at E-Summit 2025, organized by the Entrepreneurship Cell of IIIT Delhi, showcasing innovation, creativity, and impactful tech solutions.
                </div>
                <div className='bg-white/20 p-3 sm:p-4 lg:p-5 rounded-xl space-y-2 text-sm sm:text-base lg:text-lg xl:text-xl'>
                    Secured
                    <span className='text-yellow-400'>  2nd position  </span>    at Hack the Hills, held during E-Summit'25 at IIIT Una, recognized for outstanding performance and innovative project execution.
                </div>
                <div className='bg-white/20 p-3 sm:p-4 lg:p-5 rounded-xl space-y-2 text-sm sm:text-base lg:text-lg xl:text-xl'>
                    Reached the
                    <span className='text-amber-800'>  Top 15 teams  </span>      in the Future Tech 2024 Project Exhibition at Chandigarh University for developing an innovative IoT-based solution demonstrating practical implementation and technical creativity.
                </div>
                <div className='bg-white/20 p-3 sm:p-4 lg:p-5 rounded-xl space-y-2 text-sm sm:text-base lg:text-lg xl:text-xl'>
                    Reached the
                    <span className='text-fuchsia-400'>  Top 9 finalists  </span>       in Makeathon 6, a 24-hour hybrid hackathon organized by the Microsoft Learn Student Chapter at Thapar Institute of Engineering & Technology.
                </div>
                <a href="https://drive.google.com/drive/u/1/folders/1E_jwxDunqDktYG0jZZTJwn4D6rSwKAiU" target='_blank' className='p-3 sm:p-4 lg:p-5 font-bold text-lg sm:text-xl lg:text-2xl flex justify-center lg:justify-end text-[#08fb1d] hover:duration-700 hover:text-xl sm:hover:text-2xl lg:hover:text-3xl transition-transform duration-900 hover:scale-105'> ⬆️All Certifications</a>
           </div>
            <div className='space-y-1.5'>
                <div className='bg-white/20 p-3 sm:p-4 lg:p-5 rounded-xl space-y-2 text-sm sm:text-base lg:text-lg xl:text-xl'>
                    Co-inventor of a published patent titled 
                    <span className='text-cyan-500'>  "Adaptive Signaling System for Four-Wheelers with Predictive Error Correction",</span>   introducing an AI-powered vehicle signaling system that reduces driver errors and improves road safety through real-time prediction and corrective intelligence.
                </div>
                <div className='bg-white/20 p-3 sm:p-4 lg:p-5 rounded-xl space-y-2 text-sm sm:text-base lg:text-lg xl:text-xl'>
                    Co-inventor of the published patent 
                    <span className='text-red-600'>  "Process Flow of the Revolutionary Smart Indicator System",</span>    introducing an AI-powered helmet-mounted signaling system for two-wheelers featuring gesture controls, adaptive indicators, and real-time error correction to enhance rider safety.
                </div>
                <a href="https://drive.google.com/drive/u/1/folders/18v69sxKQ9Vx5k86dnj1yn-SmjKrOsxXY" target='_blank' className='p-3 sm:p-4 lg:p-5 font-bold text-lg sm:text-xl lg:text-2xl flex justify-center lg:justify-end text-[#08fb1d] hover:duration-700 hover:text-xl sm:hover:text-2xl lg:hover:text-3xl transition-transform duration-900 hover:scale-105'> ⬆️All Certifications</a>
            </div>
            <div className='space-y-1.5'>
                <div className='bg-white/20 p-3 sm:p-4 lg:p-5 rounded-xl space-y-2 text-sm sm:text-base lg:text-lg xl:text-xl'>
                    Built a 
                    <span className='text-green-500'>  Smart Automatic Floor Cleaner as a group project</span>     — an Arduino-powered autonomous cleaning robot featuring obstacle detection, efficient navigation, servo-based cleaning mechanisms, and lithium-ion battery power management.
                </div>
                
                <a href="https://drive.google.com/drive/u/1/folders/1RY29YXiXgAv1pI0NGt2iPOLf51cqzKd7" target='_blank' className='p-3 sm:p-4 lg:p-5 font-bold text-lg sm:text-xl lg:text-2xl flex justify-center lg:justify-end text-[#08fb1d] hover:duration-700 hover:text-xl sm:hover:text-2xl lg:hover:text-3xl transition-transform duration-900 hover:scale-105'> ⬆️All Certifications</a>
            </div>

            <div className='space-y-6'>
                <h2 className='text-2xl sm:text-3xl font-bold text-[#08fb1d] text-center lg:text-left'>Online Courses</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {[
                        { src: '/Courses/HTML_CSS.jpg', alt: 'Course Certificate 1' },
                        { src: '/Courses/Arduino-C.jpg', alt: 'Course Certificate 2' },
                        { src: '/Courses/DB-SQL.jpg', alt: 'Course Certificate 3' },
                        { src: '/Courses/DSA.jpg', alt: 'Course Certificate 4' }
                    ].map((cert, index) => (
                        <div
                            key={index}
                            
                        >
                            <img
                                src={cert.src}
                                alt={cert.alt}
                                className='w-[95%] object-contain rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 border-2 border-[#08fb1d]/30 hover:border-[#08fb1d]'
                                onClick={() => setSelectedImage(cert)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50' onClick={() => setSelectedImage(null)}>
                    <div className='relative max-w-4xl max-h-[90vh] p-4'>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className='w-full h-full object-contain rounded-lg'
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className='absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors'
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}


        </div >
  )
}

export default Achievement