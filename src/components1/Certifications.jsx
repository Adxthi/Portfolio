import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "Artificial Intelligence",
    description: "Artificial Intelligence fundamentals credential - IBM",
    year: "2024",
  },
  {
    title: "Machine Learning with Python",
    description: "Machine Learning with Python - Verzeo",
    year: "2022",
  },
  {
    title: "Programming Languages",
    description: (
      <ul className="list-disc ml-5">
        <li>Python Programming - Basic to Advanced level - Udemy</li>
        <li>Java Programming Language - Sololearn</li>
        <li>Data Structures and Algorithms - Udemy</li>
      </ul>
    ),
    year: "2023, 2023 & 2024",
  },
  {
    title: "Problem Solving",
    description: (
      <ul className="list-disc ml-5">
        <li>Problem Solving (Basic) - HackerRank</li>
        <li>Python (Basic) - HackerRank</li>
        <li>50-day badge - LeetCode</li>
        <li>100-day badge - LeetCode</li>
      </ul>
    ),
    year: "2023-2024",
  },
];

const Certifications = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="certifications"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-950 to-gray-900 py-10"
    >
      {/* Section Header */}
      <h1
        data-aos="fade-up"
        className="text-5xl font-extrabold font-bungee italic text-green-400 mb-12 hover:scale-110 transform transition duration-300"
      >
        Certifications
      </h1>

      {/* Certifications List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {data.map((certification, index) => (
          <div
            key={index}
            data-aos={
              index % 2 === 0
                ? "fade-right" // Alternate AOS effects
                : "fade-left"
            }
            className="bg-gradient-to-tl from-green-300 to-green-400 rounded-lg p-6 shadow-xl hover:scale-105 transform transition duration-300"
          >
            <h2 className="text-3xl font-jaro text-white mb-4">
              {certification.title}
            </h2>
            <div className="text-black font-playfair text-xl mb-4">
              {certification.description}
            </div>
            {certification.year && (
              <p className="text-pink-700 font-bold text-2xl">
                Year: {certification.year}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
