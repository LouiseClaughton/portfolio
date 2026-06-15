export default function ContactCTA () {
    return (
        <div id="contact-cta" className="bg-[#FF71D0]">
            <div
                className="
                    pointer-events-none
                    h-6 w-full
                    bg-[url('/waves/short-wave-pink.svg')]
                    bg-repeat-x
                    bg-bottom
                "
            />
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
    )
}