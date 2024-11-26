import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen w-full bg-no-repeat bg-scroll " 
  >
  <div className="w-full flex justify-evenly align-middle items-center flex-wrap text-center">
    <img src="/public/MyImage.jpg" alt="Profile" className=" w-[25vw] min-w-[450px] rounded-full" />
    <div className="max-w-2xl text-start">
      <h1 className=' lg:text-6xl md:text-4xl text-white text-2xl font-extrabold align-middle' >Hello there 👋 </h1>
      <p className="mb-5 lg:text-3xl text-white font-bold" >
        I am Adithi.
        </p>
      <p className=" lg:text-xl text-white w-full"  >
         A dynamic and optimistic professional, passionate about contributing 
         to a forward-thinking organization. With a love for learning and 
         adaptability as my strengths, I thrive in environments that foster creativity and growth.
        My goal is to refine my skills, showcase my talents, and drive meaningful contributions
        to impactful projects.   </p>

        <p className="mb-5 lg:text-2xl text-white">
        Let’s collaborate and make great things happen! 🤝
        </p>

      <a href='public/Adithi_resume.pdf' className="btn btn-primary">Get Resume</a>
    </div>
  </div>
</div>
  )
}

export default Hero
