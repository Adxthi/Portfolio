

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-950 to-gray-900 bg-transparent"
    >
      {/* Page Header */}
      <h1
        data-aos="fade-up"
        className="text-5xl font-extrabold font-bungee italic text-green-400 mb-12 hover:scale-110 transform transition duration-300"
      >
        Contact Me
      </h1>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {/* LinkedIn */}
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center p-6 bg-gradient-to-tl from-green-300 to-green-400 rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
        >
          <i className="fab fa-linkedin text-5xl mb-4 text-green-500"></i>
          <h2 className="text-3xl font-semibold font-jaro text-green-800 mb-4">
            LinkedIn
          </h2>
          <p className="text-center text-gray-700 font-playfair font-semibold mb-6">
            Follow me to stay updated about my achievements and journey.
          </p>
          <a
            href="https://www.linkedin.com/in/adithi-thangavel-371631249/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg"
          >
            Follow Me
          </a>
        </div>

        {/* Email */}
        <div
          data-aos="fade-right"
          className="flex flex-col items-center p-6 bg-gradient-to-tl from-green-400 to-green-300 rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
        >
          <i className="fas fa-envelope text-5xl mb-4 text-green-500"></i>
          <h2 className="text-3xl font-semibold font-jaro text-green-800 mb-4">
            Email
          </h2>
          <p className="text-center text-gray-700 font-playfair font-semibold mb-6">
            Feel free to reach out for collaboration or inquiries.
          </p>
          <a
            href="mailto:aditit062@gmail.com"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg"
          >
            Send Email
          </a>
        </div>

        {/* Mobile */}
        <div
          data-aos="fade-left"
          className="flex flex-col items-center p-6 bg-gradient-to-tl from-green-300 to-green-400 rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
        >
          <i className="fas fa-phone-alt text-5xl mb-4 text-green-500"></i>
          <h2 className="text-3xl font-semibold font-jaro text-green-800 mb-4">
            Mobile
          </h2>
          <p className="text-center text-gray-700 font-playfair font-semibold mb-6">
            Call or text me for quick communication.
          </p>
          <a
            href="tel:+91 9790034955"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg"
          >
            Call Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

