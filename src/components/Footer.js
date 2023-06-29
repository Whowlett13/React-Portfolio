import React from "react";

import GitHubLogo from "./assets/github-ico.png";
import InstagramLogo from "./assets/insta-ico.png";
import LinkedInLogo from "./assets/linkedin-ico.png";

export default function Footer() {
  return (
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/wyatt-howlett-399849254/"
              >
                <img class="main-footer__icon" src={LinkedInLogo} alt="icon" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Whowlett13"
              >
                <img class="main-footer__icon" src={GitHubLogo} alt="icon" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/wyattever/"
              >
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src={InstagramLogo}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Wyatt Howlett</h4>
            <p class="main-footer__short-desc">
              Thank you for taking the time to explore my portfolio!<br></br>
              If you're interested in working together, please feel free to
              email me.
            </p>
          </div>
        </div>

        <div class="main-footer__lower">
          &copy; Copyright 2023. WyattHowlett.com
        </div>
      </div>
    </footer>
  );
}
