import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer
            className="flex flex-col md:flex-row px-12 py-12 gap-2 md:gap-8 overflow-hidden relative justify-between items-center bg-[#F9F8F4]"
        >
            <a href='/'>
                <Image 
                    src={Logo} 
                    alt="Logo" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-12 h-12 hover:-translate-y-2 transition-all" 
                />
            </a>
            <nav>
                <ul className="list-none flex gap-8">
                    <li className="list-none"><Link href="/about" className="hover:text-[#0092FF] transition-colors">About</Link></li>
                    <li className="list-none"><Link href="/projects" className="hover:text-[#0092FF] transition-colors">Projects</Link></li>
                    <li className="list-none"><Link href="/interests" className="hover:text-[#0092FF] transition-colors">Interests</Link></li>
                    <li className="list-none"><Link href="/contact" className="hover:text-[#0092FF] transition-colors">Contact</Link></li>
                </ul>
            </nav>
        </footer>
    );
}
