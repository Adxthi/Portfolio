import React from "react";

const Contact = () => {
  return (
    <div id='contact' className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white bg-transparent">
      {/* Page Header */}
      <h1 className="text-4xl font-bold font-serif italic mb-8 text-white">Contact Me</h1>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        {/* linkedin */}
        <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-950 to-yellow-800 rounded-lg shadow-lg">
          <i className="fab fa-instagram text-4xl mb-4 text-blue-500"></i>
          <h2 className="text-2xl font-semibold mb-2">LinkedIn📘</h2>
          <p className="mb-4 text-gray-200 text-center">
            Follow me To know about me and my acheivements.
          </p>
          <a
            href="https://www.linkedin.com/in/adithi-thangavel-371631249/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Follow Me
          </a>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center p-6 bg-gradient-to-r from-yellow-800 to-blue-950 rounded-lg shadow-lg">
          <i className="fas fa-envelope text-4xl mb-4 text-green-500"></i>
          <h2 className="text-2xl font-semibold mb-2">Email 📧</h2>
          <p className="mb-4 text-gray-200 text-center">
            Reach out to me for collaboration or inquiries.
          </p>
          <a
            href="mailto:aditit062@gmail.com"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Email
          </a>
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-950 to-yellow-800 rounded-lg shadow-lg">
          <i className="fas fa-phone-alt text-4xl mb-4 text-blue-500"></i>
          <h2 className="text-2xl font-semibold mb-2">Mobile  📞</h2>
          <p className="mb-4 text-gray-200 text-center">
            Call or text me for quick communication.
          </p>
          <a
            href="tel:+91 9790034955"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Call Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
