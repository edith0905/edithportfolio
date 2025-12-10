"use client";

import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuItem, 
    NavigationMenuLink 
} from "@/components/ui/navigation-menu";
import Link from "next/link"
// import Image from "next/image";
import { 
  FaGithub, 
  FaLinkedin,
  FaBars, // Pour le menu hamburger mobile
} from "react-icons/fa";
import { useState, useEffect } from "react"; // Pour gérer le menu mobile

type NavbarProps = {
  refs: {
    about: React.RefObject<HTMLElement>;
    projects: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
};

export function Navbar({ refs }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // État pour le menu mobile
  const [isSticky, setIsSticky] = useState(false);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Fermer le menu mobile après clic
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav  className={`fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-6 py-4 z-50 transition-all duration-300 ${
    isSticky ? "backdrop-blur-md shadow-sm border-gray-700/50" : ""
    }`}
    >

      {/* Section centrale : Nom */}
      <div className="flex items-center">
        <Link href="/" className="text-4xl font-bold hover:text-blue-500 transition-colors duration-300">
          <h1 className="text-4xl font-bold text-sky-700">Ama Kuatcha</h1>
        </Link>
        
      </div>

      {/* Section : Navigation */}
      <div className="flex items-center">
        <nav className="hidden md:flex ">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium text-xl"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Accueil
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium text-xl"
                  onClick={() => scrollTo(refs.about)}
                >
                  A propos
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium text-xl"
                  onClick={() => scrollTo(refs.projects)}
                >
                  Mon CV
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium text-xl"
                  onClick={() => scrollTo(refs.projects)}
                >
                  Mes projets
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium text-xl"
                  onClick={() => scrollTo(refs.contact)}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        {/* Menu hamburger pour mobile */}
        <button
          className="md:hidden text-gray-800 text-xl transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars />
        </button>
      </div>

      

      {/* Section droite : Icônes réseaux sociaux */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-blue-500 text-4xl transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-blue-500 text-4xl transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Menu mobile déroulant */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/20 md:hidden shadow-sm">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <NavigationMenuLink
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Accueil
            </NavigationMenuLink>
            <NavigationMenuLink
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium"
              onClick={() => scrollTo(refs.about)}
            >
              À propos
            </NavigationMenuLink>
            <NavigationMenuLink
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium"
              onClick={() => scrollTo(refs.projects)}
            >
              Mon CV
            </NavigationMenuLink>
            <NavigationMenuLink
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium"
              onClick={() => scrollTo(refs.projects)}
            >
              Mes projets
            </NavigationMenuLink>
            <NavigationMenuLink
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium"
              onClick={() => scrollTo(refs.contact)}
            >
              Contact
            </NavigationMenuLink>
          </nav>
        </div>
      )}
    </nav>
  );
}
