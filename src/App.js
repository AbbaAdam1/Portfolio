import "./index.css";
import Contact from "./Contact";
import Name from "./Name";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";

function App() {
  function update(e) {
    var x = e.clientX || (e.touches && e.touches[0].clientX);
    var y = e.clientY || (e.touches && e.touches[0].clientY);

    if (x !== undefined && y !== undefined) {
      document.documentElement.style.setProperty("--cursorX", x + "px");
      document.documentElement.style.setProperty("--cursorY", y + "px");
      document.documentElement.style.setProperty("--flashlightOpacity", "1");
    }
  }

  document.addEventListener("mousemove", update);
  document.addEventListener("touchmove", update);

  return (
    <div className="lg:flex md:p-16 lg:p-24">
      <Name />

      <div className="lg:w-1/2 lg:ml-auto md:pl-8">
        <About />

        <Experience />

        <Projects />

        <Contact />
      </div>
    </div>
  );
}

export default App;
