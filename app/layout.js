import "./globals.css";

import { gooper } from './fonts';
import { satoshi } from './fonts';

export const metadata = {
  title: "Louise Claughton - Web Designer and Developer",
  description: "Hello! I'm Louise, a web designer and developer with a passion for telling stories.",
};

import Navigation from "./components/navigation";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${gooper.variable} ${satoshi.variable} h-full antialiased scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
