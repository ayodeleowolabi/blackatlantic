import { motion } from "framer-motion"

const imageAnim = {
  rest: { scale: 1, opacity: 0.35 },
  hover: { scale: 1.03, opacity: 0.95 },
}

const veilAnim = {
  rest: { opacity: 0.75 },
  hover: { opacity: 0.15 },
}

export default function PillarCard({
  title,
  subtitle,
  description,
  image,
  accentBorder,
  accentText,
}) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`group relative overflow-hidden rounded-2xl border bg-surface min-h-[540px] ${accentBorder}`}
    >
      {/* Background Image */}
      <motion.img
        variants={imageAnim}
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark veil */}
      <motion.div
        variants={veilAnim}
        className="absolute inset-0 bg-black"
      />

      {/* Gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative flex flex-col justify-end h-full p-8">
        <div className="mb-3 text-xs tracking-[0.28em] uppercase text-muted">
          {subtitle}
        </div>

        <h3 className={`text-2xl font-semibold ${accentText}`}>
          {title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          {description}
        </p>
      </div>
    </motion.article>
  )
}