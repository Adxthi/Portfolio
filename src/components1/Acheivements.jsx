// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const data = [
//   {
//     title: "Consecutive topper in end semester examination for 3 years",
//     time: "2021-2023",
//   },
//   {
//     title: "Secured third place in elocution competition conducted by Rotary Club, Coimbatore.",
//     time: "2023",
//   },
//   {
//     title:
//       "Secured 5th place in National level social hackathon-Institutional Innovation Council @CMRIT, Bangalore",
//     time: "2023",
//   },
//   {
//     title:
//       "Participated in National level Hackfest @PSG ITECH and came in top 25 category.",
//     time: "2022",
//   },
// ];

// const Achievements = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <section
//       id="achievements"
//       className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-950 to-gray-900 py-10"
//     >
//       {/* Section Header */}
//       <h1
//         data-aos="fade-up"
//         className="text-5xl font-extrabold font-bungee italic text-green-400 mb-12 hover:scale-110 transform transition duration-300"
//       >
//         Achievements
//       </h1>

//       {/* Achievements Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             data-aos="fade-up"
//             className="bg-gradient-to-tl from-green-300 to-green-400 p-6 rounded-lg shadow-lg hover:scale-110 transform transition duration-300"
//           >
//             <h2 className="text-xl font-playfair text-black mb-2">{item.title}</h2>
//             {item.time && <p className="text-2xl text-pink-600">{item.time}</p>}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Achievements;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "Consecutive topper in end semester examination for 3 years",
    time: "2021-2023",
  },
  {
    title: "Secured third place in elocution competition conducted by Rotary Club, Coimbatore.",
    time: "2023",
  },
  {
    title:
      "Secured 5th place in National level social hackathon-Institutional Innovation Council @CMRIT, Bangalore",
    time: "2023",
  },
  {
    title:
      "Participated in National level Hackfest @PSG ITECH and came in top 25 category.",
    time: "2022",
  },
];

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-950 to-gray-900 py-20 relative"
    >
      {/* Subtle Background Decoration */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-green-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-400 opacity-10 rounded-full blur-3xl"></div>

      {/* Section Header */}
      <h1
        data-aos="fade-up"
        className="text-6xl font-extrabold font-bungee italic text-green-400 mb-12 hover:scale-110 transform transition duration-300"
      >
        Achievements
      </h1>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl px-10">
        {data.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-gradient-to-tl from-green-300 to-green-400 p-8 rounded-lg shadow-xl hover:scale-110 transform transition duration-300"
          >
            <h2 className="text-2xl font-playfair text-black mb-4 font-semibold">
              {item.title}
            </h2>
            {item.time && (
              <p className="text-2xl text-pink-600 font-bold">{item.time}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
