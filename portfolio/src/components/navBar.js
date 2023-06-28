import React from "react";
import "./NavBar.css";
// import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./header";
// import NavBar from "./navBar";
import Resume from "./resume";
import Projects from "./Projects";
export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <header class="header navbar row" id="navbar">
      <div class="header__content navbar col-md-6">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img src="./assets/profile picture.jpg" class="header__logo-img" />
          </div>
          <span class="header__logo-sub" href="./index.html#about">
            <a
              onClick={() => handlePageChange("AboutMe")}
              className={currentPage === "AboutMe"}
              class="header__link"
            >
              Wyatt Howlett{" "}
            </a>
          </span>
        </div>
        <div class="menuBtn">
          <div class="navBarLinks col-md-2">
            <div class="header__main">
              <ul class="header__links">
                <li class="header__link-wrapper nav-item ">
                  <a
                    onClick={() => handlePageChange("Home")}
                    className={
                      currentPage === "Home"
                        ? "nav-link active header__link"
                        : "nav-link header__link"
                    }
                    class="header__link"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>
                <li class="header__link-wrapper nav-item">
                  <a
                    onClick={() => handlePageChange("AboutMe")}
                    className={
                      currentPage === "AboutMe"
                        ? "nav-link active header__link"
                        : "nav-link header__link"
                    }
                    class="header__link"
                  >
                    About{" "}
                  </a>
                </li>
                <li class="header__link-wrapper nav-item">
                  <a
                    onClick={() => handlePageChange("Projects")}
                    className={
                      currentPage === "Projects"
                        ? "nav-link active header__link"
                        : "nav-link header__link"
                    }
                    class="header__link"
                  >
                    Projects
                  </a>
                </li>
                <li class="header__link-wrapper nav-item">
                  <a
                    onClick={() => handlePageChange("Contact")}
                    className={
                      currentPage === "Contact"
                        ? "nav-link active header__link"
                        : "nav-link header__link"
                    }
                    class="header__link"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header__sm-menu">
          <div class="header__sm-menu-content">
            <ul class="header__sm-menu-links">
              <li class="header__sm-menu-link">
                <a href="./index.html"> Home </a>
              </li>

              <li class="header__sm-menu-link">
                <a href="./index.html#about"> About Me </a>
              </li>

              <li class="header__sm-menu-link">
                <a href="./index.html#projects"> Projects </a>
              </li>

              <li class="header__sm-menu-link">
                <a href="./index.html#contact"> Contact </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
