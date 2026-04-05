import { FaDatabase, FaFileContract, FaLink, FaNodeJs, FaWallet } from 'react-icons/fa'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'

const features = [
  {
    title: 'Decentralization and transparency',
    description:
      'Built on blockchain to provide a tamper-proof ledger of transactions, reducing fraud and improving accountability for fundraisers and investors.',
    icon: FaLink,
  },
  {
    title: 'Smart contracts with Solidity',
    description:
      'Ethereum-based contracts automate collection, disbursement, and milestone conditions so funding logic is enforced by code.',
    icon: FaFileContract,
  },
  {
    title: 'Secure fund management',
    description:
      'Milestone-based payouts reduce misuse of capital by releasing funds only when founders show measurable progress.',
    icon: FaDatabase,
  },
  {
    title: 'Backend with Node.js',
    description:
      'REST APIs and Web3 middleware connect the application layer with on-chain activity for dependable operations and data flow.',
    icon: FaNodeJs,
  },
  {
    title: 'Frontend with React.js',
    description:
      'A responsive interface helps founders launch campaigns, investors contribute funds, and everyone track funding progress in real time.',
    icon: TbDeviceDesktopAnalytics,
  },
  {
    title: 'Wallet integration',
    description:
      'MetaMask and Ethereum wallet support enables secure direct participation without handing custody to a third-party platform.',
    icon: FaWallet,
  },
]

const extraPoints = [
  'Immutable audit trails make every important transaction easier to verify.',
  'Direct peer-to-peer funding removes extra intermediaries from campaign participation.',
  'Real-time campaign visibility helps both creators and supporters act with better context.',
]

const LandingInfo = () => (
  <div className="mx-auto max-w-7xl px-6">
    <div className="rounded-[2rem] bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-green-700">
            Platform information
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Crowdfunding Platform using Blockchain Technology
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
            This decentralized web application is designed to help startups and individuals raise funds securely from small lenders, angel investors, and venture capitalists. Unlike traditional crowdfunding systems, Crowdfunding Platform using Blockchain Technology uses immutable blockchain records to remove unnecessary intermediaries and strengthen trust across every campaign.
          </p>

          <div className="mt-8 rounded-[1.5rem] bg-black p-6 text-white">
            <h3 className="text-xl font-semibold">Why the model works</h3>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Transparent records, automated smart contracts, and secure wallet-based funding create a system where campaign activity stays visible and payouts are tied to accountable delivery.
            </p>
            <div className="mt-6 space-y-3">
              {extraPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/75">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="interactive-lift rounded-[1.5rem] border border-black/5 bg-[#f6f6f2] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </div>
)

export default LandingInfo