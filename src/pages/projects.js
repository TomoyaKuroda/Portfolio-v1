import React from "react";

import assistonImg from "../assets/assiston.png";
import assistonLaptopImg from "../assets/assistonDesktop.png";
import archemistMobile from "../assets/archemist-mobile.png";
import archemistLaptop from "../assets/archemist-laptop.png";

function Projects() {
  return (
    <div className="flip-wrapper">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={assistonImg} alt="" />
          </div>
          <div className="flip-card-back">
            <div className="back-header">
              <a
                href="http://assiston-toronto.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={assistonLaptopImg} alt="" />
              </a>
            </div>
            <div className="back-footer">
              <h2>assist on</h2>
              <p>
                I collaborated with a web designer and developed the WordPress
                website for a study abroad agency.
              </p>
              <a
                href="http://assiston-toronto.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={archemistMobile} alt="" />
          </div>
          <div className="flip-card-back">
            <div className="back-header">
              <a
                href="https://archemist.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={archemistLaptop} alt="" />
              </a>
            </div>
            <div className="back-footer">
              <h2>ARchemisT</h2>
              <p>
                I built the website with Figma provided by a designer to get
                people interested in the crowdfunding project.
              </p>
              <a
                href="https://archemist.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
