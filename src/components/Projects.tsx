"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLElement | null>;
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "E-Learning Platform",
    category: "Development",
    description: "Plateforme e-learning moderne avec dashboard et gestion des cours.",
    image: "/projects/elearning.jpg",
    link: "http://46.202.128.207",
  },
  {
    title: "Application de gestion",
    category: "Web App",
    description: "Dashboard de gestion avec authentification sécurisée.",
    image: "/projects/dashboard.jpg",
    link: "#",
  },
  {
    title: "Site vitrine",
    category: "Website",
    description: "Site responsive optimisé SEO pour entreprise locale.",
    image: "/projects/vitrine.jpg",
    link: "#",
  },
];

export function Projects({ projectsRef }: ProjectsProps) {
  return (
    <motion.section
      id="projects"
      ref={projectsRef}
      className="min-h-screen py-24"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== TITLE ===== */}
        <div className="flex items-center content-center gap-6 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 whitespace-nowrap leading-none">
            Mes Réalisations
          </h2>
          <span className="h-[2px] mt-3 w-40 bg-sky-900" />
        </div>

        {/* ===== GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[320px] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* IMAGE */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* CONTENT */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <span className="text-xs uppercase tracking-widest text-sky-300 mb-2">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-200 mb-4">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white w-fit"
                >
                  Voir le projet
                  <span className="p-2 rounded-full bg-white/20">
                    <FiArrowUpRight />
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
