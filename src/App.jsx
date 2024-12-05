import Acheivements from "./components1/Acheivements";
import Contact from "./components1/Contact";
import Experience from "./components1/Experience";
import Header from "./components1/Header";
import Hero from "./components1/Hero";
import Projects from "./components1/Projects";
import Certifications from "./components1/Certifications";

function App() {
  return (
    <div 
      className="text-secondary font-formula scroll-smooth" 
      style={{
        backgroundImage: "url('/bg2.jpg')",  // Corrected path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <Header />
      <Hero />
      <Projects />
      <Acheivements />
      <Certifications />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
