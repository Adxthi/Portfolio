// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Projects = () => {
//   const data = [
//     {
//       tittle: "Aries",
//       discription:
//         "Aries is an advanced chatbot designed for efficient, user-friendly counseling to address mental health challenges. It offers accessible and empathetic guidance to improve users' well-being.",
//       keypoints: [
//         "Stress Alleviation: Helps users manage stress and promote mental wellness.",
//         "Mental Strength Enhancement: Builds resilience for a more harmonious society.",
//         "Improved Quality of Life: Enhances health, focus, and stability.",
//         "Guidance and Support: Empowers users to handle trauma and achieve personal growth.",
      
//       ],
//       year:"2023"
//     },
//     {
//       tittle: "Study Pal",
//       discription:
//         "Study Pal is a simple React-based web application designed to enhance my understanding of React and frontend development.",
//       keypoints: [
//         "Responsive Design: Built with CSS and Bootstrap to ensure a visually appealing and mobile-friendly interface.",
//         "Dynamic Navigation: React Router enables smooth navigation across pages.",
//         "User Authentication: Includes login and signup functionalities for managing user sessions.",
//         "Informative Content: Features pages like Courses Available to display educational resources.",
//       ],
//       year:"2024"
//     },
    
//     {
//       tittle: "Shoppe",
//       discription:
//         "Shoppe is a robust e-commerce website developed using the MERN stack with Elasticsearch integration.",
//       keypoints: [
//         "Dynamic Homepage: Displays featured products and promotions.",
//         "Product Catalog: A comprehensive \"All Products\" page with pagination and filtering options.",
//         "Dockerized Application: Fully containerized for easy deployment and scalability.",
//         "Category Management: Organized product categories for easy navigation.",
//         "Search Functionality: Implements both traditional search and Elasticsearch for fast, accurate, and scalable results.",
//       ],
//       year:"2024"
//     },
//     {
//       tittle: "API Testing Projects",
//       discription:
//         "Expertise in backend API testing using Rest Assured and web UI automation with Selenium and Python.",
//       keypoints: [
//         "Backend API Testing: Used Rest Assured and Cucumber frameworks to validate API functionality, perform end-to-end testing, and ensure seamless integration. Designed BDD-style test cases for clear and maintainable testing workflows.",
//         "Web UI Automation: Employed Selenium with Python to automate web UI testing. Created reusable and robust test scripts to verify website functionality across multiple browsers.",
//       ],
//       year:"2024"
//     },
//   ];

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div
//       id="project"
//       className="min-h-screen bg-gradient-to-r from-green-950 to-gray-800 flex flex-col items-center bg-gray-900 py-10 text-primary-content scroll-smooth"
//     >
//       {/* Section Header */}
//       <h1
//         data-aos="fade-up"
//         className="text-5xl font-extrabold font-bungee text-green-500 mb-6 italic"
//       >
//         Projects
//       </h1>

//       {/* Projects Grid */}
//       <div className="flex flex-wrap justify-around align-middle lg:flex-row flex-col gap-2">
//         {data.map((project, index) => (
//           <div
//             key={index}
//             data-aos="zoom-in-up"
//             className="max-w-md bg-gradient-to-tl from-green-300 to-green-300 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105"
//           >
//             <h2 className="text-3xl font-jaro mb-4 text-white text-center italic">
//               {project.tittle}
//             </h2>
//             <p className="text-xl font-playfair font-extrabold mb-4 leading-relaxed">
//               {project.discription}
//             </p>
//             <h1 className="text-xl font-jaro text-white font-bold mb-2">
//               Key Features:
//             </h1>
//             <ul className="list-disc text-xl font-playfair pl-5 space-y-2">
//               {project.keypoints.map((keypoint, index) => (
//                 <li key={index}>
//                   <span className="font-semibold">{keypoint}</span>
//                 </li>
//               ))}
//             </ul>
//             <h1 className="text-2xl font-jaro text-pink-700 text-center font-bold mb-2">
//                Year: {project.year}
//             </h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const data = [
    {
      tittle: "Aries",
      discription:
        "Aries is an advanced chatbot designed for efficient, user-friendly counseling to address mental health challenges. It offers accessible and empathetic guidance to improve users' well-being.",
      keypoints: [
        "Stress Alleviation: Helps users manage stress and promote mental wellness.",
        "Mental Strength Enhancement: Builds resilience for a more harmonious society.",
        "Improved Quality of Life: Enhances health, focus, and stability.",
        "Guidance and Support: Empowers users to handle trauma and achieve personal growth.",
      ],
      year: "2023",
    },
    {
      tittle: "Study Pal",
      discription:
        "Study Pal is a simple React-based web application designed to enhance my understanding of React and frontend development.",
      keypoints: [
        "Responsive Design: Built with CSS and Bootstrap to ensure a visually appealing and mobile-friendly interface.",
        "Dynamic Navigation: React Router enables smooth navigation across pages.",
        "User Authentication: Includes login and signup functionalities for managing user sessions.",
        "Informative Content: Features pages like Courses Available to display educational resources.",
      ],
      year: "2024",
    },
    {
      tittle: "Shoppe",
      discription:
        "Shoppe is a robust e-commerce website developed using the MERN stack with Elasticsearch integration.",
      keypoints: [
        "Dynamic Homepage: Displays featured products and promotions.",
        "Product Catalog: A comprehensive \"All Products\" page with pagination and filtering options.",
        "Dockerized Application: Fully containerized for easy deployment and scalability.",
        "Category Management: Organized product categories for easy navigation.",
        "Search Functionality: Implements both traditional search and Elasticsearch for fast, accurate, and scalable results.",
      ],
      year: "2024",
    },
    {
      tittle: "API Testing Projects",
      discription:
        "Expertise in backend API testing using Rest Assured and web UI automation with Selenium and Python.",
      keypoints: [
        "Backend API Testing: Used Rest Assured and Cucumber frameworks to validate API functionality, perform end-to-end testing, and ensure seamless integration. Designed BDD-style test cases for clear and maintainable testing workflows.",
        "Web UI Automation: Employed Selenium with Python to automate web UI testing. Created reusable and robust test scripts to verify website functionality across multiple browsers.",
      ],
      year: "2024",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="project"
      className="min-h-screen bg-gradient-to-r from-green-950 to-gray-800 flex flex-col items-center py-10 text-primary-content"
    >
      {/* Section Header */}
      <h1
        data-aos="fade-up"
        className="text-6xl font-extrabold font-bungee text-green-500 mb-12 italic hover:scale-110 transition transform duration-300"
      >
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full px-10">
        {data.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-gradient-to-tl from-green-300 to-green-400 p-8 rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
          >
            <h2 className="text-3xl font-jaro mb-4 text-white text-center italic font-bold">
              {project.tittle}
            </h2>
            <p className="text-xl font-playfair font-semibold mb-6 text-balck leading-relaxed">
              {project.discription}
            </p>
            <h3 className="text-xl font-jaro text-white font-bold mb-2">
              Key Features:
            </h3>
            <ul className="list-disc text-lg font-playfair text-gray-black pl-5 space-y-2 mb-6">
              {project.keypoints.map((keypoint, idx) => (
                <li key={idx}>
                  <span className="font-medium">{keypoint}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-2xl font-jaro text-pink-600 text-center font-bold">
              Year: {project.year}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
