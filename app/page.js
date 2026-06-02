import ArrowDown from "./assets/arrowDown";
import RenderBlock from "@/lib/renderBlock";
import Card from "./components/card";
import FeaturedProjects from "./components/featuredProjects";
import FeaturedQuotes from "./components/featuredQuotes";
import Slider from "./components/slider";
import Image from "next/image";

import { client } from "@/lib/contentful";

export default async function HomePage() {
  const res = await client.getEntries({
    content_type: "homepage",
    include: 2,
  });

  const page = res.items[0];

  return (
    <main className="bg-[#F9F8F4]">
      <div className="h-screen w-full flex items-center relative bg-[#2D2D2D] text-white overflow-hidden p-24">
        <div>
          {/* Main title, split into spans for the hover effect */}
          <h1 className="flex flex-col font-bold text-5xl md:text-8xl leading-[80px] md:leading-[110px] hover:cursor-pointer">
            <div><span>Designer</span>,</div>
            <div><span>Developer</span>,</div>
            <div><span className="text-[#FF71D0]">Storyteller</span>.</div>
          </h1>
          <a
            href="#about"
            className="absolute bottom-20 flex items-center justify-center p-3 group hover:cursor-pointer"
          >
            {/* Spinning border */}
            <span className="absolute inset-0 rounded-full border border-dashed border-white animate-[spin_10s_linear_infinite]"></span>

            {/* Static icon */}
            <ArrowDown className="relative z-10 transition-transform duration-300 group-hover:translate-y-1 text-white" />
          </a>
          <svg
            viewBox="0 0 100 24"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-0 left-0 h-16 w-full rotate-180 scale-x-[-1]"
          >
            <rect width="100%" height="100%" fill="#F9F8F4"/>
            <path
              fill="#2D2D2D"
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
        <div className="w-full h-full flex items-center justify-end">
          <div className="w-[20rem] h-[22rem] bg-white relative -rotate-10 hover:-translate-y-2 transition-transform">
              <div className="absolute top-4 left-4 w-[90%] h-[75%] bg-black">
                 <Image
                  src={`https:${page.fields.featuredProjects[0].fields.heroImage.fields.file.url}`}
                  alt={page.fields.featuredProjects[0].fields.title}
                  fill
                  className="object-cover object-top-left"
                />
              </div>
              <p className="absolute bottom-4 left-[50%] transform -translate-x-[50%] text-black text-lg text-center font-bold">
                {page.fields.featuredProjects[0].fields.title}
              </p>
          </div>
          <div className="w-[20rem] h-[22rem] bg-white relative rotate-5 -left-5 -bottom-5 hover:-translate-y-2 transition-transform">
              <div className="absolute top-4 left-4 w-[90%] h-[75%] bg-black">
                <Image
                  src={`https:${page.fields.featuredProjects[1].fields.heroImage.fields.file.url}`}
                  alt={page.fields.featuredProjects[1].fields.title}
                  fill
                  className="object-cover object-top-left"
                />
              </div>
              <p className="absolute bottom-4 left-[50%] transform -translate-x-[50%] text-black text-lg text-center font-bold">
                {page.fields.featuredProjects[1].fields.title}
              </p>
          </div>
          <div className="w-[20rem] h-[22rem] bg-white relative -rotate-3 -left-5 -top-5 hover:-translate-y-2 transition-transform">
              <div className="absolute top-4 left-4 w-[90%] h-[75%] bg-black">
                <Image
                  src={`https:${page.fields.featuredProjects[2].fields.heroImage.fields.file.url}`}
                  alt={page.fields.featuredProjects[2].fields.title}
                  fill
                  className="object-cover object-top-left"
                />
              </div>
              <p className="absolute bottom-4 left-[50%] transform -translate-x-[50%] text-black text-lg text-center font-bold">
                {page.fields.featuredProjects[2].fields.title}
              </p>
          </div>
        </div>
      </div>

      <div id="about" className="bg-[#F9F8F4] relative">
        {page.fields.about &&
          <div className="px-24 py-42">
            <h2 className="font-bold text-3xl md:text-4xl leading-[40px] md:leading-[60px]">
              Hello, I’m Louise, a <span className="hover:text-[#744F89] hover:cursor-pointer transition-colors">web designer and developer</span> passionate about the <span className="hover:text-[#67865D] hover:cursor-pointer transition-colors">weird and wonderful</span>. 
            </h2>
            <Card block={page.fields.about} />
            <div className="pointer-events-none absolute bottom-0 left-0 h-6 w-full bg-[url('/waves/short-wave.svg')] bg-repeat-x bg-bottom" />
          </div>
        }
      </div>

      <div id="projects" className="bg-[#2D2D2D] relative">
        {page.fields.featuredProjects &&
          <div className="px-24 py-42 flex flex-col gap-12">
            <div className="flex justify-between">
              <h2 className="text-3xl text-white">Things I've <span className="text-[#FF71D0]">made</span></h2>
              <a href="/projects">
                <button 
                    className="z-50 rounded-3xl py-2 px-4 border-2 border-[#2D2D2D] bg-[#F9F8F4] hover:bg-[#67865D] hover:text-white hover:cursor-pointer transition-colors"
                >
                    VIEW MORE
                </button>
              </a>
            </div>
            <div className="text-white">
              <FeaturedProjects projects={page.fields.featuredProjects} />
            </div>
            <svg
              viewBox="0 0 100 24"
              preserveAspectRatio="none"
              className="pointer-events-none absolute bottom-0 left-0 h-16 w-full rotate-180 scale-x-[-1]"
            >
              <rect width="100%" height="100%" fill="#F9F8F4"/>
              <path
                fill="#2D2D2D"
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
        }
      </div>

      <div id="testimonials" className="bg-[#F9F8F4]">
        {page.fields.featuredQuotes &&
          <div className="px-24 py-42">
            <FeaturedQuotes quotes={page.fields.featuredQuotes} />
          </div>
        }
      </div>

      <div id="skills-slider" className="bg-[#2D2D2D]">
        {page.fields.skills &&
          <div className="px-24 py-42">
            <Slider content={page.fields.skills} />
          </div>
        }
      </div>

      <div id="client-slider" className="bg-[#F9F8F4] relative">
        {page.fields.clients &&
          <div className="px-24 py-42 flex flex-col gap-12">
            <h2 className="text-center text-3xl">Trusted by experts</h2>
            <Slider content={page.fields.clients} />
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
          </div>
        }
      </div>

      <div id="contact-cta" className="bg-[#2D2D2D]">
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
      </div>
    </main>
  );
}