"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

interface AboutProps {
  aboutRef: React.RefObject<HTMLElement | null>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function About({ aboutRef }: AboutProps) {
  return (
    <motion.section
      ref={aboutRef}
      id="about"
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
    >
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* TITLE */}
        <div className="flex items-center content-center gap-6 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 whitespace-nowrap leading-none">
            A Propos de moi
          </h2>
          <span className="h-[2px] mt-3 w-40 bg-sky-900" />
        </div>

        <div className="grid md:grid-cols-2 gap-y-20 pl-30">
          {/* LEFT COLUMN */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* PHOTO */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-60 h-60">
                <Image
                  src="/photos/profile.jpg"
                  alt="Ama Kuatcha"
                  fill
                  className="object-cover rounded-full border-4 border-sky-200 shadow-xl"
                />
              </div>
            </div>

            {/* EDUCATION */}
            <div>
              <h3 className="flex items-center gap-3 text-2xl font-semibold text-sky-800 mb-10">
                <FaGraduationCap /> Education
              </h3>

              <div className="relative pl-8 border-l border-sky-200 space-y-10">
                {/* ITEM */}
                <div className="relative">
                  <span className="absolute -left-[10px] top-1 w-4 h-4 bg-sky-600 rounded-full" />
                  <span className="inline-block mb-2 px-3 py-1 text-sm font-semibold text-sky-700 bg-sky-100 rounded-full">
                    2021 – 2022
                  </span>
                  <h4 className="font-semibold text-gray-900">
                    Formation Développement Web
                  </h4>
                  <p className="text-gray-600 text-sm">
                    HTML, CSS, JavaScript, React
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[10px] top-1 w-4 h-4 bg-sky-600 rounded-full" />
                  <span className="inline-block mb-2 px-3 py-1 text-sm font-semibold text-sky-700 bg-sky-100 rounded-full">
                    En continu
                  </span>
                  <h4 className="font-semibold text-gray-900">
                    Auto-formation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Next.js, SEO, performance, bonnes pratiques
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* INTRO */}
            <h3 className="text-2xl md:text-3xl font-bold text-sky-900 mb-6">
              Je suis <span className="text-sky-600">Ama Kuatcha</span>
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-16">
              Développeuse web passionnée par la création d’interfaces
              modernes, performantes et élégantes.  
              J’aide les entreprises et entrepreneurs à concrétiser
              leurs idées digitales avec React et Next.js.
            </p>

            {/* EXPERIENCE */}
            <div>
              <h3 className="flex items-center gap-3 text-2xl font-semibold text-sky-800 mb-10">
                <FaBriefcase /> Expériences
              </h3>

              <div className="relative pl-8 border-l border-sky-200 space-y-12">
                <div className="relative">
                  <span className="absolute -left-[10px] top-1 w-4 h-4 bg-sky-600 rounded-full" />
                  <span className="inline-block mb-2 px-3 py-1 text-sm font-semibold text-sky-700 bg-sky-100 rounded-full">
                    2023 – Présent
                  </span>
                  <h4 className="font-semibold text-gray-900">
                    Développeuse Web – Freelance
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
                    <li>Applications web modernes</li>
                    <li>Dashboards & sites vitrine</li>
                    <li>Optimisation performance & SEO</li>
                  </ul>
                </div>

                <div className="relative">
                  <span className="absolute -left-[10px] top-1 w-4 h-4 bg-sky-600 rounded-full" />
                  <span className="inline-block mb-2 px-3 py-1 text-sm font-semibold text-sky-700 bg-sky-100 rounded-full">
                    2022 – 2023
                  </span>
                  <h4 className="font-semibold text-gray-900">
                    Intégratrice Frontend
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
                    <li>Next.js & Tailwind CSS</li>
                    <li>UI responsive & animations</li>
                    <li>Collaboration avec designers</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
