import LandingInfo from '../components/LandingInfo'

const InfoPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f1] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="interactive-lift rounded-[2rem] bg-white p-8 shadow-xl md:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-green-700">
            Info page
          </span>
          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Platform details for Crowdfunding Platform using Blockchain Technology
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
            Understand the product architecture, smart-contract workflow, transparency model, backend support, frontend experience, and wallet-based user journey in one focused page.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <LandingInfo />
      </div>
    </div>
  )
}

export default InfoPage