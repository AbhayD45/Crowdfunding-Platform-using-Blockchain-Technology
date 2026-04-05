import { Link } from "react-router-dom";
import { setGlobalState, useGlobalState } from "../store";
const Hero = () => {
  const [stats] = useGlobalState("stats");

  return (
    <div className="text-center bg-white text-gray-800 py-24 px-6">
      <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
        <span className="capitalize">
          Empowering dreams and funding futures through
        </span>
        <br />
        <span className="text-green-600">Crowdfunding Platform using Blockchain Technology</span>
      </h1>
      <p className="mx-auto mb-12 max-w-4xl text-sm leading-7 text-gray-600 md:text-base">
        A decentralized crowdfunding experience for startups, creators, angel investors, and supporters who want funding records, milestone logic, and secure wallet-driven participation without opaque intermediaries.
      </p>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md transition duration-300 hover:-translate-y-1 hover:bg-green-700"
          onClick={() => setGlobalState("createModal", "scale-100")}
        >
          Add Project
        </button>

        <Link
          to="/projects"
          className="inline-block px-6 py-2.5 border border-green-600
        font-medium text-xs leading-tight uppercase text-green-600
        rounded-full shadow-md bg-transparent transition duration-300 hover:-translate-y-1 hover:bg-green-700
        hover:text-white"
        >
          Back Projects
        </Link>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div
          className="interactive-lift flex flex-col justify-center items-center
          h-24 border shadow-md w-full rounded-2xl"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Projects</span>
        </div>
        <div
          className="interactive-lift flex flex-col justify-center items-center
          h-24 border shadow-md w-full rounded-2xl"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div
          className="interactive-lift flex flex-col justify-center items-center
          h-24 border shadow-md w-full rounded-2xl"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
