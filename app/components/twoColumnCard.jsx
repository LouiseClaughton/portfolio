"use client";

import { useState } from "react";
import Projects from "./projects";
import Image from "next/image";

export default function TwoColumnCard({ block, id }) {
    const [loaded, setLoaded] = useState(false);
    const fields = block?.fields;

    const ImageContent = (
        <div>
            {fields?.contentType === "Featured Projects" ? (
                <Projects grid={false} projects={fields?.featuredProjects} />
            ) : (
                <div className="relative w-full h-[400px] md:h-[700px] overflow-hidden rounded-2xl">
                    <Image
                        src={`https:${fields?.image?.fields?.file?.url}`}
                        alt={fields?.title || ""}
                        fill
                        onLoad={() => setLoaded(true)}
                        className={`object-cover object-top transition-opacity duration-500 ${
                        loaded ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>
            )}
        </div>
    );

    const TextContent = (
        <div className={`${fields?.style === "Sticky" ? "md:sticky top-12" : ""} h-fit`}>
            <h2 className="font-bold text-3xl md:text-4xl tracking-[-2px] leading-[80px] md:leading-[110px]">
                {fields?.columnTitle}
            </h2>

            <div className="whitespace-pre-line">{fields?.columnContent}</div>
        </div>
    );

    return (
        <div
            id={id}
            className="w-screen flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 px-12 md:px-24 py-12 md:py-24"
        >
            <div
                className={`${
                fields?.columnLayout === "Text Left"
                    ? "md:order-1"
                    : "md:order-2"
                } order-1`}
            >
                {TextContent}
            </div>

            <div
                className={`${
                fields?.columnLayout === "Text Left"
                    ? "md:order-2"
                    : "md:order-1"
                } order-2`}
            >
                {ImageContent}
            </div>
        </div>
    );
}