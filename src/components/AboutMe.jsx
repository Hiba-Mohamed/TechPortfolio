import React from "react";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-800 text-white content-center" >
      {/* Background Icons */}
      {/* <div className="absolute inset-0 grid grid-cols-2 gap-12 sm:gap-16 lg:gap-24 p-8 sm:p-16 lg:p-24">
        <div className="flex flex-col items-center gap-12">
          <img
            className="w-20 h-20 lg:w-32 lg:h-32 opacity-10 hover:opacity-20 transition-opacity duration-300"
            src="cloudIcon.png"
            alt="Cloud Icon"
          />
          <img
            className="w-20 h-20 lg:w-32 lg:h-32 opacity-10 hover:opacity-20 transition-opacity duration-300"
            src="computerIcon.png"
            alt="Computer Icon"
          />
        </div>
        <div className="flex flex-col items-center gap-12">
          <img
            className="w-20 h-20 lg:w-32 lg:h-32 opacity-10 hover:opacity-20 transition-opacity duration-300"
            src="pillIcon.png"
            alt="Pill Icon"
          />
          <img
            className="w-20 h-20 lg:w-32 lg:h-32 opacity-10 hover:opacity-20 transition-opacity duration-300"
            src="dnaIcon.png"
            alt="DNA Icon"
          />
        </div>
      </div> */}

      {/* Content Section */}
      <div className="relative z-10 px-8 md:px-16 lg:px-32 py-16 flex flex-col sm:flex-row space-y-12 sm:space-y-0 sm:space-x-12">
        {/* Aspiring Software Developer */}
        <div className="sm:flex-1 bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-teal-400 lg:text-4xl">
            Aspiring Software Developer
          </h2>
          <p className="mt-4 text-lg lg:text-xl leading-relaxed">
            Enthusiastic and motivated aspiring software developer with a
            passion for creating innovative and efficient solutions. My journey
            into the world of software development began with a curiosity for
            technology and a desire to understand how things work behind the
            scenes. This curiosity quickly turned into a full-blown passion,
            leading me to immerse myself in learning various programming
            languages, development frameworks, and best practices.
          </p>
        </div>

        {/* Healthcare Professional */}
        <div className="sm:flex-1 bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-teal-400 lg:text-4xl">
            Healthcare Professional
          </h2>
          <p className="mt-4 text-lg lg:text-xl leading-relaxed">
            My journey into healthcare began with a profound desire to make a
            difference in people's lives. This passion inspired me to pursue a
            rigorous education to fulfill my aspiration of providing exceptional
            care. Over the years, I have continually advanced my knowledge and
            skills through ongoing education and hands-on experience in diverse
            healthcare settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
