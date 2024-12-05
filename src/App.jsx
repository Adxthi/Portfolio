import Acheivements from "./components1/Acheivements"
import Contact from "./components1/Contact"
import Experience from "./components1/Experience"
import Header from "./components1/Header"
import Hero from "./components1/Hero"
import Projects from "./components1/Projects"
import Certifications from "./components1/Certifications"

function App() {

  return (
    <div className="  text-secondary font-formula scroll-smooth">
      <Header />
      <Hero />
      <Projects />
      <Acheivements/>
      <Certifications />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
