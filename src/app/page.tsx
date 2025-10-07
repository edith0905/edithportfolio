"use client";

import { useRef } from "react";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  const accueilRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  return (
    <main className="flex flex-col items-center">
      {/* Navbar */}
      <Navbar refs={{ accueil: accueilRef, about: aboutRef, projects: projectsRef, contact: contactRef }} />

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl font-bold mb-4">Salut, je suis [Ton Nom]</h2>
        <p className="text-lg text-gray-300 mb-8">
          Développeur web spécialisé en Next.js et React.
        </p>
        <button
          onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Voir mes projets
        </button>
      </section>

      {/* À propos */}
      <section ref={aboutRef} className="min-h-screen max-w-3xl px-6 py-20">
        <h3 className="text-3xl font-bold mb-6">À propos</h3>
        <p className="text-gray-300 leading-relaxed">
          Je suis un développeur passionné par la création d&apos;applications modernes et performantes.
        </p>
      </section>

      {/* Projets */}
      <section ref={projectsRef} className="min-h-screen max-w-5xl px-6 py-20">
        <h3 className="text-3xl font-bold mb-6">Mes projets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Projet 1</h4>
            <p className="text-gray-400">Description rapide du projet.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Projet 2</h4>
            <p className="text-gray-400">Description rapide du projet.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef} className="min-h-screen max-w-3xl px-6 py-20">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nom"
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition"
          >
            Envoyer
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-gray-500 bg-gray-800">
        © {new Date().getFullYear()} Mon Nom. Tous droits réservés.
      </footer>
    </main>
  );
}
