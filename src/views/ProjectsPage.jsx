import { useEffect } from 'react'
import AddButton from '../components/AddButton'
import CreateProject from '../components/CreateProject'
import Projects from '../components/Projects'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'

const ProjectsPage = () => {
  const [projects] = useGlobalState('projects')

  useEffect(() => {
    const fetchProjects = async () => {
      await loadProjects()
    }

    fetchProjects()
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f1] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="interactive-lift rounded-[2rem] bg-white p-8 shadow-xl md:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-green-700">
            Projects page
          </span>
          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Explore campaigns on Crowdfunding Platform using Blockchain Technology
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
            Review the live crowdfunding opportunities, compare their progress, and back the founders whose milestones and vision align with your interests.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Projects projects={projects} />
      </div>

      <CreateProject />
      <AddButton />
    </div>
  )
}

export default ProjectsPage