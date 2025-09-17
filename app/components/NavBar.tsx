import { useState } from "react";
import { NavLink } from "react-router";
import { FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = "text-blue-600 font-semibold";
  const baseStyle =
    " transition-colors duration-200 hover:text-blue-600 inline-block min-w-[70px] text-center";

  return (
    <nav className={`sticky top-0 z-50 bg-gray-800 text-gray-300 shadow-lg`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        <NavLink to="/" className="flex items-center gap-4 text-blue-600">
          <FaLaptopCode className="text-2xl" />
          <span className="text-xl font-semibold">Friendly Dev</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <div className="flex items-center gap-8">
            <NavLink
              className={({ isActive }) =>
                isActive ? `${baseStyle} ${activeStyle}` : baseStyle
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${baseStyle} ${activeStyle}` : baseStyle
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${baseStyle} ${activeStyle}` : baseStyle
              }
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${baseStyle} ${activeStyle}` : baseStyle
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${baseStyle} ${activeStyle}` : baseStyle
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer border-none text-xl leading-none text-blue-500 focus:outline-none active:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`w-full bg-gray-800 px-4 text-center shadow-lg md:hidden`}
        >
          <div className="flex flex-col items-center justify-center gap-8 py-6">
            <NavLink
              className={({ isActive }) =>
                isActive ? `${baseStyle} ${activeStyle}` : baseStyle
              }
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${baseStyle} ${activeStyle}` : baseStyle
              }
              to="/projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${baseStyle} ${activeStyle}` : baseStyle
              }
              to="/blog"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${baseStyle} ${activeStyle}` : baseStyle
              }
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${baseStyle} ${activeStyle}` : baseStyle
              }
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
