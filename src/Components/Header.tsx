import React, { useEffect } from "react";
import "../Styles.css";

const Header: React.FC = () => {
  const mixedDropdownMenu = document.querySelector(
    "div.mixed-menu-dropdown"
  ) as HTMLDivElement | null;
  const mixedMenu = document.querySelector("div.mixed-menu") as
    | HTMLDivElement
    | undefined;
  const mixedButtonText = document.querySelector(
    ".mixed-menu span"
  ) as HTMLSpanElement | null;
  const mixedButtonIcon = document.querySelector(
    ".mixed-menu i"
  ) as HTMLElement | null;

  // Navigation menu dropdown
  mixedMenu?.addEventListener("mouseenter", () => {
    if (mixedDropdownMenu) {
      mixedDropdownMenu.style.opacity = "1";
      mixedDropdownMenu.style.visibility = "visible";

      if (mixedButtonText) {
        mixedButtonText.style.color = "#fffdf8";
      }

      if (mixedButtonIcon) {
        mixedButtonIcon.style.color = "#fffdf8";
      }

      mixedMenu.style.backgroundColor = "#111111";
      mixedMenu.style.borderRadius = "30px 30px 0 0";
    }
  });

  mixedMenu?.addEventListener("mouseleave", () => {
    if (mixedDropdownMenu) {
      setTimeout(() => {
        mixedDropdownMenu.style.opacity = "0";

        if (mixedButtonText) {
          mixedButtonText.style.color = "#fffdf8";
        }

        if (mixedButtonIcon) {
          mixedButtonIcon.style.color = "#fffdf8";
        }

        mixedDropdownMenu.style.opacity = "0";
        mixedDropdownMenu.style.visibility = "hidden";
        mixedMenu.style.backgroundColor = "#111111";
        mixedMenu.style.borderRadius = "30px";
      }, 100);
    }
  });

  useEffect(() => {
    const hamburger = document.querySelector(".fa-bars");
    const navPanel = document.querySelector(".nav-panel");
    const closeX = document.querySelector("i.fa-x");
    const navLinks = document.querySelectorAll(".ham-link");

    const handleClick = () => {
      navPanel?.classList.toggle("open");
    };

    const handleClose = () => {
      navPanel?.classList.remove("open");
    };

    hamburger?.addEventListener("click", handleClick);
    closeX?.addEventListener("click", handleClose);

    navLinks?.forEach((navLink) => {
      navLink.addEventListener("click", handleClose);
    });

    return () => {
      hamburger?.removeEventListener("click", handleClick);
      closeX?.removeEventListener("click", handleClose);
      navLinks?.forEach((navLink) => {
        navLink.removeEventListener("click", handleClose);
      });
    };
  }, []);

  return (
    <header>
      <div className="span-div"></div>
      <img src="/assets/logo.svg" className="logo" alt="Logo" />
      {/* Button Container */}
      <div className="btn-container">
        <button className="nav-btn btn-left">
          <a href="#about">ABOUT</a>
        </button>
        <button className="nav-btn btn-middle">
          <a href="#projects">PROJECTS</a>
        </button>
        <button className="nav-btn btn-right">
          <a href="#contact">CONTACT</a>
        </button>
      </div>

      <button className="cta">
        <i className="fa-solid fa-link"></i>
        <a
          target="_blank"
          href="https://linkedin.com/in/szilardmate"
          style={{ color: "#fffdf8" }}
        >
          {" "}
          CONNECT
        </a>
      </button>

      <div className="mixed-menu">
        <span>MENU</span>
        <i
          className="fa-solid fa-ellipsis-vertical"
          style={{ fontSize: "30px" }}
        ></i>
        <div className="mixed-menu-dropdown">
          <dl className="menu-dropdown-mix">
            <li className="menu-item-mix">
              <a href="#home">Home</a>
            </li>
            <hr />
            <li className="menu-item-mix">
              <a href="#about">About</a>
            </li>
            <hr />
            <li className="menu-item-mix">
              <a href="#projects">Projects</a>
            </li>
            <hr />
            <li className="menu-item-mix">
              <a href="#contact">Contact</a>
            </li>
          </dl>
        </div>
      </div>

      <div className="hamburger">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="nav-panel">
        <i className="fa-solid fa-x"></i>
        <dl>
          <hr />
          <li className="nav-link">
            <a className="ham-link" href="#home">
              Home
            </a>
          </li>
          <hr />
          <li className="nav-link">
            <a className="ham-link" href="#about">
              About
            </a>
          </li>
          <hr />
          <li className="nav-link">
            <a className="ham-link" href="#projects">
              Projects
            </a>
          </li>
          <hr />
          <li className="nav-link">
            <a className="ham-link" href="#contact">
              Contact
            </a>
          </li>
          <hr />
        </dl>
      </div>
    </header>
  );
};

export default Header;
