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
        <div>
            {projects.map(project => (
                <Card title={project.title} slug={project.slug} date={project.date} />
            ))}
        </div>
    )
}