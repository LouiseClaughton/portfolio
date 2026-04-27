import Projects from "../components/projects";
import Navigation from "../components/navigation";

export default async function ProjectPage() {
  return (
    <main className="pb-20">
      <Navigation />

      <div className="h-screen w-screen flex justify-center items-center">
        <h1 className="flex flex-col font-bold text-5xl md:text-8xl tracking-[-2px] md:tracking-[-6px] leading-[80px] md:leading-[110px] text-center items-center hover:cursor-pointer">Projects</h1>
      </div>

      <Projects />
    </main>
  );
}