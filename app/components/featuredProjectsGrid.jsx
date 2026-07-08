"use client";

import { motion } from "framer-motion";
import ProjectCard from "./projectCard";

export default function FeaturedProjectsGrid({ projects }) {

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (index) => ({
      opacity: 1,
      y: index % 2 === 1 ? 64 : 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {projects.map((project, index) => (
        <div 
          key={project.id}
          className={index % 2 === 1 ? "md:mt-16" : ""}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <ProjectCard
              title={project.fields.title}
              slug={project.fields.slug}
              date={project.fields.date}
              image={`https:${project.fields.heroImage?.fields?.file?.url}`}
              role={project.fields.role}
              href={`/projects/${project.fields.slug}`}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
