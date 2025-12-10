"use client";

import { motion } from "framer-motion";

interface AboutProps {
  aboutRef: React.RefObject<HTMLElement>;
}

export function About({ aboutRef }: AboutProps) {
  return (
    <motion.section
      ref={aboutRef}
      className="min-h-screen max-w-3xl px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
    >
      <h3 className="text-3xl font-bold mb-6 text-sky-900">À propos</h3>
      <p className="text-gray-700 leading-relaxed text-lg">
        Je suis un développeur passionné par la création d&apos;applications modernes et performantes.
      </p>
    </motion.section>
  );
}