import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 sm:px-8 lg:px-20">
      {/* Container */}
      <div className="max-w-2xl w-full bg-gray-800 rounded-lg shadow-lg p-6 sm:p-10 text-center">
        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl font-bold text-teal-300 mb-6">
          Get in Touch
        </h3>

        {/* Contact Information */}
        <div className="flex flex-col gap-4">
          <p className="text-lg sm:text-xl text-gray-300">
            Feel free to reach out to me at me email address below!
          </p>

          {/* Email */}
          <div className="flex flex-col items-center mt-4">
            <h4 className="text-xl sm:text-2xl font-semibold text-teal-200">
              Email:
            </h4>
            <a
              href="mailto:hiba.mohamed.dev@gmail.com"
              className="text-lg sm:text-xl text-white underline underline-offset-4 decoration-teal-300 hover:decoration-teal-500 transition duration-300"
            >
              hiba.mohamed.dev@gmail.com
            </a>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-8">
          <div className="w-16 h-1 bg-teal-300 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
