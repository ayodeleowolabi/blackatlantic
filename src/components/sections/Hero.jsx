import { motion } from "framer-motion"

<motion.div
  className="absolute inset-0 pointer-events-none bg-black"
  initial={{ opacity: 0 }}
  animate={{ opacity: [0, 0.05, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
/>


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base">

      {/* 🎥 Background Video */}
<video
  className="absolute inset-0 w-full h-full object-cover"
  src="/videos/hero.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  poster="/images/hero-poster.jpg"
/>
<div className="absolute inset-0 pointer-events-none bg-black/10" />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-muted text-sm tracking-widest uppercase mb-4"
        >
          Culture · Music · History
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl text-primary leading-tight mb-6"
        >
          Black Atlantic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          A futurist cultural education and entertainment organization
          focused on the history and evolution of the African Diaspora.
        </motion.p>

        <motion.a
          href="/projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-block font-body text-sm tracking-widest uppercase border border-sahel text-sahel px-8 py-3 hover:bg-sahel hover:text-base transition-all duration-300"
        >
          Explore Our Work
        </motion.a>

      </div>

    </section>
  )
}