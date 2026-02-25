import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const accentColors = {
  sahel: 'border-sahel',
  aerials: 'border-aerials',
  afrocidade: 'border-afrocidade',
}

const accentText = {
  sahel: 'text-sahel',
  aerials: 'text-aerials',
  afrocidade: 'text-afrocidade',
}

const accentBg = {
  sahel: 'hover:bg-sahel',
  aerials: 'hover:bg-aerials',
  afrocidade: 'hover:bg-afrocidade',
}

export default function ProjectCard({
  title,
  description,
  accentColor,
  videoUrl,
  buttonLabel,
  buttonLink,
  isExternal,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`bg-surface border-t-2 ${accentColors[accentColor]} p-6 flex flex-col gap-6`}
    >

      {/* Video Embed */}
      <div className="w-full aspect-video">
        <iframe
          src={videoUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-3">
        <h2 className={`font-display text-3xl ${accentText[accentColor]}`}>
          {title}
        </h2>
        <p className="font-body text-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Button */}
      {isExternal ? (
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`self-start font-body text-xs tracking-widest uppercase border ${accentColors[accentColor]} ${accentText[accentColor]} px-6 py-2 ${accentBg[accentColor]} hover:text-base transition-all duration-300`}
       >
          {buttonLabel}
        </a>
      ) : (
        <Link
          to={buttonLink}
          className={`self-start font-body text-xs tracking-widest uppercase border ${accentColors[accentColor]} ${accentText[accentColor]} px-6 py-2 ${accentBg[accentColor]} hover:text-base transition-all duration-300`}
        >
          {buttonLabel}
        </Link>
      )}

    </motion.div>
  )
}