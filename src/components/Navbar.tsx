"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type SectionKey = "accueil" | "about" | "projects" | "contact";

type NavbarProps = {
  refs: {
    accueil: React.RefObject<HTMLElement>;
    about: React.RefObject<HTMLElement>;
    projects: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
};

export function Navbar({ refs }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionKey>("accueil");

  // Scroll smooth
  const scrollTo = (key: SectionKey) => {
    refs[key].current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy (section active)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionKey);
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [refs]);

  const navItems: { key: SectionKey; label: string }[] = [
    { key: "accueil", label: "Accueil" },
    { key: "about", label: "A propos" },
    { key: "projects", label: "Mes Réalisations" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 h-20 px-7 max-w-6xl mx-auto flex items-center justify-between transition-all ${
        isSticky
          ? "bg-white/80 backdrop-blur-md shadow-sm mx-12 top-3 max-w-6xl rounded-full"
          : "bg-transparent max-w-6xl"
      }`}
    >
      {/* LOGO */}
      <Link href="/" className="text-3xl font-bold text-sky-900">
        Ama
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {navItems.map(({ key, label }) => (
              <NavigationMenuItem key={key}>
                <button
                  onClick={() => scrollTo(key)}
                  className={`relative text-lg font-medium transition ${
                    activeSection === key
                      ? "text-sky-700"
                      : "text-gray-700 hover:text-sky-600"
                  }`}
                >
                  {label}
                  {activeSection === key && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-sky-600 rounded"
                    />
                  )}
                </button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 text-2xl text-gray-700">
        <a href="#" className="hover:text-sky-600 transition">
          <FaGithub />
        </a>
        <a href="#" className="hover:text-sky-600 transition">
          <FaLinkedin />
        </a>
      </div>

      {/* MOBILE */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FaBars />
      </button>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 bg-white shadow-md md:hidden"
        >
          <div className="flex flex-col items-center py-6 gap-4">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className="text-lg font-medium text-gray-700 hover:text-sky-600"
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
