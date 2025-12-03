import React, { useEffect, useRef, useState } from 'react';

function AntiSleep() {
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
            className={`my-40 mx-10 p-5 border-t-4 border-[#08fb1d] transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <h1 className='text-6xl mb-10 text-[#08fb1d] tracking-wider'>Anti-Sleep System</h1>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
                {/* Left Section - Description */}
                <div className='space-y-6  text-lg leading-relaxed text-gray-300'>
                    <p>
                        🚀 I recently built my <span className='text-[#08fb1d] font-semibold'>IOT based project. </span>
                        The Anti-Sleep System for Drivers is a safety-focused fatigue detection solution designed to prevent accidents caused by drowsy driving. Using real-time eye-blink monitoring and intelligent alert mechanisms, the system identifies early signs of driver fatigue and instantly triggers alarms to keep the driver awake and attentive. With its compatibility across various vehicles and low-cost implementation, the system offers an effective and practical approach to road safety enhancement.
                    </p>


                    🔧 <span className='text-[#08fb1d] font-semibold'>Tech Stack: </span> Arduino UNO   IR eye blink sensor    Buzzer alarm module    Power supply module   Arduino IDE   Embedded C/C++<br />
                    <p> <br />
                        🧠 <span className='text-[#08fb1d] font-semibold'>Key Features:</span><br />
                        🔹 Real-Time Drowsiness Detection – Monitors eye blinks and patterns to identify fatigue instantly. <br />
                        🔹 Instant Audio Alerts – Activates a buzzer to wake the driver at the first sign of drowsiness. <br />
                        🔹 High Accuracy Sensors – Uses eye-blink sensor/IR sensor for reliable detection. <br />
                        🔹 Vehicle Compatibility – Easily integrates into cars, buses, trucks, and other vehicles. <br />
                        🔹 Lightweight & Affordable – Designed with minimal components for low cost and high efficiency. <br />
                        🔹 Continuous Monitoring – Works throughout the journey without requiring user intervention <br />
                    </p>

                    <p>
                        <span className='text-[#08fb1d] font-semibold'>🚀 Future Enhancements</span>
                        🚀 AI-Based Face & Eye Tracking – Integrating computer vision for advanced and more accurate detection. <br />
                        🚀 Mobile App Connectivity – Alerts, driving reports, and fatigue analysis sent to a companion smartphone app. <b></b>
                        🚀 GPS-Based Emergency Alerts – If severe fatigue is detected, notify family or fleet owners with location sharing. <br />
                        🚀 Smart Seat Vibration System – Vibrational feedback to wake up the driver instantly. <br />
                        🚀 Integration With Vehicle Systems – Automatic light flashing or slow-down mechanism in case of emergency. <br />
                        🚀 Cloud Analytics – Fatigue pattern tracking for long-distance or commercial drivers. br

                    </p>

                    <p>

                        🌐 <a href='https://www.linkedin.com/posts/activity-7266776770631098369-5HiR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEN_xjwBRPCqCU_sOj2R2fU18rVyAZqdxTo' target='_blank' rel='noopener noreferrer' className='text-[#08fb1d] underline'>
                            Linkedin Post
                        </a>
                    </p>
                </div>

                {/* Right Section - Project Image */}
                <div className='space-y-10'>
                    <img
                        className='w-full max-w-8xl rounded-lg transition-transform duration-700 hover:scale-105'
                        src='/sleep1.jpg'
                        alt='Anti-Sleep System Chart'
                        style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />
                    <img
                        className='w-full max-w-md rounded-lg transition-transform duration-700 hover:scale-105'
                        src='/sleep2.jpg'
                        alt='Anti-Sleep System Project'
                        style={{ boxShadow: '0 10px 10px -10px #08fb1d' }}
                    />

                </div>
            </div>
        </div>
    );
}

export default AntiSleep;
