import React from "react";
import React, { useState } from "react";

function header(props) {
  return ( <header class="header navbar row" id="navbar">
  <div class="header__content navbar col-md-6">
      <div class="header__logo-container">
          <div class="header__logo-img-cont">
              <img src="./assets/png/profile picture.jpg"
                  class="header__logo-img" />
          </div>
          <span class="header__logo-sub" href="./index.html#about">Wyatt Howlett</span>
      </div>
      <div class="menuBtn">
          <!-- <div class="menuBtn_Burger"> -->
          <div class="navBarLinks col-md-2">
              <div class="header__main">
                  <ul class="header__links">
                      <li class="header__link-wrapper nav-item ">
                          <a href="./index.html" class="header__link"> Home </a>
                      </li>
                      <li class="header__link-wrapper nav-item">
                          <a href="./index.html#about" class="header__link">About </a>
                      </li>
                      <li class="header__link-wrapper nav-item">
                          <a href="./index.html#projects" class="header__link">
                              Projects
                          </a>
                      </li>
                      <li class="header__link-wrapper nav-item">
                          <a href="./index.html#contact" class="header__link"> Contact </a>
                      </li>
                  </ul>
                  {/* <!-- <div class="header__main-ham-menu-cont">
              <img src="./assets/svg/ham-menu.svg" alt="hamburger menu" class="header__main-ham-menu" />
              <img src="./assets/svg/ham-menu-close.svg" alt="hamburger menu close"
                  class="header__main-ham-menu-close d-none" />
          </div> -->
              </div> */}
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
  </div>

</header>);
};
export default header;
