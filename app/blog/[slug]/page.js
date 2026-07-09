import { client } from "@/lib/contentful";
import { notFound } from "next/navigation";
import RenderBlock from "@/lib/renderBlock";
import ContactCTA from "@/app/components/contact-cta";

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const res = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    include: 3,
    limit: 1,
  });

  const post = res.items[0];

  if (!post) return notFound();

  const fields = post.fields;

  function formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString("en-GB");
  }

  return (
    <main className="bg-[#F9F8F4]">

      {/* Hero */}
      <div className="w-screen relative bg-[#1E1E1E] text-white py-48">
        <div className="flex flex-col justify-center px-24">
          <span className="caption text-xl">
            {fields.tag}
          </span>
          <h1 className="flex flex-col font-bold text-4xl leading-[60px] mb-8 hover:cursor-pointer">
            {fields.title}
          </h1>
          <span className="caption text-xl">
            {formatDate(fields.date)}
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
      <div className="bg-[#F9F8F4] px-12 md:px-24 py-12">

        {fields?.content?.map((block) => {

          return (
            <div key={block.sys.id} className="relative">
                {/* Section */}
                <div className="bg-[#F9F8F4] text-black py-8">
                    <RenderBlock block={block} />
                </div>
            </div>
          );
        })}
      </div>

      <ContactCTA />
    </main>
  );
}