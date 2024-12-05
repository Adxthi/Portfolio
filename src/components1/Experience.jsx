import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  const data = [
    {
      title: "Data Science Intern",
      Company: "Appin technologies",
      time: "2023",
      description: (
        <p>
          During my internship at Appin Technologies, Coimbatore, I gained hands-on experience in data science with Python. From exploring machine learning basics to delving into the intricacies of data analysis, I was exposed to a wide range of insights. Through collaborative discussions and practical projects, I honed my skills in data manipulation, visualization, and predictive modeling. This immersive experience has equipped me with a solid foundation in data science and a passion for leveraging Python to tackle real-world challenges.
        </p>
      ),
    },
    {
      title: "Full Stack Developer Intern",
      Company: "Coding mart Technology",
      time: "2024",
      description: (
        <p>
          During my tenure at Coding Mart Technologies, I had the privilege of working on real-time projects that exposed me to a diverse range of technologies and tools. I developed a strong foundation in backend technologies, particularly the MERN stack, and frontend frameworks like React. Additionally, I gained hands-on experience in testing, utilizing tools such as Rest Assured, Selenium, Postman, Cucumber, Jira, and JMeter. One of my notable projects was Shoppe, a website I developed using the MERN stack, integrating Elasticsearch for advanced search functionality. I also performed comprehensive backend API testing for the project, leveraging the full suite of testing tools to ensure seamless functionality and robust performance.
        </p>
      ),
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="experience"
      className="min-h-screen bg-gradient-to-r from-green-950 to-gray-800 flex flex-col items-center bg-gray-900 py-10 text-primary-content scroll-smooth"
    >
      {/* Section Header */}
      <h1
        data-aos="fade-up"
        className="text-5xl font-extrabold font-bungee text-green-500 mb-6 italic"
      >
        Experience
      </h1>

      {/* Experience Cards */}
      <div className="grid lg:grid-cols-2 gap-8 w-full max-w-6xl px-4">
        {data.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            className="bg-gradient-to-tl from-green-300 to-green-300 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105"
          >
            <h2 className="text-4xl font-jaro text-white font-bold mb-4">
              {item.title}
            </h2>
            <p className="text-2xl text-gray-700 mb-2 font-semibold">
              {item.Company}
            </p>
            <p className="text-xl text-pink-700 mb-4">{item.time}</p>
            <div className="text-lg font-playfair text-gray-800 leading-relaxed">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
