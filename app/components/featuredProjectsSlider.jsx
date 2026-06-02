"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./projectCard";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjectsSlider({ projects }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const setTrackPadding = () => {
      const sectionWidth = section.offsetWidth;
      const firstSlide = track.querySelector("[data-slide]");
      const slideWidth = firstSlide ? firstSlide.offsetWidth : 0;
      const padding = Math.max((sectionWidth - slideWidth) / 2, 0);

      track.style.paddingRight = `${padding}px`;

      return padding;
    };

    const ctx = gsap.context(() => {
      const getEndValue = () => {
        const scrollWidth = track.scrollWidth;
        const sectionWidth = section.offsetWidth;
        return Math.max(scrollWidth - sectionWidth, 0);
      };

      setTrackPadding();

      gsap.to(track, {
        x: () => `-${getEndValue()}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getEndValue()}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: setTrackPadding,
        },
      });
    }, section);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [projects]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="flex justify-between flex-col items-center gap-6 lg:flex-row mb-12">
            <h2 className="text-3xl md:text-4xl text-white">
                Things I've <span className="text-[#FF71D0]">made</span>
            </h2>
            <a href="/projects">
            <button className="caption text-lg z-50 rounded-3xl py-2 px-4 border-2 border-white hover:bg-white text-white hover:text-black hover:cursor-pointer transition-colors">
                View more
            </button>
            </a>
        </div>
        <div
          ref={trackRef}
          className="flex gap-8 h-full will-change-transform"
        >
          {projects.map((project) => (
            <div
              key={project.sys.id}
              data-slide
              className="flex-shrink-0 min-w-[90vw] sm:min-w-[45rem] lg:min-w-[36rem] xl:min-w-[40rem]"
            >
              <ProjectCard
                title={project.fields.title}
                slug={project.fields.slug}
                date={project.fields.date}
                image={`https:${project.fields.heroImage?.fields?.file?.url}`}
                role={project.fields.role}
                href={`/projects/${project.fields.slug}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
