import Contact from "./components/Contact"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"


function App() {

  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1731327328382-12b8e9e43733?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-fixed bg-cover
      scroll-smooth">
    <Header/>
    <Hero/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default App
