import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-center bg-no-repeat bg-cover bg-banner flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/90"></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center text-white space-y-6 px-6 md:px-12"
        data-aos="fade-up"
      >
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-wide leading-tight"
          data-aos="fade-down"
        >
          Welcome to Hiba’s Portfolio
        </h1>
        <h2
          className="text-xl sm:text-2xl lg:text-4xl font-medium text-teal-300 leading-relaxed"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Bridging Healthcare and Technology
        </h2>

        {/* Call-to-Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-10 w-full sm:w-auto justify-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Link
            to="/contact"
            className="px-6 sm:px-8 py-3 text-sm sm:text-lg lg:text-xl font-bold rounded-md border-4 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition duration-300"
          >
            Contact Me
          </Link>
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 text-sm sm:text-lg lg:text-xl font-bold rounded-md border-4 border-white text-white hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Featured Projects
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-t from-indigo-600 to-transparent opacity-30 rounded-full blur-3xl max-w-full"
        data-aos="fade-in"
        data-aos-delay="600"
      ></div>
      <div
        className="absolute top-0 right-1/2 transform translate-x-1/2 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-gradient-to-l from-purple-500 to-transparent opacity-20 rounded-full blur-2xl max-w-full"
        data-aos="fade-in"
        data-aos-delay="800"
      ></div>
    </div>
  );
};

export default Banner;
