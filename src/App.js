import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useRef } from "react";

function App() {
  //Reference hooks to sections for scrolling
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const navLinks = { about, projects, contact };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} navLinks={navLinks} />
      <Header navLinks={navLinks} />
      <Projects navLinks={navLinks} />
      <Footer navLinks={navLinks} />
      <ScrollToTop />
    </div>
  );
}

export default App;
