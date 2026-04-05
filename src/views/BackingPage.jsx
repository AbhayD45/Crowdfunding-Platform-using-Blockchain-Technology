import { useEffect } from 'react'
import BackingOverview from '../components/BackingOverview'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'

const BackingPage = () => {
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
            Backing page
          </span>
          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Learn how protected backing works on Crowdfunding Platform using Blockchain Technology
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
            This page focuses on investor participation, secure fund movement, and the milestone logic that keeps campaign support measurable and transparent.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <BackingOverview projects={projects} />
      </div>
    </div>
  )
}

export default BackingPage