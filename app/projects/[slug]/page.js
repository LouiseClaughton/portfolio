import { client } from "@/lib/graphql";
import { gql } from "graphql-request";
import Navigation from "@/app/components/navigation";
import Link from "next/link";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  {/* Get the project details by matching the slug */}
  const GET_PROJECT_BY_SLUG = gql`
    query ProjectBySlug($slug: String!) {
      projectCollection(where: { slug: $slug }, limit: 1) {
        items {
          title
          slug
          date
          role
          software
          keyQuote
          summary
          testimonial
          testimonialAuthor
          projectLink
        }
      }
    }
  `;

  const projectData = await client.request(GET_PROJECT_BY_SLUG, { slug });
  const project = projectData.projectCollection.items[0];

  {/* Convert the date into only the year */}
  const year = new Date(project.date).getFullYear();

  return (
    <main className="pb-20">
      <Navigation />

      {/* Project Title and Role */}
      <div className="h-screen w-screen flex flex-col justify-center items-center ">
        <Link href={project.projectLink ? project.projectLink : ''}><h1 className="flex flex-col font-bold text-8xl tracking-[-6px] leading-[110px] text-center items-center">{project.title}</h1></Link>
        <span className="text-gray-600">{project.role} / {year}</span>
      </div>

      {/* Start of main content */}
      <div className="px-24">

        {/* Introduction */}
        <div className='grid grid-cols-[2fr_1fr]'>
          {/* Bold quote and short summary of the project */}
          <div>
            <h2 className="font-bold text-5xl tracking-[-2px] pb-8">{project.keyQuote}</h2>
            <strong><div>{project.summary}</div></strong>
          </div>
          {/* Software and Skills Used */}
          <div className="flex gap-2 justify-center">
            {Object.values(project.software).map((item) => (
              <div className="rounded-full border border-black w-fit h-fit py-2 px-4" key={item}>{item}</div>
            ))}
          </div>
      </div>
      {/* Show a testimonial if there is one */}
      {project.testimonial && (
        <div className="flex mt-28">
          <strong><span className="font-bold text-8xl">"</span></strong>
          <div className="mt-4 ml-4 flex flex-col font-normal">
            {project.testimonial}
            <span className="italic mt-4">{project.testimonialAuthor}</span>
          </div>
        </div>
      )}
      </div>
    </main>
  );
}