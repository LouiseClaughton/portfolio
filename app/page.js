import ArrowDown from "./assets/arrowDown";
import RenderBlock from "@/lib/renderBlock";

import { client } from "@/lib/contentful";

export default async function HomePage() {
  const res = await client.getEntries({
    content_type: "page",
    "fields.isHomepage": true,
    include: 2,
  });

  const page = res.items[0];

  return (
    <main>
      <div className="h-screen w-screen flex justify-center items-center relative bg-gradient-to-b from-[#54B2F8] to-[#A7D2FD] text-white">
        {/* Main title, split into spans for the hover effect */}
        <h1 className="flex flex-col font-bold text-5xl md:text-8xl tracking-[-2px] md:tracking-[-4px] leading-[80px] md:leading-[110px] text-center items-center text-black hover:cursor-pointer">
          <a href="/projects"><div><span className="hover:text-[#BFE1FE] transition-colors">Designer</span>,</div></a>
          <a href="/projects"><div><span className="hover:text-[#0092FF] transition-colors">Developer</span>,</div></a>
          <a href="/interests"><div><span className="hover:text-white transition-colors">Storyteller</span>.</div></a>
        </h1>
        <a
          href="#about"
          className="absolute bottom-12 flex items-center justify-center p-3 group hover:cursor-pointer"
        >
          {/* Spinning border */}
          <span className="absolute inset-0 rounded-full border border-dashed border-black animate-[spin_10s_linear_infinite]"></span>

          {/* Static icon */}
          <ArrowDown className="relative z-10 transition-transform duration-300 group-hover:translate-y-1 text-black" />
        </a>
      </div>

      <div id="about" className="bg-gradient-to-b from-[#A7D2FD] to-[#FFFFFF]">
          {page.fields.content.map((block) => (
              <RenderBlock key={block.sys.id} block={block} />
            ))}
      </div>
    </main>
  );
}