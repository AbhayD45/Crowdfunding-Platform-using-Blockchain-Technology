import { useEffect } from 'react'
import AddButton from '../components/AddButton'
import CreateProject from '../components/CreateProject'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'

const quickLinks = [
  {
    title: 'Projects',
    description:
      'Explore active campaigns, funding goals, and creator stories in a dedicated projects page.',
    to: '/projects',
  },
  {
    title: 'Backing',
    description:
      'Understand how supporters contribute, how payouts are protected, and how backers track progress.',
    to: '/backing',
  },
  {
    title: 'Info',
    description:
      'Read the complete product overview, architecture story, and platform benefits in one place.',
    to: '/info',
  },
]

const Home = () => {
  const [projects] = useGlobalState('projects')

  useEffect(() => {
    const fetchProjects = async () => {
      await loadProjects()
    }

    fetchProjects()
  }, [])

  return (
    <div className="bg-[#f5f5f1] pt-28">
      <section>
        <Hero />
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-green-700">
                  Platform navigation
                </span>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                  Visit each part of the Crowdfunding Platform using Blockchain Technology
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-gray-600">
                Each headline now opens a dedicated page, making it easier to focus on campaigns, investor backing, technical platform information, and the team behind the product.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className="interactive-lift rounded-[1.5rem] border border-black/5 bg-[#f6f6f2] p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-700">
                    {item.title}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-gray-900 transition duration-300 hover:text-green-700">
                    {item.title} Page
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-gray-600">{item.description}</p>
                </Link>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="interactive-lift rounded-2xl bg-black p-5 text-white">
                <p className="text-2xl font-bold">{projects.length}</p>
                <p className="mt-2 text-sm text-white/75">Campaigns already loaded for browsing and contribution</p>
              </div>
              <div className="interactive-lift rounded-2xl bg-white p-5 shadow-lg">
                <p className="text-2xl font-bold text-gray-900">Smart</p>
                <p className="mt-2 text-sm text-gray-600">Separate pages make the experience easier to scan without mixing every topic into one landing screen.</p>
              </div>
              <div className="interactive-lift rounded-2xl bg-white p-5 shadow-lg">
                <p className="text-2xl font-bold text-gray-900">Visual</p>
                <p className="mt-2 text-sm text-gray-600">Hover animations now add motion and emphasis across navigation pills, cards, and content boxes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CreateProject />
      <AddButton />
    </div>
  )
}

export default Home
