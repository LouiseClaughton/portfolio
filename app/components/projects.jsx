"use client";

import React from "react";
import ProjectCard from "./projectCard";
import { fadeInView } from "@/lib/scrollFade";

function ProjectItem({ project, index, grid }) {
    const [ref, isVisible] = fadeInView({
        threshold: 0.15,
    });

    const columns = 3;
    const column = index % columns;

    return (
        <div
            ref={ref}
            className={`
                ${grid ?
                    `md:transition-all md:duration-700 md:ease-out
                    ${isVisible ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-10"}`
                : ''
                }
            `}
            style={{
                transitionDelay: `${column * 250}ms`,
            }}
        >
            <ProjectCard
                title={project.fields.title}
                slug={project.fields.slug}
                date={project.fields.date}
                image={project.fields.heroImage}
                role={project.fields.role}
                href={`/projects/${project.fields.slug}`}
            />
        </div>
    );
}

export default function Projects({ grid = true, projects = [] }) {
    return (
        <div className={`py-12 ${grid ? 'flex flex-col md:grid md:grid-cols-3 gap-12 px-12 md:px-24 pb-56' : 'flex flex-col gap-12 md:gap-20'}`}>
            {projects.map((project, index) => (
                <ProjectItem
                    key={project.sys.id}
                    project={project}
                    index={index}
                    grid={grid}
                />
            ))}
        </div>
    );
}