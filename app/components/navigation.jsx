"use client";

import { useState } from 'react';
import Link from 'next/link';
import ArrowUpLeft from '../assets/arrowUpLeft';
import { usePathname, useRouter } from "next/navigation";

export default function Navigation () {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="fixed inset-0 h-20 z-99 bg-transparent w-full p-24">

                {/* Menu button */}
                <div className="flex justify-between">
                    <button 
                        className={`absolute top-12 left-24 z-50 rounded-3xl py-2 px-4 transition-colors hover:cursor-pointer border-2 border-[#2D2D2D]
                            ${open ? 
                                "bg-[#2D2D2D] text-white" : "bg-[#F9F8F4]"
                            }
                            hover:bg-[#744F89] hover:text-white transition-colors
                        `}
                        onClick={() => setOpen(!open)}
                    >
                        MENU
                    </button>
                </div>
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
                    <li className="list-none"><Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#744F89] transition-colors">About</Link><span className="pl-2">,</span></li>
                    <li className="list-none"><Link href="/projects" onClick={() => setOpen(false)} className="hover:text-[#67865D] transition-colors">Projects</Link><span className="pl-2">,</span></li>
                    <li className="list-none"><Link href="/interests" onClick={() => setOpen(false)} className="hover:text-[#744F89] transition-colors">Interests</Link><span className="pl-2">,</span></li>
                    <li className="list-none"><Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#67865D] transition-colors">Contact</Link><span className="pl-2">.</span></li>
                </nav>
            </div>
        </>
    );
}