import Projects from "./projects";

export default function About() {
    return (
        <div className="w-screen flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 px-12 md:px-24 py-24" id="about">
            {/* Left col, sticky */}
            <div className="md:sticky top-12 h-fit">
                <h2 className="font-bold text-3xl md:text-5xl tracking-[-2px] leading-[80px] md:leading-[110px]">Hello!</h2>
                <p>I’m Louise, a web developer and designer based in Leeds. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            {/* Right col, projects */}
            <div>
                <Projects grid={false} />
            </div>
        </div>
    )
}