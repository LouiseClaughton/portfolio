import { client } from "@/lib/contentful";
import Card from "./components/card";
import Projects from "./components/projects";

export default async function Home() {
  return (
    <main>
      <h1>Projects</h1>
      <Projects />
    </main>
  );
}