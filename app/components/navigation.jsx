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
            <div className="flex flex-col font-bold text-8xl tracking-[-6px] leading-[110px] text-center">
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/interests">Interests</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    </>
    );
}