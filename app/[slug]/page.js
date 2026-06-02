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
            <div className="h-screen w-screen flex items-center relative bg-[#1E1E1E] text-white px-12 lg:px-24 py-24 md:py-32 lg:py-42">
                {/* Main title */}
                <h1 className="flex flex-col font-bold text-5xl md:text-6xl leading-[80px] md:leading-[110px] hover:cursor-pointer">{page?.fields?.title}</h1>
                {page?.fields?.relativeLink &&
                    <a href={`#${page?.fields?.relativeLink}`} className="absolute bottom-4 border border-black rounded-full p-2 hover:cursor-pointer">
                        <ArrowDown />
                    </a>
                }
                <svg
                    viewBox="0 0 100 24"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute bottom-0 left-0 h-16 w-full rotate-180 scale-x-[-1]"
                    >
                    <rect width="100%" height="100%" fill="#F9F8F4"/>
                    <path
                        fill="#1e1e1e"
                        d="
                        M0 12
                        C 25 0, 40 0, 60 12
                        S 100 12, 100 12
                        V24
                        H0
                        Z
                        "
                    />
                </svg>
            </div>

            <div>
                {page?.fields?.content?.map((block, index) => {
                    const isEven = index % 2 === 0;

                    return (
                    <div key={block.sys.id} className="relative">
                        {/* Section */}
                        <div className={`${isEven ? "bg-[#F9F8F4] text-black" : "bg-[#1E1E1E] text-white"} px-12 lg:p-24`}>
                            <RenderBlock block={block} isEven={isEven} />
                        </div>

                        {index < page.fields.content.length - 1 && (
                        <div className="w-full">
                            {isEven ?
                                <div
                                    className="
                                        pointer-events-none
                                        absolute bottom-0 left-0
                                        h-6 w-full
                                        bg-[url('/waves/short-wave.svg')]
                                        bg-repeat-x
                                        bg-bottom
                                    "
                                /> :
                                <svg
                                    viewBox="0 0 100 24"
                                    preserveAspectRatio="none"
                                    className="pointer-events-none absolute bottom-0 left-0 h-16 w-full rotate-180 scale-x-[-1]"
                                    >
                                    <rect width="100%" height="100%" fill="#F9F8F4"/>
                                    <path
                                        fill="#1E1E1E"
                                        d="
                                        M0 12
                                        C 25 0, 40 0, 60 12
                                        S 100 12, 100 12
                                        V24
                                        H0
                                        Z
                                        "
                                    />
                                </svg>
                            }
                        </div>
                        )}
                    </div>
                    );
                })}

                {page?.fields?.isProjectsPage && (
                    <div className="bg-[#F9F8F4] text-black">
                        <Projects projects={page?.fields?.featuredProjects} />
                        <div id="contact-cta" className="bg-[#2D2D2D] relative">
                            <div className="px-24 py-42 flex flex-col items-center gap-12">
                                <h2 className="text-center text-4xl text-white">Ready to get started?</h2>
                                <a href="/contact">
                                <button 
                                    className="z-50 rounded-3xl py-2 px-4 border-2 border-[#2D2D2D] bg-[#F9F8F4] hover:bg-[#67865D] hover:text-white hover:cursor-pointer transition-colors"
                                >
                                    CONTACT
                                </button>
                                </a>
                            </div>
                            <div
                                className="
                                    pointer-events-none
                                    absolute top-0 left-0
                                    h-6 w-full
                                    bg-[url('/waves/short-wave.svg')]
                                    bg-repeat-x
                                    bg-bottom
                                "
                            />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}