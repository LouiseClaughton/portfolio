import Projects from "./components/projects";
import Navigation from "./components/navigation";
// import { getPageData } from "@/lib/queries/pages";

export default async function Home() {
  // const pages = await getPageData();

  // const homepage = pages.find(
  //   (page) => page.title === "Homepage"
  // );

  // const featuredProjects = homepage?.featuredProjects || [];
  // const content = homepage?.content || [];

  return (
    <main className="pb-20">
      <Navigation />

      <div className="h-screen w-screen flex justify-center items-center">
        <h1 className="flex flex-col font-bold text-8xl tracking-[-6px] leading-[110px] text-center items-center hover:cursor-pointer">
          <div><span className="hover:text-amber-400 transition-colors">Designer</span>,</div>
          <div><span className="hover:text-purple-500 transition-colors">Developer</span>,</div>
          <div><span className="hover:text-pink-400 transition-colors">Storyteller</span>.</div>
        </h1>
      </div>

      <Projects />
    </main>
  );
}