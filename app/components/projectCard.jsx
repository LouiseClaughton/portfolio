"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ title, href, image, role, date }) {
    const year = new Date(date).getFullYear();

    return (
        <Link className="h-full w-full block" href={href ? href : ''}>
            <div className="h-full w-full flex flex-col min-h-[20rem]">
                {image ? (
                    <div className="w-full h-80 mb-4 relative overflow-hidden">

                        {/* Image */}
                        {image &&
                            <Image
                                src={`https:${image.fields.file.url}`}
                                alt={title}
                                width={image.fields.file.details.image.width}
                                height={image.fields.file.details.image.height}
                                className="w-full rounded-2xl object-cover hover:cursor-pointer"
                            /> 
                        }
                    </div>
                ) : (
                    <div className="w-full h-40 mb-4 bg-gray-400"></div>
                )}
                <div>
                    <h2 className="font-bold text-xl">{title}</h2>
                    {role && year && 
                        <span className="caption text-lg">{role} / {year}</span>
                    }
                </div>
            </div>
        </Link>
    );
}