"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  accueilRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function Hero({ accueilRef, projectsRef }: HeroProps) {
  return (
    <motion.section
      id="accueil"
      ref={accueilRef}
      className="min-h-screen flex items-center px-6 max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-x-6 items-center w-full">

        {/* TEXTE – STYLE INCHANGÉ */}
        <div>
          <motion.h1
            className="text-3xl md:text-6xl font-extrabold text-sky-900 mb-6 text-nowrap"
            variants={fadeUp}
          >
            Développeuse Web <br />
            <span className="block mt-2 text-2xl md:text-5xl text-sky-600">
              Créative & Passionnée
            </span>
          </motion.h1>


          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10"
            variants={fadeUp}
          >
            Je conçois des expériences digitales modernes, performantes et
            élégantes. Je transforme vos idées en
            solutions concrètes.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={fadeUp}>
            <motion.button
              onClick={() =>
                projectsRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-sky-600 text-white rounded-full font-medium hover:bg-sky-700 cursor-pointer transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir mes réalisations
            </motion.button>

            <motion.a
              href="/EHLO-Edith-CV.pdf"
              className="px-8 py-4 border border-sky-600 text-sky-600 rounded-full font-medium hover:bg-sky-50 transition"
              whileHover={{ scale: 1.05 }}
            >
              Télécharger mon CV
            </motion.a>
          </motion.div>
        </div>

        {/* IMAGE – À DROITE */}
        <motion.div
          variants={fadeUp}
          className="relative flex justify-center md:justify-end"
        >
          {/* CADRE ARRIÈRE */}
          <div className="absolute z-0 w-[340px] h-[340px] md:w-[380px] md:h-[380px] rounded-xl bg-sky-600 translate-x-4 translate-y-4 opacity-20" />

          {/* IMAGE */}
          <div className="relative z-10 w-[340px] h-[340px] md:w-[380px] md:h-[380px] rounded-xl overflow-hidden shadow-xl border border-sky-200 bg-white ">
            <Image
              src="/photos/profile.jpg"
              alt="Edith EHLO"
              fill
              priority
              className="object-cover object-[50%_13%]"
            />
          </div>
        </motion.div>


      </div>
    </motion.section>
  );
}
