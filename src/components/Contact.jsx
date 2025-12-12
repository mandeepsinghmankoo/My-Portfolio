import React, { useEffect, useRef, useState } from 'react';



function Contact() {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If section is in view → fade in; if not → fade out
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // triggers when 30% of section is visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            id="contact"
            ref={sectionRef}
            className={`my-10 sm:my-16 lg:my-20 mx-4 sm:mx-6 lg:mx-10 p-3 sm:p-4 lg:p-5 border-t-4 border-[#08fb1d] transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`} >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-4 sm:p-6 lg:p-10 leading-tight'>Let's <br /> Build Something  <span className='underline'>Great Together</span></h1>
                </div>
                <div className='text-center lg:text-left'>
                    <h1 className='text-2xl sm:text-3xl mt-4 sm:mt-6 lg:mt-10'>CONTACT ME</h1>
                    <div className='mt-4 sm:mt-6 flex flex-col gap-4 sm:gap-5'>
                        <div className='flex flex-col gap-2'>
                            <a href="mailto:mandeepmankoo0123@gmail.com" className='text-[#08fb1d] hover:underline text-lg sm:text-xl break-all'>mandeepmankoo0123@gmail.com</a>
                            <a href="tel:+916284047696" className='text-[#08fb1d] hover:underline text-lg sm:text-xl'>+91-6284047696</a>
                        </div>
                        <div className='flex flex-col gap-4 sm:gap-5'>
                            <a className='flex flex-row gap-2 justify-center lg:justify-start items-center hover:drop-shadow-[0_0_30px_#22c55e]'
                             href='https://www.linkedin.com/in/mankoo11/' target='_blank'
                            >
                                <img className='w-8 sm:w-10' src="/Icons/linkedin.png" alt="linkedin" />
                                <p className='text-base sm:text-lg'>Linkedin</p>
                            </a>
                            <a className='flex flex-row gap-2 justify-center lg:justify-start items-center hover:drop-shadow-[0_0_30px_#22c55e]' 
                             href='https://github.com/mandeepsinghmankoo/' target='_blank'
                            >
                                <img className='w-8 sm:w-10' src="/Icons/github.png" alt="github" />
                                <p className='text-base sm:text-lg'>Github</p>
                            </a>
                            <a className='flex flex-row gap-2 justify-center lg:justify-start items-center hover:drop-shadow-[0_0_30px_#22c55e]'
                              href='https://www.instagram.com/mandeep.mankoo_11?igsh=dW02dXNwdHNvZDcx' target='_blank'
                            >
                                <img className='w-8 sm:w-10' src="/Icons/instagram.png" alt="insta" />
                                <p className='text-base sm:text-lg'>Instagram</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>




        </div >
    )
}

export default Contact