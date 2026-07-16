import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

// Same header as the main portfolio app (apps/web Navbar), light-mode styling.
// Section items link back to the main portfolio; UX Showcase is the active page.
const MAIN_SITE_URL = import.meta.env.DEV
  ? "http://localhost:3000"
  : "https://mounikamurugonda.vercel.app";

const navItems = [
  { name: "Home", href: `${MAIN_SITE_URL}/#home` },
  { name: "Skills", href: `${MAIN_SITE_URL}/#skills` },
  { name: "Experience", href: `${MAIN_SITE_URL}/#experience` },
  { name: "Projects", href: `${MAIN_SITE_URL}/#projects` },
  { name: "Education", href: `${MAIN_SITE_URL}/#education` },
  { name: "Hobbies", href: `${MAIN_SITE_URL}/#hobbies` },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-[60] transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="flex w-full justify-center px-8">
        <nav className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white/90 px-2 py-2 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-lg sm:px-4 md:gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative hidden px-3 py-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 sm:block sm:px-4 sm:text-sm md:block"
            >
              {item.name}
            </a>
          ))}

          <div className="mx-1 hidden h-6 w-px bg-zinc-200 sm:mx-2 sm:block" />

          {/* Current page: active pill */}
          <span className="relative flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-900 sm:px-4 sm:text-sm">
            <span className="absolute inset-0 rounded-full bg-zinc-900/[0.07]" />
            <span className="relative z-10">UX Showcase</span>
            <ExternalLink size={12} className="relative z-10 opacity-60" />
          </span>

          <div className="mx-1 hidden h-6 w-px bg-zinc-200 sm:mx-2 sm:block" />

          <a
            href={`${MAIN_SITE_URL}/#contact`}
            className="relative ml-1 flex items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 sm:ml-2"
          >
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
