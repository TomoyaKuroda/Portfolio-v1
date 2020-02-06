import React, { useRef, useState, useEffect } from "react";
import "./App.scss";

import gsap from "gsap";

import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextProvider } from "./contexts/context";
import useMousePosition from "./hooks/useMousePosition";
import codeImg from "./assets/gradient.jpg";
import assistonImg from "./assets/assiston.png";
import assistonLaptopImg from "./assets/assistonDesktop.png";
import { useMediaQuery } from "react-responsive";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <div className="wrapper">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </ContextProvider>
  );
}

function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [tl] = useState(gsap.timeline({ delay: 0.8 }));

  const { x, y } = useMousePosition();
  let app = useRef(null);
  let content = useRef(null);

  const hasMovedCursor = typeof x === "number" && typeof y === "number";

  let first = {
    transform: `rotateX(${x / 10}deg) rotateY(0deg) translateZ(${
      isTabletOrMobile ? 50 : 100
    }px)`
  };

  let second = {
    transform: `rotateX(${x / 10}deg) rotateY(90deg) translateZ(${
      isTabletOrMobile ? 50 : 100
    }px)`
  };
  let third = {
    transform: `rotateX(${x / 10}deg) rotateY(180deg) translateZ(${
      isTabletOrMobile ? 50 : 100
    }px)`
  };
  let fourth = {
    transform: `rotateX(${x / 10}deg) rotateY(-90deg) translateZ(${
      isTabletOrMobile ? 50 : 100
    }px)`
  };

  let fifth = {
    transform: `rotateX(${90 + x / 10}deg) translateZ(${
      isTabletOrMobile ? 50 : 100
    }px)`
  };
  let sixth = {
    transform: `rotateX(${-90 + x / 10}deg) translateZ(${
      isTabletOrMobile ? 50 : 100
    }px)`
  };

  useEffect(() => {
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];

    //Remove initial flash
    tl.to(app, 0, { css: { visibility: "visible" } });

    //Content Animation
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: "power3.out",
        delay: 0.8
      },
      0.15,
      "Start"
    ).from(contentP, 1, { y: 20, opacity: 0, ease: "power3.out" }, 1.4);
  }, [tl]);

  return (
    <div className="hero" ref={el => (app = el)}>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-content-inner" ref={el => (content = el)}>
            <h1>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">Tomoya Kuroda</div>
              </div>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">
                  - Software Engineer
                </div>
              </div>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">
                  - Full Stack Developer
                </div>
              </div>
            </h1>
            <p>
              Passionate about software development and collaborating with
              people.
            </p>
          </div>

          <div className="wrap">
            <div className={"cube"}>
              <img src={codeImg} alt="" style={first} />
              <img src={codeImg} alt="" style={second} />
              <img src={codeImg} alt="" style={third} />
              <img src={codeImg} alt="" style={fourth} />
              <img src={codeImg} alt="" style={fifth} />
              <img src={codeImg} alt="" style={sixth} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
