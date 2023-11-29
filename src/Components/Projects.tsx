import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="project-container" id="projects">
      <div className="project-title-div">
        <h3>PORTFOLIO</h3>
        <h1>Every project is a unique masterpiece 🖼</h1>
      </div>
      <div className="project-wrapper rr">
        <div className="flex-item">
          <img
            className="preview"
            src="https://www.fatbit.com/fab/wp-content/uploads/2018/08/FATbit-Portfolio-Footloos-Homepage.png"
            alt=""
          />
        </div>
        <div className="flex-item">
          <h2>Project N1</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet
            consectetur adipisicing elit.
          </p>
          <div className="resource-wrapper">
            <div className="langs">
              <img src="assets/media/React-Dark.svg" alt="" />
              <img src="assets/media/Sass.svg" alt="" />
            </div>
            <div className="project-links">
              <a href="http://">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="http://">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrapper nr">
        <div className="flex-item">
          <img
            className="preview"
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
            alt=""
          />
        </div>
        <div className="flex-item">
          <h2>Project N2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. amet
            consectetur adipisicing elit.
          </p>
          <div className="resource-wrapper">
            <div className="langs">
              <img src="assets/media/React-Dark.svg" alt="" />
              <img src="assets/media/TypeScript.svg" alt="" />
              <img src="assets/media/TailwindCSS-Dark.svg" alt="" />
            </div>
            <div className="project-links">
              <a href="http://">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="http://">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrapper rr">
        <div className="flex-item">
          <img
            className="preview"
            src="https://i.pinimg.com/originals/6c/4c/22/6c4c22b675b5bc3c97cb1a1f788078cc.png"
            alt=""
          />
        </div>
        <div className="flex-item">
          <h2>CineMap</h2>
          <p>
            Interactive React app made with Mapbox API, TMDb API and Tailwind
          </p>
          <div className="resource-wrapper">
            <div className="langs">
              <img src="assets/media/React-Dark.svg" alt="" />
              <img src="assets/media/TailwindCSS-Dark.svg" alt="" />
            </div>
            <div className="project-links">
              <a href="http://github.com/szilrdmate/cinemap">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="http://cinemap.vercel.app/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrapper nr">
        <div className="flex-item">
          <img
            className="preview"
            src="https://unbounce.com/photos/indochino-full.jpg"
            alt=""
          />
        </div>
        <div className="flex-item">
          <h2>Crypto Decius</h2>
          <p>
            Membership based, e-commerce website with multiple pages, functional
            cart and booking system.
          </p>
          <div className="resource-wrapper">
            <div className="langs">
              <img src="assets/media/HTML.svg" alt="" />
              <img src="assets/media/CSS.svg" alt="" />
              <img src="assets/media/JavaScript.svg" alt="" />
            </div>
            <div className="project-links">
              <a href="http://github.com/szilrdmate/cryptodecius">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="http://cryptodecius.com">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
