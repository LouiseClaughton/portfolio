"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ title, href, image, role, date }) {
    const year = new Date(date).getFullYear();

    const imageUrl = image?.fields?.file?.url;
    const imageWidth = image?.fields?.file?.details?.image?.width;
    const imageHeight = image?.fields?.file?.details?.image?.height;

    return (
        <Link className="h-full w-full block" href={href ? href : ''}>
            <div className="h-full w-full flex flex-col lg:min-h-[20rem]">
                {image ? (
                    <div className="w-full mb-4 relative overflow-hidden">

                        {/* Image */}
                        {imageUrl && imageWidth && imageHeight ? (
                            <Image
                                src={`https:${imageUrl}`}
                                alt={title || "Project image"}
                                width={imageWidth}
                                height={imageHeight}
                                className="w-full rounded-2xl object-cover hover:cursor-pointer"
                            />
                        ) : (
                            <Image
                                src={image}
                                alt={title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-opacity duration-500 object-top rounded-xl"
                            />
                        )}
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