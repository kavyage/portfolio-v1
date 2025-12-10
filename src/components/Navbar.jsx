import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Experience", path: "/experience" },
    { id: 3, text: "GitRepos", path: "/gitrepos" },
    { id: 4, text: "TechStack", path: "/techstack" },
    { id: 5, text: "Collab", path: "/collab" },
  ];

  const handleNavigation = (path) => {
    if (location.pathname === path) {
      // Already on the page → Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
    setMenu(false); // close mobile menu
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div
            className="flex space-x-2 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className="font-semibold text-xl">
              KAVYA&nbsp;
              <span
                className="text-green-500 text-2xl"
                style={{ animation: "blink 1s step-start infinite" }}
              >
                ?
              </span>
              <p className="text-sm">SDET</p>

              <style>
                {`
                  @keyframes blink {
                    0%, 50%, 100% { opacity: 1; }
                    25%, 75% { opacity: 0; }
                  }
                `}
              </style>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text, path }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                  onClick={() => handleNavigation(path)}
                >
                  {text}
                </li>
              ))}
            </ul>

            {/* Mobile Toggle */}
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-6 text-xl font-semibold">
              {navItems.map(({ id, text, path }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                  onClick={() => handleNavigation(path)}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;