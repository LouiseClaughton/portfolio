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
            <div className="h-screen w-screen flex justify-center items-center relative bg-gradient-to-b from-[#54B2F8] to-[#A7D2FD]">
                <div className="cloud w-[350px] h-[120px] bg-[#f2f9fe] rounded-full absolute mt-[120px] mx-auto mb-[20px] z-1 opacity-60 left-[-6%] hidden md:block"></div>
                <div className="cloud w-[350px] h-[120px] bg-[#f2f9fe] rounded-full absolute mt-[120px] mx-auto mb-[20px] z-1 opacity-60 right-[-30%] md:right-0 top-[-5%]"></div>
                <div className="cloud w-[350px] h-[120px] bg-[#f2f9fe] rounded-full absolute mt-[120px] mx-auto mb-[20px] z-1 opacity-60 left-[-10%] bottom-[-5%] md:right-[5%]"></div>
                {/* Main title */}
                <h1 className="flex flex-col font-bold text-5xl md:text-8xl tracking-[-2px] md:tracking-[-6px] leading-[80px] md:leading-[110px] text-center items-center hover:cursor-pointer">{page?.fields?.title}</h1>
                {page?.fields?.relativeLink &&
                    <a href={`#${page?.fields?.relativeLink}`} className="absolute bottom-4 border border-black rounded-full p-2 hover:cursor-pointer">
                        <ArrowDown />
                    </a>
                }
            </div>

            <div className="bg-gradient-to-b from-[#A7D2FD] to-[#FFFFFF]">
                {page?.fields?.content?.map((block) => (
                    <RenderBlock key={block.sys.id} block={block} />
                ))}

                {page?.fields?.isProjectsPage &&
                    <Projects projects={page?.fields?.featuredProjects} />
                }
            </div>
        </main>
    );
}