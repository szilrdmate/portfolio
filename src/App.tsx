import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import "./Styles.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default App;
