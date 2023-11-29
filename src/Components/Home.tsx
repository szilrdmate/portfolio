import React from "react";
import "../Styles.css";

const Home: React.FC = () => {
  return (
    <main id="home">
      <img className="left" src="/assets/left.svg" alt="decor" width="245px" />
      <img
        className="right"
        src="/assets/right.svg"
        alt="decor"
        width="245px"
      />

      <div className="grid">
        <div className="intro">
          <h1>
            Front-End <span>React</span> Developer
          </h1>
          <p>
            Hi, I'm Szilárd Máté. A passionate Front-end React Developer based
            in Budapest, Hungary
          </p>
          <div className="socials-hero">
            <a href="https://linkedin.com/in/szilardmate">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/szilrdmate">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className="cutout">
          <img src="/assets/szilard-cutout.png" alt="Szilárd Máté" />
        </div>

        <div className="stack-wrapper">
          <div className="item">
            <h3>Tech Stack</h3>
          </div>
          <div className="stack">
            <div className="grid-item">
              <img src="/assets/HTML.svg" alt="html" />
            </div>
            <div className="grid-item">
              <img src="/assets/CSS.svg" alt="css" />
            </div>
            <div className="grid-item">
              <img src="/assets/JavaScript.svg" alt="javascript" />
            </div>
            <div className="grid-item">
              <img src="/assets/TypeScript.svg" alt="typescript" />
            </div>
            <div className="grid-item">
              <img src="/assets/React-Dark.svg" alt="react" />
            </div>
            <div className="grid-item">
              <img src="/assets/Redux.svg" alt="redux" />
            </div>
            <div className="grid-item">
              <img src="/assets/TailwindCSS-Dark.svg" alt="tailwindcss" />
            </div>
            <div className="grid-item">
              <img src="/assets/Sass.svg" alt="sass" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
