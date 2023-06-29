import React from "react";

import GitHubLogo from "./assets/github-ico.png";
import InstagramLogo from "./assets/insta-ico.png";
import LinkedInLogo from "./assets/linkedin-ico.png";

export default function Header() {
  return (
    <section class="home-hero overflow-hidden">
      <div id="particles" class="col-sm-12">
        <div id="webcoderskull">
          <div class="home-hero__content overflow-auto">
            <h1 class="heading-primary">Hello! I'm Wyatt Howlett:</h1>
            <div class="home-hero__info .text-white">
              <p class="text-primary .text-white">FullStack Web Developer</p>
            </div>
            {/* <div class="home-hero__cta">
              <a href="./index.html#projects" class="btn btn--bg">
                Projects
              </a>
            </div> */}
          </div>
          <div class="home-hero__socials">
            <div class="home-hero__social">
              <a
                href="https://www.linkedin.com/in/wyatt-howlett-399849254/"
                class="home-hero__social-icon-link"
              >
                <img
                  src={LinkedInLogo}
                  alt="icon"
                  class="home-hero__social-icon"
                />
              </a>
            </div>
            <div class="home-hero__social">
              <a
                href="https://github.com/Whowlett13"
                class="home-hero__social-icon-link"
              >
                <img
                  src={GitHubLogo}
                  alt="icon"
                  class="home-hero__social-icon"
                />
              </a>
            </div>

            <div class="home-hero__social">
              <a
                href="https://www.instagram.com/wyattever/"
                class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
              >
                <img
                  src={InstagramLogo}
                  alt="icon"
                  class="home-hero__social-icon"
                />
              </a>
            </div>
          </div>

          <div class="home-hero__mouse-scroll-cont"></div>
        </div>
      </div>
    </section>
  );
}
