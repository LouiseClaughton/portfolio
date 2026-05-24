import ProjectCard from "./projectCard";

export default function FeaturedProjects({ projects }) {
    return (
        <div className="flex justify-center gap-6 p-24">
            {projects.map((project, index) => {
                const styles = [
                    "-rotate-5 relative left-8",
                    "rotate-5 z-1",
                    "-rotate-5 relative right-8"
                ];

                return (
                    <div
                        key={project.sys.id}
                        className={`${styles[index]} w-full`}
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