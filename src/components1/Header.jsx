import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const trailColors = ['#00FF7F', '#32CD32', '#7FFF00', '#00FA9A', '#ADFF2F'];
    let mouseTrail = [];
    
    const createTrail = (x, y) => {
      const trailElement = document.createElement('div');
      trailElement.className = 'trail';
      trailElement.style.left = `${x}px`;
      trailElement.style.top = `${y}px`;
      trailElement.style.backgroundColor =
        trailColors[Math.floor(Math.random() * trailColors.length)];
      document.body.appendChild(trailElement);
      mouseTrail.push(trailElement);

      setTimeout(() => {
        trailElement.remove();
        mouseTrail.shift();
      }, 1000);
    };

    const handleMouseMove = (e) => {
      createTrail(e.pageX, e.pageY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <nav className="h-24 px-4 flex justify-between items-center bg-gradient-to-r from-green-900 to-green-700 text-white shadow-md sticky top-0 z-50">
      {/* Logo Section */}
      <h1 className="text-4xl font-extrabold font-jaro tracking-wider">Adithi</h1>

      {/* Navigation Links */}
      <div className="flex gap-6 text-3xl font-semibold font-jaro">
        <a href="/" className="hover:text-green-300">About</a>
        <a href="/#project" className="hover:text-green-300">Project</a>
        <a href="#achievements" className="hover:text-green-300">Achievements</a>
        <a href="/#certification" className="hover:text-green-300">Certification</a>
        <a href="/#experience" className="hover:text-green-300">Experience</a>
        <a href="/#contact" className="hover:text-green-300">Contact</a>
      </div>
    </nav>
  );
};

export default Header;



