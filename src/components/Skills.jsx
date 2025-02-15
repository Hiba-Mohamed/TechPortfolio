import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative flex flex-col w-full overflow-hidden  ">
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-96 h-96 bg-gradient-to-b from-indigo-600 via-purple-500 to-pink-500 opacity-20 rounded-full filter blur-3xl"></div>

      {/* Header Section */}
      <div
        className="flex flex-col items-center gap-4 sm:gap-6 px-8 sm:px-20"
        data-aos="fade-down"
      >
        <h2 className="text-4xl sm:text-6xl font-extrabold text-center tracking-wide">
          My Skills
        </h2>
        <p className="text-3xl sm:text-5xl font-extrabold text-teal-400 tracking-wider animate-pulse">
          &lt;/&gt;
        </p>
      </div>

      {/* Skills List */}
      <div
        className="mt-12 sm:mt-20 px-8 sm:px-20"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 text-lg sm:text-2xl">
          <li className="group">
            <strong className="block text-teal-300 mb-2 transition duration-300 group-hover:text-teal-400">
              Languages:
            </strong>
            <span className="block transition-opacity duration-500 group-hover:opacity-80">
              JavaScript, TypeScript, EJS, Python, Java
            </span>
          </li>
          <li className="group">
            <strong className="block text-teal-300 mb-2 transition duration-300 group-hover:text-teal-400">
              Web Development:
            </strong>
            <span className="block transition-opacity duration-500 group-hover:opacity-80">
              HTML, CSS, React, Node.js, Material UI, Tailwind, Framer
            </span>
          </li>
          <li className="group">
            <strong className="block text-teal-300 mb-2 transition duration-300 group-hover:text-teal-400">
              Database Management:
            </strong>
            <span className="block transition-opacity duration-500 group-hover:opacity-80">
              MongoDB, SQL
            </span>
          </li>
          <li className="group">
            <strong className="block text-teal-300 mb-2 transition duration-300 group-hover:text-teal-400">
              Tools:
            </strong>
            <span className="block transition-opacity duration-500 group-hover:opacity-80">
              Git, Figma, Canva, GitHub, AI, Docker
            </span>
          </li>
          <li className="group">
            <strong className="block text-teal-300 mb-2 transition duration-300 group-hover:text-teal-400">
              Cloud Computing:
            </strong>
            <span className="block transition-opacity duration-500 group-hover:opacity-80">
              AWS Cloud Practitioner Course, AWS Cloud Development Course
            </span>
          </li>
        </ul>
      </div>

      {/* Decorative Divider */}
      <div className="w-full my-40 lg:my-60">
        <div
          className="h-1 bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-500 rounded-full mx-auto max-w-xs sm:max-w-md"
          data-aos="zoom-in"
          data-aos-duration="2000"
        ></div>
      </div>
    </div>
  );
};

export default Skills;
