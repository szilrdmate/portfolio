import React from "react";
import "../Styles.css";

const About: React.FC = () => {
  const handleDownload = () => {
    const fileName = "szilardmate_cv.pdf";
    const filePath = "/assets/";

    const link = document.createElement("a");

    link.download = fileName;
    link.href = `${filePath}${fileName}`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <section className="about-container" id="about">
      <div className="about-wrapper">
        <div className="about-title">
          <h3>ABOUT</h3>
          <h1>Hello World! 👦🏻</h1>
        </div>
        <div className="about-parent">
          <div className="about-child">
            <img src="/assets/szilard.jpg" alt="Szilárd Máté" />
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
            <button onClick={handleDownload}>Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
