"use client";

import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  const sections = {
    accueil: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  };

  return (
    <main className="flex flex-col bg-linear-to-r from-sky-50 to-sky-200 min-h-screen">
      <Navbar refs={sections} />

      <Hero
        accueilRef={sections.accueil}
        projectsRef={sections.projects}
      />

      <About aboutRef={sections.about} />
      <Skills />
      <Projects projectsRef={sections.projects} />
      <Contact contactRef={sections.contact} />

      <Footer />
    </main>
  );
}
