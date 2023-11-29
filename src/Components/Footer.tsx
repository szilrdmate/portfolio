import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <h3>All Wrongs Reversed</h3>
        <div className="socials">
          <a href="https://linkedin.com/in/szilardmate">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/szilrdmate">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
