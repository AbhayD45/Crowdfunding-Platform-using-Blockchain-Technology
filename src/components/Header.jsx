import { TbBusinessplan } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { connectWallet } from "../services/blockchain";
import { truncate, useGlobalState } from "../store";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Backing", to: "/backing" },
  { label: "Info", to: "/info" },
  { label: "About Us", to: "/about-us" },
];

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/5
        bg-white/95 backdrop-blur"
    >
      <div
        className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4
          md:flex-row md:items-center md:justify-between"
      >
        <Link
          to="/"
          className="flex max-w-xl items-center justify-start space-x-2
            text-sm font-semibold leading-tight text-black transition duration-300 hover:text-green-700 md:text-base lg:text-lg"
        >
          <TbBusinessplan className="shrink-0 text-xl text-green-600 md:text-2xl" />
          <span>Crowdfunding Platform</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-700 md:gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `nav-raise rounded-full px-3 py-2 ${
                  isActive ? "bg-black text-white shadow-lg" : "bg-transparent text-gray-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex justify-center space-x-2 md:justify-end">
          {connectedAccount ? (
            <button
              type="button"
              className="inline-block rounded-full bg-green-600 px-6 py-2.5
                text-xs font-medium uppercase leading-tight text-white shadow-md hover:bg-green-700"
            >
              {truncate(connectedAccount, 4, 4, 11)}
            </button>
          ) : (
            <button
              type="button"
              className="inline-block rounded-full bg-green-600 px-6 py-2.5
                text-xs font-medium uppercase leading-tight text-white shadow-md hover:bg-green-700"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
