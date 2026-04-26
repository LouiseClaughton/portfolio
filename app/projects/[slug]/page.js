import { client } from "@/lib/contentful";

export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: "project",
  });

  return res.items.map((item) => ({
    slug: item.fields.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const res = await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
  });

  const project = res.items[0];

  return (
    <div>
      <h1>{project.fields.title}</h1>
      <p>{project.fields.description}</p>
    </div>
  );
}