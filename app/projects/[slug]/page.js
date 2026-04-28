import { client } from "@/lib/contentful";
import { notFound } from "next/navigation";
import Link from "next/link";
import RenderBlock from "@/lib/renderBlock";

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
    <main className="pb-20">

      {/* Hero */}
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <Link href={fields.projectLink || "#"}>
          <h1 className="flex flex-col font-bold text-5xl md:text-8xl tracking-[-2px] md:tracking-[-6px] leading-[60px] md:leading-[110px] text-center items-center">
            {fields.title}
          </h1>
        </Link>

        <span className="text-gray-600">
          {fields.role} / {year}
        </span>
      </div>

      {/* Main */}
      <div className="px-12 md:px-24">
        <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] text-center md:text-left">
          <div className="pb-12 md:pb-0">
            <h2 className="font-bold text-4xl tracking-[-2px] pb-8">
              {fields.keyQuote}
            </h2>

            <div>{fields.summary}</div>
          </div>

          <div className="flex gap-2 justify-center flex-wrap">
            {fields.software?.map((item) => (
              <div
                key={item}
                className="rounded-full border border-black w-fit h-fit py-2 px-4"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Content Blocks */}
      {fields.content?.map((block) => (
        <RenderBlock key={block.sys.id} block={block} />
      ))}
    </main>
  );
}