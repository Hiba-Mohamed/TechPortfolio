import React from "react";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
const Home = () => {
  return (
    <>
      <div className="relative flex flex-col items-center w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-slate-50 min-h-screen overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-transparent opacity-10 blur-3xl"></div>
        <div className="absolute -top-10 -right-20 w-96 h-96 bg-gradient-to-b from-indigo-600 via-purple-500 to-pink-500 opacity-20 rounded-full filter blur-3xl"></div>
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        {/* <TechMedQuiz /> */}
      </div>
    </>
  );
};

export default Home;
