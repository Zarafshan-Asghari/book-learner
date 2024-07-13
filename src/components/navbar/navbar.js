import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/logo";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; // Import icons from React Icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuAndNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#f1faee]">
      <div className="max-w-6xl mx-auto px-4 py-4 md:px-8 md:py-0 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenuAndNav}>
            {isMenuOpen ? (
              <RiCloseLine className="text-[#e63946] w-8 h-8" />
            ) : (
              <RiMenuLine className="text-[#e63946] w-8 h-8" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-col md:flex-row md:items-center gap-6 py-8 capitalize">
          <li>
            <NavLink
              to="/"
              className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search-books"
              className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
            >
              books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-book"
              className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
            >
              add +
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden h-screen bg-[#f1faee]">
          <ul className="flex flex-col  gap-6 mt-8 px-4 py-2">
            <li>
              <NavLink
                to="/"
                className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
                onClick={toggleMenuAndNav}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
              >
                books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-book"
                className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
                onClick={toggleMenuAndNav}
              >
                Add book
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/local-book-search"
                className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
                onClick={toggleMenuAndNav}
              >
                books(local)
              </NavLink>
            </li>
            <li></li>
          </ul>
        </div>
      )}
    </div>
  );
}
