import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import { Sun, Moon } from "lucide-react"; 
const Navbar = () => {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(true); 

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "My Journey", path: "/my-journey" },
    { name: "Contact", path: "/contact" },
  ];

  
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    dispatch(toggleTheme());
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 sticky top-0 z-20 bg-transparent backdrop-blur-md">
      {}
      <Link to="/" className="text-2xl font-extrabold text-fuchsia-400 tracking-wide">
        Rashi Daga
      </Link>

      {}
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `text-sm font-medium hover:text-fuchsia-400 transition ${
                isActive ? "text-fuchsia-300" : "text-gray-300"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        {}
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded-full bg-gray-800/40 hover:bg-gray-800/70 transition"
        >
          {darkMode ? (
            <Sun className="text-yellow-400" size={20} />
          ) : (
            <Moon className="text-blue-300" size={20} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
