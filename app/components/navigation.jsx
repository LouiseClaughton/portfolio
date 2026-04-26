"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation () {
    const [open, setOpen] = useState(false);

    return (
        <>
        <div className="fixed inset-0 flex justify-center h-20 z-99">
            <button 
                className={`absolute top-4 z-50 rounded-3xl border border-black py-2 px-4 transition-colors hover:cursor-pointer
                    ${open ? 'bg-[#E6E0DA] hover:bg-[#F0F0F0]' : 'bg-[#F0F0F0] hover:bg-[#E6E0DA]'}
                `}
                onClick={() => setOpen(!open)}
            >
                MENU
            </button>
        </div>

        <div
            className={`fixed inset-0 flex items-center justify-center bg-[#E6E0DA] z-98
            transition-all duration-500 -translate-y-full
            ${open 
                ? 'translate-y-0 pointer-events-auto' 
                : '-translate-y-full pointer-events-none'
            }`}
        >
            <div className="flex flex-col font-bold text-8xl tracking-[-6px] leading-[110px] items-center">
                <div><Link href="/about" className="hover:text-purple-500 transition-colors">About</Link><span className="pl-2">,</span></div>
                <div><Link href="/projects" className="hover:text-pink-400 transition-colors">Projects</Link><span className="pl-2">,</span></div>
                <div><Link href="/interests" className="hover:text-purple-500 transition-colors">Interests</Link><span className="pl-2">,</span></div>
                <div><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link><span className="pl-2">.</span></div>
            </div>
        </div>
    </>
    );
}