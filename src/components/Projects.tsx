"use client";

import { motion } from "framer-motion";

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLElement>;
}

export function Projects({ projectsRef }: ProjectsProps) {
  const projects = [
    { title: "Projet 1", description: "Description rapide du projet." },
    { title: "Projet 2", description: "Description rapide du projet." },
  ];

  return (
    <motion.section
      ref={projectsRef}
      className="min-h-screen max-w-5xl px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
    >
      <h3 className="text-3xl font-bold mb-6 text-sky-900">Mes projets</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(({ title, description }, i) => (
          <motion.div
            key={title}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(14,165,233,0.3)" }}
            animate={{ opacity: 1, y: 0, transition: { delay: i * 0.2 + 0.3 } }}
          >
            <h4 className="text-xl font-semibold mb-2 text-sky-800">{title}</h4>
            <p className="text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}