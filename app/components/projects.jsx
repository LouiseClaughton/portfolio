"use client";

import React from "react";

import { getProjectData } from "@/lib/queries/projects";
import { client } from "@/lib/graphql";

import Card from "./card"

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
                <div
                    key={project.slug}
                    className={index % 2 === 0 ? "translate-y-0" : "translate-y-16"}
                >
                    <Card
                        title={project.title}
                        slug={project.slug}
                        date={project.date}
                        image={project.heroImage?.url}
                        role={project.role}
                    />
                </div>
            ))}
        </div>
    )
}