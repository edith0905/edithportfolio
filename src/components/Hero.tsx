"use client";

import { motion } from "framer-motion";

interface HeroProps {
  projectsRef: React.RefObject<HTMLElement>;
}

export function Hero({ projectsRef }: HeroProps) {
  // Variants simplifiés pour éviter les erreurs de type
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-start text-start max-w-3xl px-6"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }} // Variants pour stagger (décalage des enfants)
    >
      <motion.h2
        className="text-5xl font-extrabold mb-4 text-sky-900/90"
        variants={fadeUp}
        transition={{ delay: 0 }} // Delay manuel au lieu de custom
      >
        Créative <span className="text-sky-700">et Développeuse</span>
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 mb-8"
        variants={fadeUp}
        transition={{ delay: 0.2 }} // Delay pour stagger
      >
        I create digital experiences that inspire and engage. <br />
        With a passion for clean design and innovative solutions,<br />
        I transform ideas into beautiful, functional realities.
      </motion.p>
      <motion.button
        onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}
        className="px-6 py-3 bg-sky-700 rounded-full text-white hover:bg-sky-900/90 transition"
        variants={fadeUp}
        transition={{ delay: 0.4 }} // Delay pour stagger
        whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgb(14 165 233)" }}
        whileTap={{ scale: 0.95 }}
      >
        Voir mes projets
      </motion.button>
    </motion.section>
  );
}