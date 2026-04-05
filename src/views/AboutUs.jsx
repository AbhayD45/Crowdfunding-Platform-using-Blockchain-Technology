import React from 'react'
import { FaCodeBranch, FaLayerGroup, FaPaintBrush, FaServer } from 'react-icons/fa'

const team = [
  {
    name: 'Abhay Dalve',
    role: 'Blockchain Developer',
    icon: FaCodeBranch,
    summary:
      'Designs the smart-contract backbone, wallet flow, and on-chain funding rules that keep every pledge transparent and verifiable.',
    focus: 'Owns Solidity logic, milestone enforcement, and the Web3 contract integration layer.',
  },
  {
    name: 'Roshan Rajpure',
    role: 'Frontend Engineer',
    icon: FaPaintBrush,
    summary:
      'Shapes the product experience so campaign creation, contribution tracking, and wallet interactions stay clear for every user.',
    focus: 'Leads interface design, responsive React screens, and polished user journeys for founders and backers.',
  },
  {
    name: 'Rohan Gavai',
    role: 'Backend Engineer',
    icon: FaServer,
    summary:
      'Connects blockchain events with application services so data remains dependable, fast to read, and useful across the platform.',
    focus: 'Builds Node.js APIs, Web3 middleware, and the service layer that supports secure crowdfunding operations.',
  },
]

const spiritPoints = [
  'We build with shared ownership: each feature is reviewed through product, engineering, and user-trust lenses.',
  'We value transparency in the same way the platform does, keeping decisions visible and grounded in real user outcomes.',
  'We move as one team, blending blockchain depth, interface craft, and backend reliability into a single product mission.',
]

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#f3f3ef] px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="overflow-hidden rounded-[2rem] bg-black text-white shadow-2xl">
          <div className="grid gap-10 px-8 py-12 md:grid-cols-[1.15fr_0.85fr] md:px-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
                About our team
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Building trusted crowdfunding with code, craft, and accountability.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                Crowdfunding Platform using Blockchain Technology is a decentralized crowdfunding platform built to help startups and creators raise funds without relying on middlemen. We focus on secure transactions, transparent milestones, and an interface that makes Web3 funding feel understandable and reliable.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="interactive-lift-dark rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold">3</p>
                  <p className="mt-1 text-sm text-white/70">Core specialists aligned on one product vision</p>
                </div>
                <div className="interactive-lift-dark rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="mt-1 text-sm text-white/70">Focus on transparent funding and milestone-based trust</p>
                </div>
                <div className="interactive-lift-dark rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="mt-1 text-sm text-white/70">Shared commitment to secure and usable blockchain experiences</p>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[320px] items-end justify-center overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/20 to-white/5 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.28),_transparent_55%)]" />
              <div className="absolute bottom-0 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
              <div className="relative flex h-full w-full items-end justify-center">
                <div className="relative h-64 w-52 rounded-[999px] border border-white/20 bg-gradient-to-b from-white via-[#cacaca] to-[#666666] shadow-[0_30px_60px_rgba(0,0,0,0.4)] grayscale">
                  <div className="absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 rounded-full border border-black/20 bg-[#ededed]" />
                  <div className="absolute left-1/2 top-32 h-24 w-32 -translate-x-1/2 rounded-[45%] bg-[#d5d5d5]" />
                  <div className="absolute bottom-0 left-1/2 h-28 w-40 -translate-x-1/2 rounded-t-[48px] bg-[#8b8b8b]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-green-700">
                Meet the builders
              </span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">People behind the platform</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-gray-600">
              Each contributor brings a distinct engineering strength, but the product only works because those strengths are coordinated around trust, clarity, and dependable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {team.map((member) => {
              const Icon = member.icon

              return (
                <div
                  key={member.name}
                  className="interactive-lift overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-lg"
                >
                  <div className="relative flex h-64 items-end justify-center overflow-hidden bg-gradient-to-b from-[#f5f5f5] via-[#cfcfcf] to-[#707070]">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.38),transparent_55%)]" />
                    <div className="absolute top-8 flex h-28 w-28 items-center justify-center rounded-full border border-black/10 bg-white/70 text-6xl text-black/80 grayscale">
                      <Icon />
                    </div>
                    <div className="absolute bottom-0 h-28 w-36 rounded-t-[44px] bg-black/60" />
                    <div className="absolute bottom-20 h-20 w-20 rounded-full bg-white/70" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-green-700">
                      {member.role}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-gray-600">{member.summary}</p>
                    <div className="mt-5 rounded-2xl bg-gray-100 p-4 text-sm leading-6 text-gray-700">
                      {member.focus}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="interactive-lift rounded-[1.75rem] bg-white p-8 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                <FaLayerGroup />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-green-700">
                  Team spirit
                </p>
                <h2 className="mt-1 text-2xl font-bold text-gray-900">How we work together</h2>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {spiritPoints.map((point) => (
                <div key={point} className="interactive-lift rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-sm leading-7 text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="interactive-lift-dark rounded-[1.75rem] bg-black p-8 text-white shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Why this matters
            </p>
            <h2 className="mt-3 text-3xl font-bold">We are not just building a dApp, we are building funding confidence.</h2>
            <p className="mt-5 text-sm leading-7 text-white/75">
              Our team believes crowdfunding should be measurable, traceable, and safe for both creators and contributors. That is why we combine smart-contract logic, dependable backend services, and a clear frontend experience into one platform that turns trust from a promise into a visible system.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="interactive-lift-dark rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="font-semibold">Transparent execution</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Every transaction and milestone stays visible on-chain, reducing ambiguity for investors and founders.
                </p>
              </div>
              <div className="interactive-lift-dark rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="font-semibold">Product-first teamwork</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Engineering decisions are shaped together so the product remains secure, usable, and scalable at the same time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUs
