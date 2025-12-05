import React from "react";
import NavBar from "./components/NavBar.jsx"; 
import Hero from "./components/Hero.jsx"; 
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
function App() {
    return(
        <div>
            <NavBar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}
export default App;