"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ title, href, image, role, date }) {
    const [loaded, setLoaded] = useState(false);

    const year = new Date(date).getFullYear();

    return (
        <Link className="h-full w-full block" href={href ? href : ''}>
            <div className="h-full w-full flex flex-col min-h-[20rem]">
                {image ? (
                    <div className="w-full h-80 mb-4 relative bg-gray-800 overflow-hidden hover:-translate-y-2 transition-all">
                        
                        {/* Skeleton */}
                        {!loaded && (
                            <div className="absolute inset-0 animate-pulse bg-gray-700" />
                        )}

                        {/* Image */}
                        <Image
                            src={image}
                            alt={title}
                            fill
                            onLoad={() => setLoaded(true)}
                            className={`object-cover transition-opacity duration-500 object-top rounded-xl ${
                                loaded ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    </div>
                ) : (
                    <div className="w-full h-40 mb-4 bg-gray-400"></div>
                )}
                <div>
                    <h2 className="font-bold text-xl">{title}</h2>
                    <span>{role} / {year}</span>
                </div>
            </div>
        </Link>
    );
}