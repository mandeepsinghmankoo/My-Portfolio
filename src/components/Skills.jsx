import React, { useEffect, useRef, useState } from 'react';

function Skills() {
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
            id="skills"
            ref={sectionRef}
            className={`my-10 sm:my-16 lg:my-20 mx-4 sm:mx-6 lg:mx-10 p-3 sm:p-4 lg:p-5 border-t-4 border-[#08fb1d] transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`} >

            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 lg:mb-10 text-[#08fb1d] tracking-wider text-center lg:text-left'>SKILLS</h1>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">

                <div className="bg-white/20 p-4 sm:p-5 lg:p-6 rounded-xl">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Frontend Development</h3>
                    <div className='flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center sm:justify-start'>
                        <img className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-30 xl:h-30' src="/skills/HTML.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-30 xl:h-30' src="/skills/CSS.png" alt="CSS" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-30 xl:h-30' src="/skills/JS.png" alt="JavaScript" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-30 xl:h-30' src="/skills/REACT.png" alt="React" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    </div>
                </div>

                <div className="bg-white/20 p-4 sm:p-5 lg:p-6 rounded-xl">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Backend Development (Learning stage)</h3>
                    <div className='flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center sm:justify-start'>
                        <img className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-30 xl:h-30' src="/skills/NODE.png" alt="Node.js" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-30 xl:h-30' src="/skills/EXPRESS.png" alt="Express" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-30 xl:h-30' src="/skills/CPP.png" alt="C++" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-30 xl:h-30' src="/skills/SQL.png" alt="SQL" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-30 xl:h-30' src="/skills/MONGO.png" alt="MongoDB" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    </div>
                </div>

                <div className="bg-white/20 p-4 sm:p-5 lg:p-6 rounded-xl col-span-1 lg:col-span-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Tools</h3>
                    <div className='flex flex-wrap gap-3 sm:gap-4 lg:gap-6 xl:gap-8 justify-center sm:justify-start'>
                        <img className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' src="/skills/github.png" alt="GitHub" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                        <img className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' src="/skills/git.png" alt="Git" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                        <img className='w-12 h-10 sm:w-14 sm:h-12 md:w-18 md:h-16 lg:w-23 lg:h-20' src="/skills/appwrite.png" alt="Appwrite" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                        <img className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' src="/skills/vs.png" alt="VS Code" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                        <img className='w-12 h-11 sm:w-14 sm:h-13 md:w-18 md:h-17 lg:w-23 lg:h-22' src="/skills/canva.png" alt="Canva" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                        <img className='w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16 lg:w-35 lg:h-20' src="/skills/arduino.png" alt="Arduino" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    </div>
                </div>

        </div>




        </div >
    )
}

export default Skills
