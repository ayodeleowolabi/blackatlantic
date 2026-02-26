import { motion } from "framer-motion"

function Afrocidade() {
  return (
    <main className="pt-24 px-6 max-w-4xl mx-auto pb-24">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-body text-muted text-sm tracking-widest uppercase mb-4 text-center"
      >
        Culture · Music · History
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-6xl md:text-7xl text-primary leading-tight mb-12 text-center"
      >
        Afrocidade
      </motion.h1>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        src="https://cdn.prod.website-files.com/604788cee1d4433eb9ef4d73/66cbe360a16cc5da67470593_Afrocidade%20Poster_Final_test%20optimized2-min.png"
        alt="Afrocidade Poster"
        className="w-full max-w-xl mx-auto block mb-16 rounded-sm"
      />

      {/* Pull Quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="border-l-2 border-primary pl-6 mb-16 text-muted font-body leading-relaxed italic"
      >
        "What's a better way to understand the deep connection between Washington, DC, and Brazil
        than through Afrocidade? On Friday night, the multicultural group gave the audience an
        exhilarating look into the shared culture and history between DC and Salvador Bahia in
        Brazil through song and dance..."
        <span className="block mt-4 not-italic text-sm tracking-widest uppercase text-primary">
          — DC Theater Arts
        </span>
      </motion.blockquote>

      {/* Content */}
      <Section title="Content" delay={0.6}>
        <p>
          How are Washington DC and Brazil's Salvador Bahia connected? All is revealed in Afrocidade,
          a unique, original, and entertaining performance exploring in music, song, dance and stories,
          the shared culture and history between these seemingly very different places.
        </p>
        <p>
          Powered by a 10 piece ensemble of musicians, vocalists, dancers and narrators, Afrocidade
          interprets the music of popular Bahian artists like Gilberto Gil, Olodum, Caetano Velloso,
          Luedji Luna and more to recount the explosion of Black consciousness in Salvador from its
          onset with the Samba ensemble Ile Aiye in 1974 to the present.
        </p>
        <p>
          A musical production that is more than a concert and not quite a musical, Afrocidade is a
          real time cultural bridge, an elegy to ancestry, a revelation of erased history and a
          clarion call for a better, more empathetic future.
        </p>
      </Section>

      {/* Background */}
      <Section title="Background" delay={0.7}>
        <p>
          In the cities of Washington DC and Salvador, Bahia Brazil, the historically Black majority
          residents have christened their homes "Chocolate City" and "Afrocidade" (Afro-City)
          respectively — referring not only to their Black majorities but to their distinct
          Afro-descendant contributions that shaped the national cultures of both the United States
          and Brazil.
        </p>
        <p>
          The first pioneer to link DC and Salvador through this cultural lens was Dr. Lorenzo Dow
          Turner, whose 1940–41 research in Salvador underscores the Afrocidade production. A
          graduate and later department head at Howard University, Dr. Turner was the first African
          American with professional training in linguistics.
        </p>
        <p className="text-primary font-body italic">
          "If all races were made aware of the offerings of Africans and their New World descendants,
          a better world would develop." — Dr. Lorenzo Turner
        </p>
      </Section>

    </main>
  )
}

function Section({ title, children, delay }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.2 }}
      className="mb-16"
    >
      <h2 className="font-display text-3xl text-primary mb-6 tracking-wide">{title}</h2>
      <div className="font-body leading-relaxed text-muted space-y-4">
        {children}
      </div>
    </motion.section>
  )
}

export default Afrocidade