import React from 'react'
import { useNavigate } from 'react-router-dom'
import CircularGallery from './3d/CircularGallery'

// Sample projects data
const portfolioProjects = [
  {
    image: 'https://picsum.photos/seed/portfolio1/800/600',
    text: 'HERShield',
    description: 'AI-Driven Women Safety System and Real-Time Threat Detection. An AI-powered system designed to enhance women’s safety in urban areas by combining real-time monitoring, advanced analytics, mobile features and proactive threat detection.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Python'],
    liveLink: 'https://github.com/mandeepsinghmankoo/Hershield-25',
    githubLink: 'https://github.com/mandeepsinghmankoo/Hershield-25'
  },
  {
    image: 'https://picsum.photos/seed/portfolio2/800/600',
    text: 'Mega Blog',
    description: 'A full-stack blog web application built with React and Appwrite, featuring user authentication, post creation, editing, and deletion. The app allows authors to manage their own posts securely while providing a responsive and clean UI built with Tailwind CSS. It uses React Router for dynamic navigation and implements HTML content parsing for rendering formatted posts. Designed to simulate a real-world blogging platform with scalable and maintainable architecture.',
    technologies: ['React.js', 'Appwrite', 'Tailwind CSS'],
    liveLink: 'https://12-mega-blog-blond.vercel.app/',
    githubLink: 'https://github.com/mandeepsinghmankoo/12MegaBlog'
  },
  {
    image: 'https://picsum.photos/seed/portfolio3/800/600',
    text: '<PassOP/>',
    description: 'A responsive password manager built with React that allows users to securely add, edit, and delete saved passwords, all stored locally using browser localStorage. It provides a smooth and intuitive UI that adapts to all screen sizes. This project helped me strengthen my understanding of React state management, hooks, and handling client-side data persistence efficiently.',
    technologies: ['React.js', 'API Integration', 'Netlify'],
    liveLink: 'https://passmngop.netlify.app/',
    githubLink: 'https://github.com/mandeepsinghmankoo/-PassOP-Password_Manager'
  },
  {
    image: 'https://picsum.photos/seed/portfolio4/800/600',
    text: 'Anti-Sleep-System',
    description: 'The Anti-Sleep System for Drivers is an AI-based safety solution designed to prevent accidents caused by driver fatigue. It continuously monitors the driver’s eye movements to detect signs of drowsiness in real time. When fatigue is detected, the system immediately triggers an alarm to alert the driver, and if there’s no response, it activates an auto-braking mechanism to bring the vehicle to a safe stop. This project focuses on enhancing road safety through intelligent monitoring and proactive intervention.',
    technologies: ['Python', 'Arduino IDE', 'Arduino UNO', 'IR Sensor'],
    liveLink: 'https://www.linkedin.com/posts/activity-7266776770631098369-5HiR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEN_xjwBRPCqCU_sOj2R2fU18rVyAZqdxTo',
    githubLink: 'https://www.linkedin.com/posts/activity-7266776770631098369-5HiR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEN_xjwBRPCqCU_sOj2R2fU18rVyAZqdxTo'
  },
  {
    image: 'https://picsum.photos/seed/portfolio6/800/600',
    text: 'Portfolio Website',
    description: 'Responsive portfolio website with 3D interactive elements',
    technologies: ['React.js', 'Lenis', 'Framer Motion', 'React Bits'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/username/project6'
  },
  {
    image: 'https://picsum.photos/seed/portfolio6/800/600',
    text: 'SNAPS',
    description: 'Smart Navigation Automated Parking System (SNAPS) is an innovative solution designed to simplify the parking experience in urban areas. By utilizing advanced sensors and AI technology, SNAPS guides drivers to available parking spots in real-time, reducing the time spent searching for parking. The system also offers automated parking assistance, allowing vehicles to park themselves safely and efficiently. SNAPS aims to alleviate traffic congestion, enhance urban mobility, and provide a seamless parking experience for drivers.',
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Python','pytesseract','OpenCV'],
    liveLink: 'https://youtu.be/kaT_ax_ES44',
    githubLink: 'https://github.com/mandeepsinghmankoo/SNAPS'
  }
]

function Projects() {
  const navigate = useNavigate();

  return (
    <div id="projects" className='my-10 mx-4 md:mx-10 p-4 md:p-5 border-t-4 border-[#08fb1d]'>
      <h1 className='text-4xl md:text-6xl mb-6 md:mb-10 text-[#08fb1d] tracking-wider text-center md:text-left'>PROJECTS</h1>
      <div className='w-full'>
        <div style={{ 
          height: '50vh', 
          minHeight: '500px',
          maxHeight: '800px',
          position: 'relative',
          marginTop: '0'
        }}>
          <CircularGallery 
            items={portfolioProjects}
            bend={2.5} 
            textColor="#ffffff" 
            borderRadius={0.03} 
            scrollEase={0.02}
            onProjectClick={(projectName) => navigate(`/${projectName}`)}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects