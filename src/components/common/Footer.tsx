import React from "react";
// Importing the necessary icons from the react-icons library
import { FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white font-sans text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Top section: Logo and Newsletter */}
        <div className="text-center">
          {/* Logo */}
          <h1 className="text-4xl font-bold text-[#ce6968] mb-4">
            wein<span className="text-[#ce6968]">.</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg font-semibold text-gray-700 mb-6">
            Stay updated with Wein.com
          </p>

          {/* Newsletter Form */}
          <form className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-md mx-auto">
            <div className="relative flex-grow w-full">
              <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Email Address"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom section: Copyright and Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          {/* Copyright notice */}
          <div className="width-[75%] mx-auto">
            <p className="align-self-center">
              &copy; {new Date().getFullYear()} Wein.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-gray-900 transition-colors"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-900 transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
