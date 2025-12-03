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
            className={`my-20 mx-10 p-5 border-t-4 border-[#08fb1d] transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`} >
            <div className='grid grid-cols-2 gap-8'>
                <div>
                    <h1 className='text-7xl p-10'>Let’s <br /> Build Something  <span className='underline'>Great Together</span></h1>
                </div>
                <div>
                    <h1 className='text-3xl mt-10'>CONTACT ME</h1>
                    <div className='mt-6 flex flex-col gap-5'>
                        <div className='flex flex-col gap-2'>
                            <a href="mailto:mandeepmankoo0123@gmail.com" className='text-[#08fb1d] hover:underline text-xl'>mandeepmankoo0123@gmail.com</a>
                            <a href="tel:+916284047696" className='text-[#08fb1d] hover:underline text-xl'>+91-6284047696</a>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <a className='flex flex-row gap-2 justify-items-center items-center  hover:drop-shadow-[0_0_30px_#22c55e]'
                             href='https://www.linkedin.com/in/mankoo11/' target='_blank'
                            >
                                <img className='w-10' src="/Icons/linkedin.png" alt="linkedin" />
                                <p>Linkedin</p>
                            </a>
                            <a className='flex flex-row gap-2 justify-items-center items-center hover:drop-shadow-[0_0_30px_#22c55e]' 
                             href='https://github.com/mandeepsinghmankoo/' target='_blank'
                            >
                                <img className='w-10' src="/Icons/github.png" alt="github" />
                                <p>Github</p>
                            </a>
                            <a className='flex flex-row gap-2 justify-items-center items-center hover:drop-shadow-[0_0_30px_#22c55e]'
                              href='https://www.instagram.com/mandeep.mankoo_11?igsh=dW02dXNwdHNvZDcx' target='_blank'
                            >
                                <img className='w-10' src="/Icons/instagram.png" alt="insta" />
                                <p>Instagram</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>




        </div >
    )
}

export default Contact
