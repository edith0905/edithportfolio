"use client";

import { motion } from "framer-motion";

interface ContactProps {
  contactRef: React.RefObject<HTMLElement>;
}

export function Contact({ contactRef }: ContactProps) {
  return (
    <motion.section
      ref={contactRef}
      className="min-h-screen max-w-3xl px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
    >
      <h3 className="text-3xl font-bold mb-6 text-sky-900">Contact</h3>
      <form className="flex flex-col gap-6 max-w-md">
        <input
          type="text"
          placeholder="Nom"
          className="px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-300 outline-none transition"
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-300 outline-none transition"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-300 outline-none transition resize-none"
        />
        <motion.button
          type="submit"
          className="px-6 py-3 bg-sky-700 rounded-full text-white font-semibold hover:bg-sky-900/90 transition"
          whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgb(14 165 233)" }}
          whileTap={{ scale: 0.95 }}
        >
          Envoyer
        </motion.button>
      </form>
    </motion.section>
  );
}