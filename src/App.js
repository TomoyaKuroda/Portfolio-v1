import React, { useRef, useState, useEffect } from "react";
import "./App.scss";

import gsap from "gsap";

import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import anime from "animejs";
import { ContextProvider } from "./contexts/context";
import useMousePosition from "./hooks/useMousePosition";
import codeImg from "./assets/gradient.jpg";
import assistonImg from "./assets/assiston.png";
import assistonLaptopImg from "./assets/assistonDesktop.png";
import { useMediaQuery } from "react-responsive";
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
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </ContextProvider>
  );
}

function Projects() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={assistonImg} alt="" />
        </div>
        <div className="flip-card-back">
          <div className="back-header">
            <img src={assistonLaptopImg} alt="" />
          </div>
          <div className="back-footer">
            <h2>assist on</h2>
            <p>
              I collaborated with a web designer and developed the WordPress
              website.
            </p>
            <a href="http://assiston-toronto.com/" target="_blank">
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
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
    // let morphing = anime({
    //   targets: ".polymorph",
    //   points: [{ value: "215,110 0,110 0,0 47.7,0 67,76 " }],
    //   easing: "easeOutQuad",
    //   duration: 2000,
    //   loop: false
    // });
    // let tl = anime.timeline({
    //   easing: "easeInOutQuart",
    //   duration: 4000
    // });
    // tl.add({
    //   targets: "svg",
    //   keyframes: [
    //     { scale: 0.3, rotate: "0deg" },
    //     { scale: 0.5, rotate: "360deg" }
    //   ],
    //   duration: 3000
    // });
    // tl.add(
    //   {
    //     targets: ["#logo", "feTurbulence", "feDisplacementMap"],
    //     baseFrequency: 0,
    //     numOctaves: 2,
    //     rotate: "300deg",
    //     scale: 1,
    //     fill: "#fff",
    //     fillOpacity: "1",
    //     strokeWidth: 3,
    //     stroke: "#fff",
    //     strokeDasharray: "20,10,5,4,30,10"
    //   },
    //   "-=4000"
    // );
    // tl.add({
    //   targets: "svg",
    //   scale: 7,
    //   duration: 500
    // });
    // tl.add({
    //   targets: "svg",
    //   opacity: 0,
    //   duration: 500
    // });
    // tl.add({
    //   targets: "body",
    //   backgroundColor: "#FFF",
    //   duration: 500
    // });
  }, [tl]);

  return (
    <div className="hero" ref={el => (app = el)}>
      {/* <Masonry className="showcase">
  {data.allDatoCmsWork.edges.map(({ node: work }) => (
    <div key={work.id} className="showcase__item">
      <figure className="card">
        <Link to={`/works/${work.slug}`} className="card__image">
          <Img fluid={work.coverImage.fluid} />
        </Link>
        <figcaption className="card__caption">
          <h6 className="card__title">
            <Link to={`/works/${work.slug}`}>{work.title}</Link>
          </h6>
          <div className="card__description">
            <p>{work.excerpt}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  ))}
</Masonry> */}
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
            {/* <div className="btn-row">
              <button className="explore-button" onClick={props.handleMenu}>
                Explore
                <div className="arrow-icon">
                  <img src={arrow} alt="row" />
                </div>
              </button>
            </div> */}
          </div>
          {/* <div className="hero-images">
        <div ref={el => images = el}  className="hero-images-inner">
          <div className="hero-image first">
            <img src={firstImg} alt="laptop" />
          </div>
          <div className="hero-image second">
            <img src={secondImg} alt="laptop" />
          </div>
        </div>
      </div> */}
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

        {/* <svg viewBox="0 0 248 248.667" id="turbulence">
          <filter id="displacementFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.05"
              numOctaves="3"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <path
            id="logo"
            fill="#00AE7B"
            d="M124,86.421c21.006,0,38.095,17.089,38.095,38.095S145.006,162.612,124,162.612
        s-38.095-17.089-38.095-38.095S102.994,86.421,124,86.421 M124,57.85c-36.819,0-66.667,29.848-66.667,66.667
        S87.181,191.183,124,191.183s66.667-29.848,66.667-66.667S160.819,57.85,124,57.85L124,57.85z"
          />
        </svg> */}
        {/* <svg viewBox="0 0 215 110">
          <polygon
            id="first"
            className="polymorph"
            points="215,110 0,110 0,0 47.7,0 215,0 "
          />
          {/* <polygon
            id="second"
            className="polymorph"
            points="215,110 0,110 0,0 47.7,0 67,76 "
          /> */}
        {/* </svg>  */}
        {/* <h5>
          The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5> */}
      </div>
    </div>
  );
}
export default App;
