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
        <div className="fixed inset-0 h-20 z-99 bg-transparent w-screen">

            {/* Main Menu button */}
            <div className="flex justify-center">
                <button 
                    className={`absolute top-4 z-50 rounded-3xl py-2 px-4 transition-colors hover:cursor-pointer
                        ${open ? 
                            "bg-[#54B2F8] text-white hover:bg-[#FFFFFF] hover:text-black" : "bg-[#BFE1FE] hover:bg-[#FFFFFF]"
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
            className={`fixed inset-0 flex items-center w-screen h-screen justify-center bg-[#BFE1FE] z-98
            transition-all duration-500 -translate-y-full
            ${open 
                ? 'translate-y-0 pointer-events-auto' 
                : '-translate-y-full pointer-events-none'
            }`}
        >
            {/* Main links - style matches homepage title */}
            <div className="flex flex-col font-bold text-5xl md:text-8xl tracking-[-2px] md:tracking-[-6px] leading-[60px] md:leading-[110px] items-center">
                <div><Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#0092FF] transition-colors">About</Link><span className="pl-2">,</span></div>
                <div><Link href="/projects" onClick={() => setOpen(false)} className="hover:text-white transition-colors">Projects</Link><span className="pl-2">,</span></div>
                <div><Link href="/interests" onClick={() => setOpen(false)} className="hover:text-[#0092FF] transition-colors">Interests</Link><span className="pl-2">,</span></div>
                <div><Link href="/contact" onClick={() => setOpen(false)} className="hover:text-white transition-colors">Contact</Link><span className="pl-2">.</span></div>
            </div>
        </div>
    </>
    );
}