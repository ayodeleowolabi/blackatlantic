import { motion } from "framer-motion"
import PillarCard from "../components/ui/PillarCard"
import { pillars } from "../data/about"

function About() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
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
          className="font-display text-6xl md:text-7xl text-primary leading-tight mb-6"
        >
          Pillars of Black Atlantic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-muted text-lg max-w-2xl mx-auto mb-12"
        >
          Black Atlantic is a futurist cultural education and entertainment organization
          focused on the history and evolution of the African Diaspora.
        </motion.p>

        {/* Portugal Seal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-2xl mx-auto h-96 md:h-[480px] flex items-center justify-center border border-white/10 rounded-sm"
        >
          <img
            src="/images/portugalseal.png"
            alt="Portugal Seal"
            className="w-full h-full opacity-90"
          />
        </motion.div>

         <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-muted text-sm pt-2 font-style italic tracking-widest mb-4"
        >
          seal - slave port in lisbon portugal
        </motion.p>
        
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <PillarCard
              title={pillar.title}
              subtitle={pillar.subtitle}
              description={pillar.description}
              imageUrl={pillar.imageUrl}
              accentColor={pillar.accentColor}
            />
          </motion.div>
        ))}
      </div>

    </main>
  )
}

export default About