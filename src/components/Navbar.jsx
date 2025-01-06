import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isScrolled ? 'bg-white/5 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-3xl font-bold text-white">
            Dhruv Parihar
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="relative group text-lg font-medium text-white hover:text-gray-200"
            >
              Home
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-purple-900 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="relative group text-lg font-medium text-white hover:text-gray-200"
            >
              About
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-purple-900 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/project"
              className="relative group text-lg font-medium text-white hover:text-gray-200"
            >
              Projects
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-purple-900 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/resume"
              className="relative group text-lg font-medium text-white hover:text-gray-200"
            >
              Resume
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-purple-900 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-white hover:bg-blue-600">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-white hover:bg-blue-600">
              About
            </Link>
            <Link to="/project" className="block px-3 py-2 rounded-md text-white hover:bg-blue-600">
              Projects
            </Link>
            <Link to="/resume" className="block px-3 py-2 rounded-md text-white hover:bg-blue-600">
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
