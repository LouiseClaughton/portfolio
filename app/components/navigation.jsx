"use client";

import { useState } from 'react';
import Link from 'next/link';
import ArrowUpLeft from '../assets/arrowUpLeft';
import { usePathname, useRouter } from "next/navigation";

export default function Navigation () {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="fixed inset-0 h-20 z-101 bg-transparent w-full px-24 py-12">

                {/* Menu button */}
                <div className="flex justify-center items-center lg:justify-start lg:items-start">
                    <button 
                        className={`z-50 rounded-3xl py-2 px-4 transition-colors hover:cursor-pointer border-2 border-[#2D2D2D]
                            ${open ? 
                                "bg-[#2D2D2D] text-white" : "bg-[#F9F8F4]"
                            }
                            transition-colors
                        `}
                        onClick={() => setOpen(!open)}
                    >
                        MENU
                    </button>
                </div>
            </div>

            {/* Menu items - hidden originally */}
            <div
                className={`fixed inset-0 flex items-center justify-center lg:justify-start w-full h-screen bg-[#F9F8F4] z-100 px-12 lg:px-24 py-24 md:py-32 lg:py-42 transition-all duration-500 -translate-y-full
                ${open 
                    ? 'translate-y-0 pointer-events-auto' 
                    : '-translate-y-full pointer-events-none'
                }`}
            >
                {/* Main links - style matches homepage title */}
                <nav className="flex flex-col font-bold text-5xl md:text-6xl tracking-[-2px] leading-[60px] md:leading-[80px] nav-link text-center lg:text-left">
                    <li className="list-none"><Link href="/" onClick={() => setOpen(false)} className="hover:text-[#FF71D0] transition-colors">Home</Link><span className="pl-2">,</span></li>
                    <li className="list-none"><Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#60c1ff] transition-colors">About</Link><span className="pl-2">,</span></li>
                    <li className="list-none"><Link href="/projects" onClick={() => setOpen(false)} className="hover:text-[#FF71D0] transition-colors">Projects</Link><span className="pl-2">,</span></li>
                    <li className="list-none"><Link href="/interests" onClick={() => setOpen(false)} className="hover:text-[#60c1ff] transition-colors">Interests</Link><span className="pl-2">,</span></li>
                    <li className="list-none"><Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#FF71D0] transition-colors">Contact</Link><span className="pl-2">.</span></li>
                </nav>
            </div>
        </>
    );
}