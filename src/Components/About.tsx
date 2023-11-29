import React from "react";
import "../Styles.css";

const About: React.FC = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-wrapper">
        <div className="about-title">
          <h3>ABOUT</h3>
          <h1>Hello World! 👦🏻</h1>
        </div>
        <div className="about-parent">
          <div className="about-child">
            <img src="./public/assets/szilard.jpg" alt="Szilárd Máté" />
          </div>
          <div className="about-child">
            <h2>This is... me!</h2>
            <p>
              As a self-taught developer, I possess a robust skill set in modern
              programming languages and frameworks, honed through dedicated,
              hands-on experience.
            </p>
            <p>
              My journey reflects a deep commitment to learning and a proven
              ability to adapt swiftly to the dynamic landscape of technology.
            </p>
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
