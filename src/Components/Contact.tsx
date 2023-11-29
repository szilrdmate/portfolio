import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-wrapper">
        <h3>CONTACT</h3>
        <h1>You should hit me up! 👇</h1>
        <div className="contact-box">
          <div className="contact-item-wrapper">
            <i className="fa-regular fa-compass"></i>
            <div>
              <h4>Location</h4>
              <a href="https://www.google.com/maps/place/Budapest/">
                Budapest, Hungary
              </a>
            </div>
          </div>
          <div className="contact-item-wrapper">
            <i className="fa-regular fa-envelope"></i>
            <div>
              <h4>Mail</h4>
              <a href="mailto:mate.szilard.mark@gmail.com">
                mate.szilard.mark@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
