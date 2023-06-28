import React from "react";
// import React, { useState } from "react";
import aboutMe from "./AboutMe";
import Projects from "./Projects";
import Footer from "./Footer";
import Header from "./header";
import Navbar from "./navBar";
import Resume from "./resume";
export default function Contact() {
  return (
    <section id="contact" class="contact sec-pad dynamicBg">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main heading-sec__main--lt">Contact</span>
          <span class="heading-sec__sub heading-sec__sub--lt"></span>
        </h2>
        <div class="contact__form-container">
          <form
            action="https://formsubmit.co/ae7fa34765750942cb359a97bc9f85cd"
            class="contact__form"
            method="POST"
          >
            <div class="contact__form-field">
              <label class="contact__form-label" for="name">
                Name
              </label>
              <input
                // required
                placeholder="Enter Your Name"
                type="text"
                class="contact__form-input"
                name="name"
                id="name"
                // required
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="email">
                Email
              </label>
              <input
                // required
                placeholder="Enter Your Email"
                type="text"
                class="contact__form-input"
                name="email"
                id="email"
                // required
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="message">
                Message
              </label>
              <textarea
                required
                cols="30"
                rows="10"
                class="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn--theme contact__btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
