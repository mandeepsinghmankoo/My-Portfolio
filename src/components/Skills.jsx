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
            className={`my-20 mx-10 p-5 border-t-4 border-[#08fb1d] transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`} >

            <h1 className='text-4xl md:text-6xl mb-6 md:mb-10 text-[#08fb1d] tracking-wider text-center md:text-left'>SKILLS</h1>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">

                <div class="bg-white/20 p-6 rounded-xl  ">
                    <h3 class="text-xl font-bold text-white">Frontend Development</h3>
                    <div className='flex row space-x-4'>
                        <img className='w-30 h-30 ' src="/skills/HTML.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-30 h-30 ' src="/skills/CSS.png" alt="CSS" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-30 h-30 ' src="/skills/JS.png" alt="CSS" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-30 h-30 ' src="/skills/REACT.png" alt="CSS" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    </div>
                </div>

                <div class="bg-white/20 p-6 rounded-xl">
                    <h3 class="text-xl font-bold text-white">Backend Development (Learning stage)</h3>
                    <div className='flex '>
                        <img className='w-30 h-30 ' src="/skills/NODE.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-30 h-30 ' src="/skills/EXPRESS.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-30 h-30 ' src="/skills/CPP.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-30 h-30 ' src="/skills/SQL.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img className='w-30 h-30 ' src="/skills/MONGO.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    </div>
                </div>

                <div class="bg-white/20 p-6 rounded-xl col-span-1 md:col-span-2 space-y-2">
                    <h3 class="text-xl font-bold text-white">Tools</h3>
                    <div className='flex col space-x-11'>
                        <img className='w-20 h-20 ' src="/skills/github.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                        <img className='w-20 h-20 ' src="/skills/git.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                        <img className='w-23 h-20 ' src="/skills/appwrite.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                        <img className='w-20 h-20 ' src="/skills/vs.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                        <img className='w-23 h-22 ' src="/skills/canva.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                        <img className='w-35 h-20 ' src="/skills/arduino.png" alt="HTML" 
                     style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    </div>
                </div>

            

        </div>




        </div >
    )
}

export default Skills
