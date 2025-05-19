import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
// import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-100 text-slate-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-2">
        <div className="logo w-2/6 sm:w-2/6 md:w-2/6 lg:w-1/5">
          <NavLink to="/">
            {/* <img src={Logo} alt="logo" className="w-full h-auto" /> */}
            <h1 className="text-red-800">Arrow Info System</h1>
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`md:flex gap-2 lg:gap-4 items-center text-sm md:text-md lg:max-w-3/6 ${
            isMenuOpen
              ? "md:hidden flex flex-col absolute right-0 top-[55px] z-20 px-4 py-1 bg-slate-100"
              : "hidden"
          } md:block`}
        >
          <NavLink
            to="/"
            className="md:hidden lg:block min-w-max text-center hover:text-white hover:bg-blue-600 hover:rounded-2xl px-6 py-1 text-gray-800 font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className=" min-w-max text-center hover:text-white hover:bg-blue-600 hover:rounded-2xl px-6 py-1 ${
                text-gray-800 font-medium"
          >
            About Us
          </NavLink>
          <NavLink
            to="/Activities"
            className=" min-w-max text-center hover:text-white hover:bg-blue-600 hover:rounded-2xl px-6 py-1 ${
                text-gray-800 font-medium"
          >
            Activities
          </NavLink>
          <NavLink
            to="/Events"
            className=" min-w-max text-center hover:text-white hover:bg-blue-600 hover:rounded-2xl px-6 py-1 ${
                text-gray-800 font-medium"
          >
            Events
          </NavLink>
          <NavLink
            to="/Chapters"
            className=" min-w-max text-center hover:text-white hover:bg-blue-600 hover:rounded-2xl px-6 py-1 ${
                text-gray-800 font-medium"
          >
            Chapters
          </NavLink>
          <NavLink
            to="/gallery"
            className=" min-w-max text-center hover:text-white hover:bg-blue-600 hover:rounded-2xl px-6 py-1 ${
                text-gray-800 font-medium"
          >
            Gallery
          </NavLink>
        </div>

        {/* <div className="hidden md:block">
          <Link
            to="/Join"
            className="bg-blue-800 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-2xl shadow-md shadow-blue-950"
          >
            Join
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
