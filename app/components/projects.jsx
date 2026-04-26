"use client";

import React from "react";
import { getProjectData } from "@/lib/queries/projects";
import { client } from "@/lib/graphql";
import ProjectCard from "./projectCard";
import { fadeInView } from "@/lib/scrollFade";

function ProjectItem({ project, index }) {
    const [ref, isVisible] = fadeInView({
        threshold: 0.15,
    });

    return (
        <div
            ref={ref}
            className={`
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                ${index % 2 === 0 ? "" : "translate-y-16"}
            `}
        >
            <ProjectCard
                title={project.title}
                slug={project.slug}
                date={project.date}
                image={project.heroImage?.url}
                role={project.role}
                href={`/projects/${project.slug}`}
            />
        </div>
    );
}

export default function Projects() {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        async function fetchProjects() {
            const data = await getProjectData(client);
            setProjects(data);
        }
        fetchProjects();
    }, []);

    return (
        <div className="py-12 px-24 grid grid-cols-2 gap-28">
            {projects.map((project, index) => (
                <ProjectItem
                    key={project.slug}
                    project={project}
                    index={index}
                />
            ))}
        </div>
    );
}