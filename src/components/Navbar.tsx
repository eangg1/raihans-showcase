import { Sun, Moon, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100 dark:bg-gray-800 shadow-md py-6 backdrop-blur-md bg-opacity-90">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold text-gray-900 dark:text-white"
          onClick={() => setOpen(false)}
        >
          Raihan's Showcase
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 font-medium text-[17px]">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/films" className="hover:text-blue-500">Films</Link>
          <Link to="/music" className="hover:text-blue-500">Music</Link>
          <Link to="/books" className="hover:text-blue-500">Books</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* ===== DARK MODE (UNCHANGED STYLE) ===== */}
          <button
            onClick={toggleMode}
            className="relative w-14 h-8 flex items-center rounded-full transition-all duration-500 
                      bg-gray-300 dark:bg-gray-600 hover:scale-105 border border-gray-400 dark:border-gray-700"
          >
            <span
              className={`absolute left-1 top-1 w-6 h-6 rounded-full flex items-center justify-center 
                          bg-white dark:bg-gray-900 shadow-md transform transition-all duration-500
                          ${darkMode ? "translate-x-6" : "translate-x-0"}`}
            >
              {darkMode ? (
                <Moon className="w-4 h-4 text-gray-100" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-400" />
              )}
            </span>
          </button>

          {/* ===== HAMBURGER (mobile only) ===== */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {open && (
        <div className="md:hidden border-t dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
          <div className="flex flex-col px-6 py-4 gap-4 font-medium">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link to="/films" onClick={() => setOpen(false)}>Films</Link>
            <Link to="/music" onClick={() => setOpen(false)}>Music</Link>
            <Link to="/books" onClick={() => setOpen(false)}>Books</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
