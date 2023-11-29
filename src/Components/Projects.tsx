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
          <h2>Füge Café</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet
            consectetur adipisicing elit.
          </p>
          <div className="resource-wrapper">
            <div className="langs">
              <img src="./public/assets/React-Dark.svg" alt="React" />
              <img src="./public/assets/JavaScript.svg" alt="JavaScript" />
              <img src="./public/assets/Sass.svg" alt="Sass" />
            </div>
            <div className="project-links">
              <a href="http://github.com/szilrdmate/fuge">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="http://fugebolt.hu">
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
            alt="Preview of the project"
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
              <img src="./public/assets/React-Dark.svg" alt="React" />
              <img src="./public/assets/TypeScript.svg" alt="TypeScript" />
              <img src="./public/assets/TailwindCSS-Dark.svg" alt="Tailwind" />
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
            alt="Preview of the project"
          />
        </div>
        <div className="flex-item">
          <h2>CineMap</h2>
          <p>
            Interactive React app made with Mapbox API, TMDb API and Tailwind
          </p>
          <div className="resource-wrapper">
            <div className="langs">
              <img src="./public/assets/React-Dark.svg" alt="React" />
              <img src="./public/assets/JavaScript.svg" alt="JavaScript" />
              <img src="./public/assets/TailwindCSS-Dark.svg" alt="Tailwind" />
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
            alt="Preview of the project"
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
              <img src="./public/assets/React-Dark.svg" alt="React" />
              <img src="./public/assets/JavaScript.svg" alt="JavaScript" />
              <img src="./public/assets/TailwindCSS-Dark.svg" alt="Tailwind" />
            </div>
            <div className="project-links">
              <a href="http://github.com/szilrdmate/cryptodecius">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="http://cryptodecius.vercel.app/">
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
