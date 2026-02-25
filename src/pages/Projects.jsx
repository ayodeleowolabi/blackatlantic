import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <p className="font-body text-muted text-sm tracking-widest uppercase mb-4">
          Our Work
        </p>
        <h1 className="font-display text-6xl text-primary">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            accentColor={project.accentColor}
            videoUrl={project.videoUrl}
            buttonLabel={project.buttonLabel}
            buttonLink={project.buttonLink}
            isExternal={project.isExternal}
          />
        ))}
      </div>

    </main>
  )
}

export default Projects;