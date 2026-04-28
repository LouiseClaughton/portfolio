import { client } from "@/lib/contentful";
import { notFound } from "next/navigation";
import RenderBlock from "@/lib/renderBlock";
import ArrowDown from "../assets/arrowDown";
import Projects from "../components/projects";

export default async function DynamicPage({ params }) {
    const { slug } = await params;

    const res = await client.getEntries({
        content_type: "page",
        "fields.slug": slug,
        include: 2,
    });

    const page = res.items[0];

    if (!page) return notFound();

    return (
        <main>
            <div className="h-screen w-screen flex justify-center items-center relative">
                {/* Main title, split into spans for the hover effect */}
                <h1 className="flex flex-col font-bold text-5xl md:text-8xl tracking-[-2px] md:tracking-[-6px] leading-[80px] md:leading-[110px] text-center items-center hover:cursor-pointer">{page?.fields?.title}</h1>
                {page?.fields?.relativeLink &&
                    <a href={`#${page?.fields?.relativeLink}`} className="absolute bottom-4 border border-black rounded-full p-2 hover:cursor-pointer">
                        <ArrowDown />
                    </a>
                }
            </div>

            {page?.fields?.content?.map((block) => (
                <RenderBlock key={block.sys.id} block={block} />
            ))}

            {page?.fields?.isProjectsPage &&
                <Projects projects={page?.fields?.featuredProjects} />
            }
        </main>
    );
}