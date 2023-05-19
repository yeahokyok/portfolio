import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default App
