"use client";

import { useState } from 'react';
import Link from 'next/link';
import ArrowUpLeft from '../assets/arrowUpLeft';
import { usePathname, useRouter } from "next/navigation";

export default function Navigation () {
    const [open, setOpen] = useState(false);

    // Track the path of the current window
    const pathname = usePathname();
    const router = useRouter();

    const segments = pathname.split("/").filter(Boolean);

    // Only show back button if at least 1 segment (e.g. /projects)
    const showBack = segments.length >= 1;

    const handleBack = () => {
        const newPath = "/" + segments.slice(0, -1).join("/");
        router.push(newPath || "/");
    };

    return (
        <>
            <div className="fixed inset-0 h-20 z-99 bg-transparent w-full p-24">

                {/* Main Menu button */}
                <div className="flex">
                    <button 
                        className={`absolute top-12 z-50 rounded-3xl py-2 px-4 transition-colors hover:cursor-pointer border-2 border-[#2D2D2D]
                            ${open ? 
                                "bg-[#2D2D2D] text-white" : "bg-[#F9F8F4]"
                            }
                        `}
                        onClick={() => setOpen(!open)}
                    >
                        MENU
                    </button>
                </div>

                {/* Show back button if conditions are met */}
                {showBack &&
                    <div onClick={handleBack} className="rounded-full bg-black w-8 h-8 m-4 hover:cursor-pointer flex justify-center items-center">
                        <ArrowUpLeft className="text-white" />
                    </div>
                }
            </div>

            {/* Menu items - hidden originally */}
            <div
                className={`fixed inset-0 flex items-center w-full h-screen bg-[#F9F8F4] z-98 p-24 transition-all duration-500 -translate-y-full
                ${open 
                    ? 'translate-y-0 pointer-events-auto' 
                    : '-translate-y-full pointer-events-none'
                }`}
            >
                {/* Main links - style matches homepage title */}
                <nav className="flex flex-col font-bold text-5xl md:text-8xl tracking-[-2px] leading-[60px] md:leading-[110px] nav-link">
                    <li className="list-none"><Link href="/about" onClick={() => setOpen(false)}>About</Link><span className="pl-2">,</span></li>
                    <li className="list-none"><Link href="/projects" onClick={() => setOpen(false)}>Projects</Link><span className="pl-2">,</span></li>
                    <li className="list-none"><Link href="/interests" onClick={() => setOpen(false)}>Interests</Link><span className="pl-2">,</span></li>
                    <li className="list-none"><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link><span className="pl-2">.</span></li>
                </nav>
            </div>
        </>
    );
}