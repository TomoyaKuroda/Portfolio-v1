import React, { useEffect } from "react";
import anime from "animejs";

import assistonImg from "../assets/assiston.png";
import assistonLaptopImg from "../assets/assistonDesktop.png";
import archemistMobile from "../assets/archemist-mobile.png";
import archemistLaptop from "../assets/archemist-laptop.png";
import PFM from "../assets/pfm.png";
import PFMmobile from "../assets/pfm-mobile.png";
function Projects() {
  // let title = useRef(null);
  let title = [];
  let text = "PROJECTS";
  text = text.split("");
  text.forEach(element => {
    title.push(element);
  });
  useEffect(() => {
    anime
      .timeline({ loop: false })
      .add(
        {
          targets: ".box .letters",
          scale: [4, 1],
          opacity: [0, 1],
          duration: 900,
          easing: "easeInOutExpo",
          delay: anime.stagger(100)
        },
        "+=500"
      )
      .add(
        {
          targets: ".box .line",
          scaleX: [0, 1],
          duration: 1400,
          easing: "easeInOutExpo",
          delay: anime.stagger(400)
        },
        "-=700"
      );
  });
  return (
    <>
      <div className="box">
        <div className="line"></div>
        <div className="title" ref={el => (title = el)}>
          {title.map(element => (
            <span className="letters">{element}</span>
          ))}
        </div>
        <div className="line"></div>
      </div>
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
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={PFMmobile} alt="" />
            </div>
            <div className="flip-card-back">
              <div className="back-header">
                <a
                  href="https://personal-finance-manager.now.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={PFM} alt="" />
                </a>
              </div>
              <div className="back-footer">
                <h2>PFM</h2>
                <p>
                  I built the application with Next.js for API and MongoDB for
                  database to manage your income and expense.
                </p>
                <a
                  href="https://personal-finance-manager.now.sh/"
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
    </>
  );
}

export default Projects;
