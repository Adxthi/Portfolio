
// // import React from 'react';

// // const Hero = () => {
// //   return (
// //     <div className="hero min-h-screen w-full bg-no-repeat bg-gradient-to-r from-green-950 to-gray-900 bg-scroll">
// //       <div className="w-full flex justify-evenly align-middle items-center flex-wrap text-center">
// //         <img
// //           src="/public/MyImage.jpg"
// //           alt="Profile"
// //           className="w-[25vw] min-w-[450px] rounded-full"
// //         />
// //         <div className="max-w-2xl text-start">
// //           <h1 className="lg:text-6xl md:text-4xl text-white text-2xl font-anton align-middle">
// //             Hello there 👋
// //           </h1>
// //           <p className="mb-5 lg:text-3xl text-white font-bold font-jaro">
// //             I am Adithi.
// //           </p>
// //           <p className="lg:text-xl text-white w-full font-jaro">
// //             A dynamic and optimistic professional, passionate about contributing
// //             to a forward-thinking organization. With a love for learning and
// //             adaptability as my strengths, I thrive in environments that foster
// //             creativity and growth. My goal is to refine my skills, showcase my
// //             talents, and drive meaningful contributions to impactful projects.
// //           </p>
// //           <p className="mb-5 lg:text-2xl text-white font-jaro">
// //             Let’s collaborate and make great things happen! 🤝
// //           </p>
// //           <a href="public/Adithi_resume.pdf" className="btn btn-primary font-jaro text-3xl text-white">
// //             Get Resume
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="hero min-h-screen w-full bg-no-repeat bg-gradient-to-r from-green-950 to-gray-900 bg-scroll">
      <div className="w-full flex justify-evenly align-middle items-center flex-wrap text-center">
        
        {/* Profile Image */}
        <div className="relative group">
          <img
            src="/public/MyImage.jpg"
           alt="Profile"
             className="w-[25vw] min-w-[250px] max-w-[450px] rounded-full shadow-lg transition-transform duration-500 group-hover:scale-110"
           />
           <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition duration-500"></div>
        </div>

        {/* Text Content */}
        <div
          data-aos="fade-left"
          className="max-w-2xl text-start transition-transform"
        >
          {/* Greeting */}
          <h1 className="lg:text-6xl md:text-4xl text-white text-2xl font-anton align-middle group">
            Hello there 
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-green-400 to-purple-300 transition-colors duration-300">
              👋
            </span>
          </h1>

          {/* Name */}
          <p className="text-3xl text-white font-bold font-jaro hover:text-green-300 transition-colors duration-300">
            I am Adithi.
          </p>

          {/* Description */}
          <p className="lg:text-xl text-white w-full font-jaro hover:scale-105 transform transition-transform duration-300">
            A dynamic and optimistic professional, passionate about contributing
            to a forward-thinking organization. With a love for learning and
            adaptability as my strengths, I thrive in environments that foster
            creativity and growth. My goal is to refine my skills, showcase my
            talents, and drive meaningful contributions to impactful projects.
          </p>

          {/* Collaboration */}
          <p className="mb-5 lg:text-2xl text-white font-jaro hover:translate-x-2 transform transition-transform duration-300">
            Let’s collaborate and make great things happen! 🤝
          </p>

          {/* Resume Button */}
          <a
            href="public/Adithi_resume.pdf"
            className="btn btn-primary font-jaro text-3xl text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gradient-to-r from-green-500 to-blue-500 hover:text-white transition-all duration-500"
          >
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;



// import React, { useEffect } from "react";
// import AOS from "aos";
// import { Particles } from "react-tsparticles";
// import "aos/dist/aos.css";

// const Hero = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const particleOptions = {
//     background: {
//       color: "transparent",
//     },
//     fpsLimit: 60,
//     particles: {
//       color: { value: "#ffffff" },
//       links: { enable: true, color: "#ffffff", distance: 150 },
//       move: { enable: true, speed: 2 },
//       size: { value: 2 },
//     },
//   };

//   return (
//     <div className="hero min-h-screen w-full bg-gradient-to-r from-green-950 to-gray-900 relative">
//       {/* Particle Background */}
//       <Particles options={particleOptions} className="absolute inset-0 z-0" />

//       <div className="relative z-10 w-full flex justify-evenly items-center flex-wrap text-center py-10">
//         {/* Profile Image */}
//         <div className="relative group">
//           <img
//             src="/public/MyImage.jpg"
//             alt="Profile"
//             className="w-[25vw] min-w-[250px] max-w-[450px] rounded-full shadow-lg transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition duration-500"></div>
//         </div>

//         {/* Text Content */}
//         <div data-aos="fade-up" className="max-w-2xl text-start">
//           {/* Greeting */}
//           <h1 className="lg:text-6xl md:text-4xl text-2xl font-anton text-white tracking-wider">
//             {Array.from("Hello there 👋").map((char, index) => (
//               <span
//                 key={index}
//                 className="hover:text-green-400 inline-block transition-colors duration-300 hover:scale-105"
//               >
//                 {char}
//               </span>
//             ))}
//           </h1>

//           {/* Name */}
//           <p className="mb-5 lg:text-3xl text-white font-bold font-jaro mt-4">
//             {Array.from("I am Adithi.").map((char, index) => (
//               <span
//                 key={index}
//                 className="hover:text-blue-500 inline-block transition-colors duration-300 hover:scale-110"
//               >
//                 {char}
//               </span>
//             ))}
//           </p>

//           {/* Description */}
//           <p className="lg:text-xl text-white w-full font-jaro mt-4 leading-relaxed animate-float">
//             A dynamic and optimistic professional, passionate about contributing
//             to a forward-thinking organization. With a love for learning and
//             adaptability as my strengths, I thrive in environments that foster
//             creativity and growth. My goal is to refine my skills, showcase my
//             talents, and drive meaningful contributions to impactful projects.
//           </p>

//           {/* Collaboration */}
//           <p className="mb-5 lg:text-2xl text-white font-jaro mt-4 hover:text-green-400 transition-colors duration-300">
//             Let’s collaborate and make great things happen! 🤝
//           </p>

//           {/* Resume Button */}
//           <a
//             href="public/Adithi_resume.pdf"
//             className="btn btn-primary font-jaro text-xl text-white px-6 py-3 mt-4 rounded-lg shadow-lg hover:shadow-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-500 transform hover:-translate-y-1 active:translate-y-1"
//           >
//             Get Resume
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
