import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./Styles.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
