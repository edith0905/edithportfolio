"use client";

import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuItem, NavigationMenuLink 
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type NavbarProps = {
  refs: {
    about: React.RefObject<HTMLElement>;
    projects: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
};

export function Navbar({ refs }: NavbarProps) {
  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900/90 backdrop-blur-md border-r border-gray-700 flex flex-col items-center py-10 z-50">
      
      {/* Photo de profil */}
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <Image
          src="/profile.jpg" // mets ton image dans /public/profile.jpg
          alt="Photo de profil"
          width={112}
          height={112}
          className="object-cover"
        />
      </div>

      {/* Nom */}
      <h1 className="mt-4 text-xl font-bold text-white">Mon Nom</h1>
      <p className="text-sm text-gray-400">Développeur Web</p>

      {/* Icônes réseaux sociaux */}
      <div className="flex gap-4 mt-4">
        <a
          href="https://github.com/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Navigation */}
      <nav className="mt-10 w-full">
        <NavigationMenu orientation="vertical" className="flex flex-col items-center space-y-4">
          <NavigationMenuList className="flex flex-col gap-4">
            
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 w-full text-center"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Accueil
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 w-full text-center"
                onClick={() => scrollTo(refs.about)}
              >
                À propos
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 w-full text-center"
                onClick={() => scrollTo(refs.projects)}
              >
                Mes projets
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 w-full text-center"
                onClick={() => scrollTo(refs.contact)}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </aside>
  );
}
