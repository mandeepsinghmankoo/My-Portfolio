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
        <header className="fixed top-2 sm:top-5 left-1/2 -translate-x-1/2 z-10 w-[95%] sm:w-[90%] rounded-2xl sm:rounded-4xl bg-green-100 overflow-hidden shadow-2xl border border-2 shadow-emerald-200 shadow-md border-white font-serif">
            <div className="relative rounded-xl sm:rounded-3xl bg-black/90 gap-2 sm:gap-4 lg:gap-8 xl:gap-15 p-2 sm:p-4 lg:p-5 pt-3 sm:pt-6 lg:pt-8 flex flex-wrap sm:flex-nowrap justify-center items-center text-white font-semibold text-xs sm:text-lg lg:text-xl tracking-wide">
                
                {/* Mobile: Show only icons, Desktop: Show icons + text */}
                <div onClick={() => scrollToSection('home')} className="Home flex gap-1 sm:gap-2 lg:gap-3 animate-bounce cursor-pointer hover:drop-shadow-[0_0_30px_#22c55e] p-1 sm:p-0">
                    <span>
                       <Home className="w-5 h-5 sm:w-7 sm:h-7 lg:w-10 lg:h-10 text-green-700 animate-bounce"/>
                    </span>
                    <span className="hidden sm:inline text-sm sm:text-lg lg:text-2xl">Home</span>
                </div>

                <div onClick={() => scrollToSection('about')} className="Album flex gap-1 sm:gap-2 lg:gap-3 animate-bounce cursor-pointer hover:drop-shadow-[0_0_30px_#22c55e] p-1 sm:p-0">
                    <span>
                       <LucideAlbum className="w-5 h-5 sm:w-7 sm:h-7 lg:w-10 lg:h-10 text-green-700 animate-bounce"/>
                    </span>
                    <span className="hidden sm:inline text-sm sm:text-lg lg:text-2xl">About</span>
                </div>

                <div onClick={() => scrollToSection('projects')} className="Projects flex gap-1 sm:gap-2 lg:gap-3 animate-bounce cursor-pointer hover:drop-shadow-[0_0_30px_#22c55e] p-1 sm:p-0">
                    <span>
                       <Projector className="w-5 h-5 sm:w-7 sm:h-7 lg:w-10 lg:h-10 text-green-700 animate-bounce"/>
                    </span>
                    <span className="hidden sm:inline text-sm sm:text-lg lg:text-2xl">Projects</span>
                </div>

                <div onClick={() => scrollToSection('skills')} className="skills flex gap-1 sm:gap-2 lg:gap-3 animate-bounce cursor-pointer hover:drop-shadow-[0_0_30px_#22c55e] p-1 sm:p-0">
                    <span>
                       <SkullIcon className="w-5 h-5 sm:w-7 sm:h-7 lg:w-10 lg:h-10 text-green-700 animate-bounce"/>
                    </span>
                    <span className="hidden sm:inline text-sm sm:text-lg lg:text-2xl">Skills</span>
                </div>
                
                <div onClick={() => scrollToSection('achievements')} className="achievements flex gap-1 sm:gap-2 lg:gap-3 animate-bounce cursor-pointer hover:drop-shadow-[0_0_30px_#22c55e] p-1 sm:p-0">
                    <span>
                       <Trophy className="w-5 h-5 sm:w-7 sm:h-7 lg:w-10 lg:h-10 text-green-700 animate-bounce"/>
                    </span>
                    <span className="hidden sm:inline text-sm sm:text-lg lg:text-2xl">Achievements</span>
                </div>

                <div onClick={() => scrollToSection('contact')} className="contact flex gap-1 sm:gap-2 lg:gap-3 animate-bounce cursor-pointer hover:drop-shadow-[0_0_30px_#22c55e] p-1 sm:p-0">
                    <span>
                       <Contact className="w-5 h-5 sm:w-7 sm:h-7 lg:w-10 lg:h-10 text-green-700 animate-bounce"/>
                    </span>
                    <span className="hidden sm:inline text-sm sm:text-lg lg:text-2xl">Contact</span>
                </div>
            </div>
        </header>
    );
}
