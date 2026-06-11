import ArrowDown from "./assets/arrowDown";
import Card from "./components/card";
import FeaturedProjectsSlider from "./components/featuredProjectsSlider";
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
      {/* Hero section */}
      <div className="w-full flex flex-col lg:flex-row items-center relative bg-[#1E1E1E] text-white overflow-hidden px-24 py-56">
        {/* Left side - title and scroll indicator */}
        <div>
          {/* Main title, split into spans for the hover effect */}
          <h1 className="flex flex-col font-bold text-5xl md:text-6xl leading-[70px] md:leading-[80px] hover:cursor-pointer text-center lg:text-left">
            <div>
              <span>Designer</span>, <span>Developer</span>, <span className="text-[#FF71D0]">Storyteller</span>.
            </div>
          </h1>
          <a
            href="#about"
            className="absolute bottom-15 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:bottom-20 flex items-center justify-center p-3 group hover:cursor-pointer z-99"
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
            <rect width="100%" height="100%" fill="#F9F8F4" />
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

        {/* Right side - featured projects in polaroid style */}
        {/* <div className="w-full h-full flex flex-col lg:flex-row items-center justify-end my-15">
          <div className="w-[15rem] h-[17rem] bg-white relative -rotate-10 hover:-translate-y-2 transition-transform">
            <div className="absolute top-4 left-4 w-[90%] h-[75%] bg-black">
              <Image
                src={`https:${page.fields.featuredProjects[0].fields.heroImage.fields.file.url}`}
                alt={page.fields.featuredProjects[0].fields.title}
                fill
                className="object-cover object-top-left"
              />
            </div>
            <p className="caption absolute bottom-4 left-[50%] transform -translate-x-[50%] text-black text-lg text-center font-bold">
              {page.fields.featuredProjects[0].fields.title}
            </p>
          </div>
          <div className="w-[15rem] h-[17rem] bg-white relative rotate-5 lg:-left-5 lg:-bottom-5 hover:-translate-y-2 transition-transform">
            <div className="absolute top-4 left-4 w-[90%] h-[75%] bg-black">
              <Image
                src={`https:${page.fields.featuredProjects[1].fields.heroImage.fields.file.url}`}
                alt={page.fields.featuredProjects[1].fields.title}
                fill
                className="object-cover object-top-left"
              />
            </div>
            <p className="caption absolute bottom-4 left-[50%] transform -translate-x-[50%] text-black text-lg text-center font-bold">
              {page.fields.featuredProjects[1].fields.title}
            </p>
          </div>
          <div className="w-[15rem] h-[17rem] bg-white relative -rotate-3 lg:-left-5 lg:-top-5 hover:-translate-y-2 transition-transform">
            <div className="absolute top-4 left-4 w-[90%] h-[75%] bg-black">
              <Image
                src={`https:${page.fields.featuredProjects[2].fields.heroImage.fields.file.url}`}
                alt={page.fields.featuredProjects[2].fields.title}
                fill
                className="object-cover object-top-left"
              />
            </div>
            <p className="caption absolute bottom-4 left-[50%] transform -translate-x-[50%] text-black text-lg text-center font-bold">
              {page.fields.featuredProjects[2].fields.title}
            </p>
          </div>
        </div> */}
      </div>

      {/* About section */}
      <div id="about" className="bg-[#F9F8F4] relative">
        {page.fields.about && (
          <div className="px-12 lg:px-24 py-24">
            <h2 className="font-bold text-3xl md:text-4xl leading-[40px] md:leading-[60px]">
              Hello, I’m Louise, a{" "}
              <span className="text-[#60c1ff]">web designer and developer</span>{" "}
              passionate about the{" "}
              <span className="text-[#FF71D0]">weird and wonderful</span>.
            </h2>
            <Card block={page.fields.about} />
          </div>
        )}
      </div>

      <div id="projects" className="bg-[#1E1E1E] relative">
        {page.fields.featuredProjects && (
          <div className="px-12 lg:px-24 flex flex-col gap-12">
            <div className="text-white">
              <FeaturedProjectsSlider projects={page.fields.featuredProjects} />
            </div>
            <svg
              viewBox="0 0 100 24"
              preserveAspectRatio="none"
              className="pointer-events-none absolute bottom-0 left-0 h-16 w-full rotate-180 scale-x-[-1]"
            >
              <rect width="100%" height="100%" fill="#F9F8F4" />
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
        )}
      </div>

      <div id="testimonials" className="bg-[#F9F8F4]">
        {page.fields.featuredQuotes && (
          <div className="px-12 lg:px-24 py-24">
            <FeaturedQuotes quotes={page.fields.featuredQuotes} />
          </div>
        )}
      </div>

      <div id="skills-slider" className="bg-[#2D2D2D]">
        <div className="px-12 lg:px-24 py-24 flex flex-col gap-6 text-white">
          <h2 className="text-3xl md:text-4xl mb-6">Tools of the trade</h2>
          <div className="border-b border-[#555] w-full pb-6">
            <span className="caption text-2xl">Obsessed with</span>
            <div className="flex gap-2 mt-2 flex-wrap">
              {page.fields.highSkills.map((skill) => (
                <span
                  key={skill.fields.title}
                  className="px-4 py-1 bg-[#FF6B9D22] text-[#FF6B9D] border border-[#FF6B9D44] rounded-full text-sm"
                >
                  {skill.fields.title}
                </span>
              ))}
            </div>
          </div>
          <div className="border-b border-[#555] w-full pb-6">
            <span className="caption text-2xl">Very capable</span>
            <div className="flex gap-2 mt-2 flex-wrap">
              {page.fields.mediumSkills.map((skill) => (
                <span
                  key={skill.fields.title}
                  className="px-4 py-1 bg-[#7EC8E322] text-[#7EC8E3] border border-[#7EC8E344] rounded-full text-sm"
                >
                  {skill.fields.title}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="caption text-2xl">Learning & experimenting with</span>
            <div className="flex gap-2 mt-2 flex-wrap">
              {page.fields.lowSkills.map((skill) => (
                <span
                  key={skill.fields.title}
                  className="px-4 py-1 bg-[#FFFFFF11] text-[#888] border border-[#555] rounded-full text-sm"
                >
                  {skill.fields.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="client-slider" className="bg-[#F9F8F4] relative">
        {page.fields.clients && (
          <div className="px-12 lg:px-24 py-24 md:py-32 flex flex-col gap-12">
            <h2 className="text-center text-3xl">Trusted by experts</h2>
            <Slider content={page.fields.clients} />
            <div
              className="
                pointer-events-none
                absolute bottom-0 left-0
                h-6 w-full
                bg-[url('/waves/short-wave-pink.svg')]
                bg-repeat-x
                bg-bottom
              "
            />
          </div>
        )}
      </div>

      <div id="contact-cta" className="bg-[#FF71D0]">
        <div className="px-12 lg:px-24 py-24 md:py-32 lg:py-42 flex flex-col items-center gap-12 relative">
          <div className="text-center text-white">
            <h2 className="text-center text-4xl text-white mb-4">
              Ready to get started?
            </h2>
            <p className="caption text-white text-2xl">
              Let's build something brilliant together.
            </p>
          </div>
          <a href="/contact">
            <button className="caption text-lg z-50 rounded-3xl py-2 px-4 border-2 border-white hover:bg-white text-white hover:text-black hover:cursor-pointer transition-colors">
              Contact
            </button>
          </a>
          <svg
            viewBox="0 0 100 24"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-0 left-0 h-16 w-full rotate-180 scale-x-[-1]"
          >
            <rect width="100%" height="100%" fill="#F9F8F4" />
            <path
              fill="#FF71D0"
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
      </div>
    </main>
  );
}
