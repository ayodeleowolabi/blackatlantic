import { motion } from "framer-motion"

const borderByAccent = {
  sahel: "border-sahel",
  aerials: "border-aerials",
  afrocidade: "border-afrocidade",
}

const titleByAccent = {
  sahel: "text-sahel",
  aerials: "text-aerials",
  afrocidade: "text-afrocidade",
}

export default function PillarCard({
  title,
  subtitle,
  description,
  imageUrl,
  accentColor = "sahel",
}) {
  return (
    <article
      className={[
        "bg-surface overflow-hidden",
        "border-2 rounded-none", // rectangle borders
        borderByAccent[accentColor],
      ].join(" ")}
    >
      {/* Title + subtitle ALWAYS visible */}
      <header className="p-6 pb-4">
        <h3
          className={[
            "font-display text-3xl md:text-4xl leading-tight",
            titleByAccent[accentColor],
          ].join(" ")}
        >
          {title}
        </h3>

        <p className="font-body mt-2 text-xs tracking-[0.35em] uppercase text-muted">
          {subtitle}
        </p>
      </header>

      {/* Image area (hover affects only image/veil) */}
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
      >
        <motion.img
          variants={{
            rest: { scale: 1, opacity: 0.95 },
            hover: { scale: 1.03, opacity: 1 },
          }}
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        <motion.div
          variants={{
            rest: { opacity: 0.35 },
            hover: { opacity: 0.12 },
          }}
          className="absolute inset-0 bg-black"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/35" />
      </motion.div>

      {/* Description */}
      <div className="p-6">
        <p className="font-body text-sm leading-relaxed text-primary/80">
          {description}
        </p>
      </div>
    </article>
  )
}