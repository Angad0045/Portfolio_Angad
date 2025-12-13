import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import { useRef } from "react";
import About from "./screens/About";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="flex flex-col font-red-hat-display bg-black">
        <Home onContactClick={scrollToContact} />
        <About />
        <Projects />
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
