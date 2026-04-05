import { FaArrowRight, FaEthereum, FaHandshake, FaShieldAlt } from 'react-icons/fa'
import { useGlobalState } from '../store'

const supportPoints = [
  {
    title: 'Direct investor participation',
    description:
      'Backers connect their wallets directly and support projects without handing control to a centralized intermediary.',
    icon: FaHandshake,
  },
  {
    title: 'Milestone-led security',
    description:
      'Smart-contract driven releases help prevent misuse of funds by tying payout access to delivery and project progress.',
    icon: FaShieldAlt,
  },
  {
    title: 'Transparent capital flow',
    description:
      'Every contribution, status update, and payout can be audited through the blockchain-backed transaction history.',
    icon: FaEthereum,
  },
]

const BackingOverview = ({ projects }) => {
  const [stats] = useGlobalState('stats')
  const featuredProjects = projects.slice(0, 3)

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="interactive-lift-dark rounded-[1.75rem] bg-black p-8 text-white shadow-xl">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
          Backing confidence
        </span>
        <h2 className="mt-3 text-3xl font-bold leading-tight">
          Support promising founders through a funding flow designed for accountability.
        </h2>
        <p className="mt-5 text-sm leading-7 text-white/75">
          Crowdfunding Platform using Blockchain Technology gives backers a clearer view of where money goes, how campaigns are progressing, and when creators become eligible for payouts. The result is a stronger balance between opportunity and investor protection.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="interactive-lift-dark rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-bold">{stats?.totalBacking || 0}</p>
            <p className="mt-2 text-sm text-white/70">Total backings recorded on-chain</p>
          </div>
          <div className="interactive-lift-dark rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-bold">{stats?.totalDonations || 0} ETH</p>
            <p className="mt-2 text-sm text-white/70">Transparent community funding volume</p>
          </div>
          <div className="interactive-lift-dark rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-bold">{featuredProjects.length}</p>
            <p className="mt-2 text-sm text-white/70">Featured campaigns highlighted below</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-3">
          {supportPoints.map((point) => {
            const Icon = point.icon

            return (
              <div
                key={point.title}
                className="interactive-lift rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{point.description}</p>
              </div>
            )
          })}
        </div>

        <div className="interactive-lift rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-lg">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-700">
                Funding snapshot
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                What active backing looks like on the platform
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-gray-600">
              Backers can review campaign momentum, compare funding goals, and choose where to contribute with fewer blind spots.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.id} className="interactive-lift rounded-2xl bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-900">{project.title}</p>
                <p className="mt-2 text-sm text-gray-600">
                  Raised {project.raised} ETH of {project.cost} ETH target with {project.backers} backer{project.backers === 1 ? '' : 's'}.
                </p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-green-600"
                    style={{ width: `${Math.min((project.raised / project.cost) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
            Smart-contract protected backing journey
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackingOverview