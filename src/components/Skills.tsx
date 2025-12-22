"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  // FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";

/* ================= TYPES ================= */

interface Skill {
  name: string;
  level: number;
  icon: ReactNode;
}

/* ================= DATA ================= */

const frontendSkills: Skill[] = [
  { name: "HTML / CSS", level: 80, icon: <FaHtml5 /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss /> },
  { name: "Next.js", level: 50, icon: <SiNextdotjs /> },
  { name: "JavaScript", level: 45, icon: <FaReact /> },
  { name: "React", level: 20, icon: <FaReact /> },
  { name: "TypeScript", level: 10, icon: <SiTypescript /> },
  
];

const backendSkills: Skill[] = [
  { name: "Git", level: 80, icon: <FaGitAlt /> },
  { name: "Django", level: 60, icon: <FaNodeJs /> },
  { name: "MySQL", level: 25, icon: <SiMongodb /> },
];

/* ================= COMPONENTS ================= */

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-sky-800 font-medium">
          <span className="text-lg">{skill.icon}</span>
          {skill.name}
        </div>
        <span className="text-sm font-semibold text-gray-600">
          {skill.level}%
        </span>
      </div>

      <div className="h-2 bg-sky-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-sky-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

/* ================= MAIN SECTION ================= */

export function Skills() {
  return (
    <section className="py-24 -pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== TITLE ===== */}
        <div className="flex items-center justify-center gap-6 mb-20">
          <span className="h-[2px] w-20 mt-3 bg-sky-900" />
          <h2 className="text-4xl font-extrabold text-sky-900 whitespace-nowrap">
            Compétences
          </h2>
          <span className="h-[2px] w-20 mt-3 bg-sky-900" />
        </div>

        {/* ===== GRIDS ===== */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* FRONTEND */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-sky-50 rounded-2xl p-10 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl text-sky-800 mb-10">
              Développement Frontend
            </h3>

            <div className="space-y-8">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-sky-50 rounded-2xl p-10 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl text-sky-800 mb-10">
              Développement Backend
            </h3>

            <div className="space-y-8">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
