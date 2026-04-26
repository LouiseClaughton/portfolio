"use client";

import { useState } from "react";

export default function Card({ type, href, image, role, date }) {
    const [loaded, setLoaded] = useState(false);

    const year = new Date(date).getFullYear();

    return (
            <div className="h-full w-full flex flex-col min-h-[20rem]">
                {type == 'Quote' && (
                    <div>
                        <span className="font-bold text-xl">"</span>
                        <span className="text-gray-800">{role} / {year}</span>
                    </div>
                )}
            </div>
    );
}