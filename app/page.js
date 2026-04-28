import Navigation from "./components/navigation";
import ArrowDown from "./assets/arrowDown";
import About from "./components/about";
import Quote from "./components/quote";
import Experience from "./components/experience";
import Interests from "./components/interests";

export default async function Home() {

  return (
    <main className="pb-20">
      <Navigation />

      <div className="h-screen w-screen flex justify-center items-center relative">
        {/* Main title, split into spans for the hover effect */}
        <h1 className="flex flex-col font-bold text-5xl md:text-8xl tracking-[-2px] md:tracking-[-6px] leading-[80px] md:leading-[110px] text-center items-center hover:cursor-pointer">
          <div><span className="hover:text-amber-400 transition-colors">Designer</span>,</div>
          <div><span className="hover:text-purple-500 transition-colors">Developer</span>,</div>
          <div><span className="hover:text-pink-400 transition-colors">Storyteller</span>.</div>
        </h1>
        <a href="#about" className="absolute bottom-4 border border-black rounded-full p-2 hover:cursor-pointer">
          <ArrowDown />
        </a>
      </div>

      <About />
      <Quote />
      <Experience />
      <Interests />

    </main>
  );
}