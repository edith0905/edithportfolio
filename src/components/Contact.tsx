"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

interface ContactProps {
  contactRef: React.RefObject<HTMLElement | null>;
}

export function Contact({ contactRef }: ContactProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <motion.section
      id="contact"
      ref={contactRef}
      className="min-h-screen bg-white flex items-center py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
         {/* ===== TITLE ===== */}
          <div className="flex items-center content-center gap-6 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 whitespace-nowrap leading-none">
              Contact
            </h2>
            <span className="h-[2px] mt-3 w-40 bg-sky-900" />
          </div>
          <div className="grid md:grid-cols-2 gap-10">

            {/* ================= LEFT CARD ================= */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-sky-600 text-white rounded-2xl p-10 shadow-xl"
            >
              <h3 className="text-3xl font-bold mb-4">
                Contact Info
              </h3>

              <p className="text-sky-100 mb-10">
                Une idée, un projet ou une collaboration ?
                N’hésitez pas à me contacter.
              </p>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Localisation
                    </h4>
                    <p className="text-sm text-sky-100">
                      Lomé, Togo
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <FiPhone />
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Téléphone
                    </h4>
                    <p className="text-sm text-sky-100">
                      +228 90 00 00 00
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Email
                    </h4>
                    <p className="text-sm text-sky-100">
                      ama@email.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================= RIGHT CARD ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-sky-50 rounded-2xl p-10 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-sky-900 mb-4">
                Entrer en contact
              </h3>

              <p className="text-gray-500 mb-8">
                Envoyez-moi un message et je vous répondrai rapidement.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    name="name"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-600 outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-600 outline-none"
                  />
                </div>

                <input
                  name="subject"
                  placeholder="Sujet"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-600 outline-none"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Votre message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-600 outline-none resize-none"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-10 py-3 bg-sky-600 text-white rounded-full font-medium hover:bg-sky-700 transition"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
      </div>
    </motion.section>
  );
}
