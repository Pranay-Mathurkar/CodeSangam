import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Golden Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-transparent to-black blur-3xl pointer-events-none"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-[0_0_25px_rgba(255,215,0,0.4)] mb-10 text-center"
      >
        About Us
      </motion.h1>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl bg-gradient-to-br from-zinc-900/60 to-black/80 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-[0_0_30px_rgba(255,215,0,0.15)] border border-yellow-400/20"
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          <span className="text-yellow-400 font-semibold">Medico</span> — also known as{" "}
          <span className="text-yellow-500">The Alchemist’s Grimoire</span> — is an innovative
          wellness platform that transforms health management into a seamless, empowering
          experience.
        </p>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
          Inspired by the ancient art of alchemy, we blend technology and care to create a system
          that helps users manage medications, track wellness, and maintain balance in everyday
          life. Medico isn’t just a reminder — it’s your digital companion for mindful health.
        </p>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Our goal is simple yet powerful: to redefine healthcare through elegance, innovation, and
          empathy. With a sleek golden interface and a focus on user well-being, Medico turns daily
          routines into acts of self-care and transformation.
        </p>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-12 text-yellow-500 text-lg italic tracking-wide"
      >
        “Where wellness meets alchemy.”
      </motion.p>
    </section>
  );
}
