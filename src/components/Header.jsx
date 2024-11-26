// import React from 'react'

// const Header = () => {
//   return (
//     <div className="navbar bg-gradient-to-r from-blue-950 via-blue-900 to-yellow-800 flex-auto align-middle">
        
//     <div className="flex-auto ">
//       <a className="btn btn-ghost text-xl font-extrabold  hover:text-yellow-400">About</a>
//     </div>

//     <div className="flex-auto">
//       <a href='#projects' className="btn btn-ghost text-xl   hover:text-yellow-400 font-bold">Projects</a>
//     </div>
    
//     <div className="flex-auto">
//       <a className="btn btn-ghost text-xl  hover:text-yellow-400 font-bold">Acheivements</a>
//     </div>

//     <div className="flex-auto">
//       <a className="btn btn-ghost text-xl  hover:text-yellow-400 font-bold">Experience</a>
//     </div>
    
//     <div className='flex-auto'>
//         <a className="btn btn-ghost text-xl  hover:text-yellow-400 font-bold">Contact</a>
//     </div>
    

//   </div>

//   )
// }

// export default Header

import React from 'react';

const Header = () => {
  return (
    <nav className="navbar bg-gradient-to-r from-blue-950 via-blue-900 to-yellow-800 px-4 py-3 shadow-lg">
      {/* Navigation Container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-3xl font-extrabold text-white italic">
          <a href="#home" className="hover:text-yellow-400 transition-colors duration-300">
            MyPortfolio
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <a
            href="#about"
            className="text-xl text-white font-bold hover:text-yellow-400 transition-colors duration-300 relative group"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#projects"
            className="text-xl text-white font-bold hover:text-yellow-400 transition-colors duration-300 relative group"
          >
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#achievements"
            className="text-xl text-white font-bold hover:text-yellow-400 transition-colors duration-300 relative group"
          >
            Achievements
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#experience"
            className="text-xl text-white font-bold hover:text-yellow-400 transition-colors duration-300 relative group"
          >
            Experience
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="text-xl text-white font-bold hover:text-yellow-400 transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
