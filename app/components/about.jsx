import Projects from "./projects";

export default function About({ id, page }) {
    return (
        <div className="w-screen flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 px-12 md:px-24 py-24" id={id}>
            {/* Left col, sticky */}
            <div className="md:sticky top-12 h-fit">
                <h2 className="font-bold text-3xl md:text-5xl tracking-[-2px] leading-[80px] md:leading-[110px]">{page?.fields?.stickyContentTitle}</h2>
                <div>{page?.fields?.stickyContent}</div>
            </div>

            {/* Right col, projects */}
            <div>
                <Projects grid={false} projects={page?.fields?.featuredProjects} />
            </div>
        </div>
    )
}