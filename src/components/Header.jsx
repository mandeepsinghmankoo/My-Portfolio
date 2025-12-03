import { Album, Home } from "lucide-react";    
import { LucideAlbum } from "lucide-react";
import { Projector } from "lucide-react";
import { SkullIcon } from "lucide-react";
import { Contact } from "lucide-react";
import { Trophy } from 'lucide-react';

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 120; // Approximate header height
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};

export default function Header() {
    return (
        <header className="fixed top-5 left-1/2 -translate-x-1/2 z-10 w-[90%] rounded-4xl bg-green-100 overflow-hidden shadow-2xl border border-2 shadow-emerald-200 shadow-md  border-white font-serif">

            <div className="relative rounded-3xl bg-black/90  gap-15 p-5 pt-8 flex justify-center items-center text-white font-semibold text-xl tracking-wide ">
                <div onClick={() => scrollToSection('home')} className="Home flex gap-3 animate-bounce cursor-pointer hover:drop-shadow-[0_0_30px_#22c55e]">
                    <span>
                       <Home className="w-10 h-10 text-green-700 animate-bounce  "/>
                    </span>
                    <span className="text-2xl">Home</span>
                </div>

                <div onClick={() => scrollToSection('about')} className="Album flex gap-3 animate-bounce cursor-pointer hover:drop-shadow-[0_0_30px_#22c55e]">
                    <span>
                       <LucideAlbum className="w-10 h-10 text-green-700 animate-bounce  "/>
                    </span>
                    <span className="text-2xl">About</span>
                </div>

                <div onClick={() => scrollToSection('projects')} className="Projects flex gap-3 animate-bounce cursor-pointer hover:drop-shadow-[0_0_30px_#22c55e]">
                    <span>
                       <Projector className="w-10 h-10 text-green-700 animate-bounce  "/>
                    </span>
                    <span className="text-2xl">Projects</span>
                </div>

                <div onClick={() => scrollToSection('skills')} className="skills flex gap-3 animate-bounce cursor-pointer hover:drop-shadow-[0_0_30px_#22c55e]">
                    <span>
                       <SkullIcon className="w-10 h-10 text-green-700 animate-bounce  "/>
                    </span>
                    <span className="text-2xl">Skills</span>
                </div>
                
                <div onClick={() => scrollToSection('achievements')} className="achievements flex gap-3 animate-bounce cursor-pointer hover:drop-shadow-[0_0_30px_#22c55e]">
                    <span>
                       <Trophy className="w-10 h-10 text-green-700 animate-bounce  "/>
                    </span>
                    <span className="text-2xl">Achievements</span>
                </div>

                <div onClick={() => scrollToSection('contact')} className="contact flex gap-3 animate-bounce cursor-pointer hover:drop-shadow-[0_0_30px_#22c55e]">
                    <span>
                       <Contact className="w-10 h-10 text-green-700 animate-bounce  "/>
                    </span>
                    <span className="text-2xl">Contact</span>
                </div>

            </div>


        </header>
    );
}
