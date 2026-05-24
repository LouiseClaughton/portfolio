import ArrowDown from "./assets/arrowDown";
import RenderBlock from "@/lib/renderBlock";
import Card from "./components/card";
import FeaturedProjects from "./components/featuredProjects";
import FeaturedQuotes from "./components/featuredQuotes";

import { client } from "@/lib/contentful";

export default async function HomePage() {
  const res = await client.getEntries({
    content_type: "homepage",
    include: 2,
  });

  const page = res.items[0];

  return (
    <main className="pb-20 bg-white">
      <div className="h-screen w-full flex items-center relative bg-[#2D2D2D] text-white overflow-hidden p-24">
        {/* Main title, split into spans for the hover effect */}
        <h1 className="flex flex-col font-bold text-5xl md:text-8xl leading-[80px] md:leading-[110px] hover:cursor-pointer">
          <div><span>Designer</span>,</div>
          <div><span>Developer</span>,</div>
          <div><span>Storyteller</span>.</div>
        </h1>
        <a
          href="#about"
          className="absolute bottom-12 flex items-center justify-center p-3 group hover:cursor-pointer"
        >
          {/* Spinning border */}
          <span className="absolute inset-0 rounded-full border border-dashed border-white animate-[spin_10s_linear_infinite]"></span>

          {/* Static icon */}
          <ArrowDown className="relative z-10 transition-transform duration-300 group-hover:translate-y-1 text-white" />
        </a>
      </div>

      <div id="about" className="bg-[#F9F8F4]">
        {page.fields.about &&
          <Card block={page.fields.about} />
        }
      </div>

      <div id="projects" className="bg-[#2D2D2D]">
        {page.fields.featuredProjects &&
          <FeaturedProjects projects={page.fields.featuredProjects} />
        }
      </div>

      <div id="testimonials" className="bg-[#F9F8F4]">
        {page.fields.featuredQuotes &&
          <FeaturedQuotes quotes={page.fields.featuredQuotes} />
        }
      </div>

      <div id="content" className="bg-[#F9F8F4]">
          {page.fields?.content?.map((block) => (
            <RenderBlock key={block.sys.id} block={block} />
          ))}
      </div>
    </main>
  );
}