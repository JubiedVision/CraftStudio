import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useDarkMode } from "@/hooks/useDarkMode";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggle } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.querySelector(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-shadow duration-300 ${scrolled ? "bg-white dark:bg-neutral-900 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-[#1A2456] dark:text-white font-serif font-semibold text-2xl">
                <span className="text-[#0F8B8D]">CraftStudio</span>
              </Link>
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="relative px-2 py-1 text-neutral-600 hover:text-[#0F8B8D] dark:text-neutral-300 dark:hover:text-white transition-all duration-300 font-medium hover:scale-105 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0F8B8D] dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sun className={`h-4 w-4 ${isDarkMode ? 'text-neutral-400' : 'text-amber-500'}`} />
              <Switch 
                checked={isDarkMode} 
                onCheckedChange={toggle}
                className={`${isDarkMode ? 'bg-[#0F8B8D]' : 'bg-neutral-300'}`}
              />
              <Moon className={`h-4 w-4 ${isDarkMode ? 'text-indigo-400' : 'text-neutral-400'}`} />
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="hidden md:inline-flex bg-[#EC4E20] hover:bg-[#FC5E30] text-white font-medium px-4 py-2 rounded-md transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
            >
              Get in Touch
            </a>
            <button
              className="md:hidden text-neutral-600 dark:text-neutral-300"
              onClick={toggleMobileMenu}
            >
              <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-neutral-900 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="block px-3 py-2 text-neutral-600 hover:text-[#0F8B8D] dark:text-neutral-300 dark:hover:text-white transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:pl-4 rounded"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="block mt-4 px-3 py-2 bg-[#EC4E20] hover:bg-[#FC5E30] text-white font-medium rounded-md transition-all duration-300 text-center hover:shadow-md hover:translate-y-[-2px]"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </header>
  );
}
