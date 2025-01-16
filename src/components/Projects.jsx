import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative flex flex-col w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-slate-50 py-20 overflow-hidden" id="projects">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-transparent opacity-10 blur-3xl"></div>
      <div className="absolute -top-10 -left-20 w-96 h-96 bg-gradient-to-b from-indigo-600 via-purple-500 to-pink-500 opacity-20 rounded-full filter blur-3xl"></div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center px-10">
        Featured Projects
      </h2>
      <h3 className="px-10 pt-5 text-center text-xl sm:text-2xl">
        Click on the project for live pages
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-12">
        {/* Project 1 */}
        <a
          href="https://hiba-mohamed.github.io/Collab-NAS-Project/"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
        >
          <div className="text-center flex flex-col items-center gap-4 m-4 shadow-lg-custom rounded-md px-6 py-8 bg-gray-900 hover:bg-teal-600 transition duration-300 transform hover:scale-105">
            <img src="NAS-logo-icon.png" className="w-20" alt="NAS Logo" />
            <p className="text-lg font-semibold text-white">
              Nurses Assignment Sheet (NAS)
              <br />
              UI/UX Collaboration
            </p>
          </div>
        </a>

        {/* Project 2 */}
        <a
          href="https://hiba-mohamed.github.io/Reactjs-Nurses-Assignment-Sheet/"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-center flex flex-col items-center gap-4 m-4 shadow-lg-custom rounded-md px-6 py-8 bg-gray-900 hover:bg-teal-600 transition duration-300 transform hover:scale-105">
            <img src="NAS-logo.png" className="w-20" alt="ReactJS NAS Logo" />
            <p className="text-lg font-semibold text-white">
              Nurses Assignment Sheet (NAS)
              <br />
              ReactJS
            </p>
          </div>
        </a>

        {/* Project 3 */}
        <a
          href="https://hiba-mohamed.github.io/Nurses-Assignment-Sheet/"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-center flex flex-col items-center gap-4 m-4 shadow-lg-custom rounded-md px-6 py-8 bg-gray-900 hover:bg-teal-600 transition duration-300 transform hover:scale-105">
            <img src="logo.png" className="w-20" alt="Vanilla JS NAS Logo" />
            <p className="text-lg font-semibold text-white">
              Nurses Assignment Sheet (NAS)
              <br />
              Vanilla JS
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
