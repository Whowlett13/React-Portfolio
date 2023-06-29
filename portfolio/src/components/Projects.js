import React from "react";

import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./header";
import Navbar from "./navBar";
import Resume from "./resume";
import BobsBurg from "./assets/Bobs-Burgers-Application.png";
import CodeQuiz from "./assets/CodeQuiz.png";
import WeatherApp from "./assets/WeatherApp.png";
import WorkDay from "./assets/Work-Day-Scheduler.png";
import TextEditor from "./assets/justanothertexteditor.png";
export default function Projects({ currentPage, handlePageChange }) {
  return (
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub"></span>
        </h2>

        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={BobsBurg}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">
                Bobs' Burger Price and Info
              </h3>
              <p class="projects__row-content-desc">
                A Bobs Burger themed application that displays a "Show me the
                burger of the day!" button, when pressed the application will
                display a randomly generated name of a burger from a specific
                season and episode of the show. In the pop up menu a button will
                appear "burger price" when clicked the user will be prompted
                with a selection of 10 different currencies from around the
                world, when one is selected the price of the burger from the
                show will be displayed in that currency along with the converted
                rate.
              </p>
              <a
                href="https://kale411.github.io/Bob-s-Burger-Price-and-Info/"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                Bobs Burgers Application
              </a>
            </div>
          </div>

          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={CodeQuiz}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Code Quiz</h3>
              <p class="projects__row-content-desc">
                This is a timed coding quiz with multiple-choice questions. This
                app is written from scratch.
              </p>
              <a
                href="https://whowlett13.github.io/Web-Api-Challange-4.github.io/"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                Code Quiz
              </a>
            </div>
          </div>
          <div class="projects__content">
            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={WeatherApp}
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">
                  Weather Api Application
                </h3>
                <p class="projects__row-content-desc">
                  This project is a Weather Dashboard application. The user can
                  look for different cities and their corresponding 5-day
                  forecast weather.
                </p>
                <a
                  href="https://whowlett13.github.io/Weather-Dashboard.github.io/"
                  class="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                >
                  Weather Api Application
                </a>
              </div>
            </div>
            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={WorkDay}
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">Work Day Scheduler</h3>
                <p class="projects__row-content-desc">
                  A work day scheduler that displays the time and date. It has
                  color coded fields based on the time of day, (grey being past,
                  red being current hour and green being future). When the time
                  field is filled out the user can press the save button on the
                  right hand side to save the inputted task for when the page is
                  reloaded or refreshed.
                </p>
                <a
                  href="https://whowlett13.github.io/Work-Day-Scheduler.github.io/"
                  class="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                >
                  Work Day Scheduler
                </a>
              </div>
            </div>
            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={TextEditor}
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">
                  Just Another Text Editor
                </h3>
                <p class="projects__row-content-desc">
                  This application takes an existing text editor app and adds
                  functionality for it to work as a PWA and function offline.
                  This application is deployed through Heroku.
                </p>
                <a
                  href="https://agile-reaches-37687-d185bb673bfe.herokuapp.com/"
                  class="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                >
                  Just Another text Editor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
