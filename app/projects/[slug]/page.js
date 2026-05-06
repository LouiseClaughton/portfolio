import { client } from "@/lib/contentful";
import { notFound } from "next/navigation";
import Link from "next/link";
import RenderBlock from "@/lib/renderBlock";
import ArrowUpRight from "@/app/assets/arrowUpRight";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const res = await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
    include: 3,
    limit: 1,
  });

  const project = res.items[0];

  if (!project) return notFound();

  const fields = project.fields;
  const year = new Date(fields.date).getFullYear();

  return (
    <main className="pb-20 bg-white">

      {/* Hero */}
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#54B2F8] to-[#A7D2FD]">
        <div className="cloud w-[350px] h-[120px] bg-[#f2f9fe] rounded-full absolute mt-[120px] mx-auto mb-[20px] z-1 opacity-60 top-[15%] left-[-6%] hidden md:block"></div>
        <div className="cloud w-[350px] h-[120px] bg-[#f2f9fe] rounded-full absolute mt-[120px] mx-auto mb-[20px] z-1 opacity-60 right-[-10%] top-[12%] md:top-[-5%]"></div>
        <div className="cloud w-[350px] h-[120px] bg-[#f2f9fe] rounded-full absolute mt-[120px] mx-auto mb-[20px] z-1 opacity-60 bottom-0 left-[-30%] md:right-[10%] md:bottom-0"></div>
        <Link href={fields.projectLink || "#"}>
          <h1 className="flex flex-col font-bold text-5xl md:text-8xl tracking-[-2px] md:tracking-[-6px] leading-[60px] md:leading-[110px] text-center items-center mb-4">
            {fields.title}
          </h1>
        </Link>

        <span className="text-gray-600">
          {fields.role} / {year}
        </span>
      </div>

      {/* Main */}
      <div className="bg-gradient-to-b from-[#A7D2FD] to-[#FFFFFF]">
        <div className="px-12 md:px-24 py-12 md:py-24">
          <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] text-center md:text-left md:gap-28">
            <div className="pb-12 md:pb-0">
              <h2 className="font-bold text-4xl tracking-[-2px] pb-8">
                {fields.keyQuote}
              </h2>

              <div>{fields.summary}</div>
            </div>

            <div className="flex flex-col gap-4">
              {fields?.software &&
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Systems</span>
                  <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                    {fields?.software?.map((item) => (
                      <div
                        key={item}
                        className="rounded-full bg-white w-fit h-fit py-2 px-4"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              }
              {fields?.projectLink &&
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Links</span>
                  <div className="flex justify-center md:justify-start">
                    {fields?.projectLink &&
                      <a href={fields.projectLink} target="_blank" className="rounded-full bg-[#54B2F8] text-white w-fit h-fit py-2 px-4 flex items-center gap-4">
                          <span>Site</span>
                          <ArrowUpRight className="w-4 h-4 text-white" />
                      </a>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        {/* Dynamic Content Blocks */}
        {fields.content?.map((block) => (
          <RenderBlock key={block.sys.id} block={block} />
        ))}
      </div>
    </main>
  );
}