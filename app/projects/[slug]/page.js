import { client } from "@/lib/contentful";
import { notFound } from "next/navigation";
import Link from "next/link";
import RenderBlock from "@/lib/renderBlock";
import ArrowUpRight from "@/app/assets/arrowUpRight";
import Image from "next/image";
import ContactCTA from "@/app/components/contact-cta";

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

  console.log(fields);

  return (
    <main className="bg-[#F9F8F4]">

      {/* Hero */}
      <div className="w-screen relative bg-[#1E1E1E] text-white py-48">
        <div className="flex flex-col justify-center pl-24">
          <Link href={fields.projectLink || "#"}>
            <h1 className="flex flex-col font-bold text-5xl md:text-6xl leading-[80px] md:leading-[110px] hover:cursor-pointer">
              {fields.title}
            </h1>
          </Link>
          <span>
            {fields.role} / {year}
          </span>
        </div>

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
      </div>

      {/* Main */}
      <div className="bg-[#F9F8F4]">
        <div className="px-12 md:px-24 py-12 md:py-24">
          <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] text-center md:text-left md:gap-28">
            <div className="pb-12 md:pb-0">
              <h2 className="font-bold text-4xl pb-8">
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
                        className="rounded-full bg-[#60c1ff] text-white w-fit h-fit py-2 px-4"
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
                      <a href={fields.projectLink} target="_blank" className="rounded-full bg-[#FF71D0] text-white w-fit h-fit py-2 px-4 flex items-center gap-4">
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

        {fields?.content?.map((block, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={block.sys.id} className="relative">
                {/* Section */}
                <div className={`${isEven ? "bg-[#1E1E1E] text-white" : "bg-[#F9F8F4] text-black"}`}>
                    <RenderBlock block={block} isEven={isEven} />
                </div>

                {index < fields.content.length - 1 && (
                  <div className="w-full">
                      {isEven ?
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
                        </svg> :
                        <div
                            className="
                                pointer-events-none
                                absolute bottom-0 left-0
                                h-6 w-full
                                bg-[url('/waves/short-wave.svg')]
                                bg-repeat-x
                                bg-bottom
                            "
                        />
                      }
                  </div>
                )}
            </div>
          );
        })}

        <ContactCTA />
      </div>
    </main>
  );
}