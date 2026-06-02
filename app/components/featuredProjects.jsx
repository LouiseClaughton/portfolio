import ProjectCard from "./projectCard";

export default function FeaturedProjects({ projects }) {
    return (
        <div className="flex justify-center gap-12 flex-col lg:flex-row">
            {projects.map((project, index) => {
                return (
                    <div
                        key={project.sys.id}
                        className="w-full"
                    >
                        <ProjectCard
                            title={project.fields.title}
                            slug={project.fields.slug}
                            date={project.fields.date}
                            image={`https:${project.fields.heroImage?.fields?.file?.url}`}
                            role={project.fields.role}
                            href={`/projects/${project.fields.slug}`}
                        />
                    </div>
                );
            })}
        </div>
    );
}