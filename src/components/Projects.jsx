
import React from "react";

const Projects = () => {
  return (
    <div id='projects' className="min-h-screen bg-transparent flex flex-col items-center bg-gray-900 py-10 scroll-smooth">
      {/* Section Header */}
      <h1 className="text-5xl font-extrabold text-white mb-6 italic ">Projects</h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-gradient-to-r from-blue-950 to-yellow-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-serif mb-4 text-white text-center italic">
            Aries
          </h2>
          <p className="text-base text-slate-100 mb-4 leading-relaxed">
            Aries is a cutting-edge chatbot specifically designed to provide
            efficient and user-friendly counseling services. This software
            application aims to address mental health challenges by offering
            accessible and empathetic guidance to its users.
          </p>
          <h1 class="text-xl text-white font-bold mb-2">Key Features:</h1>
        <ul class="list-disc pl-5 text-slate-100 space-y-2">
           <li>
             <span class="font-semibold">Stress Alleviation:</span> Aries helps
            users navigate through their stress, offering support that promotes
             mental well-being.
           </li>
           <li>
             <span class="font-semibold">Mental Strength Enhancement:</span> By             fostering resilience, the chatbot contributes to a more harmonious
            and peaceful society.
           </li>
           <li>
             <span class="font-semibold">Improved Quality of Life:</span> A calm
            and focused mind leads to better health and stability, promoting a
             mentally empowered community.
           </li>
           <li>
             <span class="font-semibold">Guidance and Support:</span> Aries
             provides users with the tools to handle trauma and grievances
             effectively, enabling personal growth and societal improvement.
           </li>
         </ul>
        </div>

        {/* Project 2 */}
        <div className="bg-gradient-to-r from-yellow-800 to-blue-950 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-serif mb-4 text-white text-center italic">
            Study Pal
          </h2>
          <p className="text-base text-slate-100 mb-4 leading-relaxed">
            Study Pal is a simple React-based web application designed to
            enhance my understanding of React and frontend development.
          </p>
          <h1 class="text-xl text-white font-bold mb-2">Key Features:</h1>
        <ul class="list-disc pl-5 text-slate-100 space-y-2">
          <li>
            <span class="font-semibold">Responsive Design: </span> Built with
            CSS and Bootstrap to ensure a visually appealing and mobile-friendly
            interface.
          </li>
          <li>
            <span class="font-semibold">Dynamic Navigation:</span>React Router
            enables smooth navigation across pages.{" "}
          </li>
          <li>
            <span class="font-semibold">User Authentication:</span>Includes
            login and signup functionalities for managing user sessions.
          </li>
          <li>
            <span class="font-semibold">Informative Content: </span>Features
            pages like "Courses Available" to display educational resources.
          </li>
        </ul>
        </div>

        {/* Project 3 */}
        <div className="bg-gradient-to-r from-blue-950 to-yellow-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-serif mb-4 text-white text-center italic">
            Shoppe
          </h2>
          <p className="text-base text-slate-100 mb-4 leading-relaxed">
            Shoppe is a robust e-commerce website developed using the MERN
            stack with Elasticsearch integration.
          </p>
          <h1 class="text-xl text-white font-bold mb-2">Key Features:</h1>
        <ul class="list-disc pl-5 text-slate-100 space-y-2">
          <li>
            <span class="font-semibold">Dynamic Homepage:</span>
            Displays featured products and promotions.
          </li>
          <li>
            <span class="font-semibold">Product Catalog: </span>A comprehensive
            "All Products" page with pagination and filtering options.
          </li>
          <li>
            <span class="font-semibold">Dockerized Application: </span>
            Fully containerized for easy deployment and scalability.
          </li>
          <li>
            <span class="font-semibold">Category Management: </span>
            Organized product categories for easy navigation.
          </li>
          <li>
            <span class="font-semibold">Search Functionality: </span>
            Implements both traditional search and Elasticsearch for fast,
            accurate, and scalable results.
          </li>
        </ul>
        </div>

        {/* Project 4 */}
        <div className="bg-gradient-to-r from-yellow-800 to-blue-950 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-serif mb-4 text-white text-center italic">
            API Testing Projects
          </h2>
          <p className="text-base text-slate-100 mb-4 leading-relaxed">
            Expertise in backend API testing using Rest Assured and web UI
            automation with Selenium and Python.
          </p>
          <h1 class="text-xl text-white font-bold mb-2">Key Features:</h1>
        <ul class="list-disc pl-5 text-slate-100 space-y-2">
          <li>
            <span class="font-semibold">Backend API Testing:</span>
            Used Rest Assured and Cucumber frameworks to validate API
            functionality, perform end-to-end testing, and ensure seamless
            integration. Designed BDD-style test cases for clear and
            maintainable testing workflows.
          </li>
          <li>
            <span class="font-semibold">Web UI Automation:</span>
            Employed Selenium with Python to automate web UI testing. Created
            reusable and robust test scripts to verify website functionality
            across multiple browsers.
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;




