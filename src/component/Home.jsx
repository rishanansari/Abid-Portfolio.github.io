import React from "react";
import abid from "../images/Aabidpic.jpeg";
import Contact from "./Contact";
import Education from "./Education";
import About from "./About";
import OurProject from "./OurProject"
import WorkExp from "./WorkExp";
const Home = () => {
  return (
    <>
      <div className="main_home">
          <img
            src={abid}
            alt="my photo"
            style={{ width: "150px", height: "200px" }}
            className="home_img"
          />
        <div className="home_name">
          <h1>Abid Ansari</h1>
          <p>Front-End Developer</p>
          <p>Assistant Professor</p>
          <p>YouTuber</p>
          <div className="home_info">
            <p>
              <span className="home_span">1+</span> Years Experince
            </p>
            <p>
              <span className="home_span"> 5+ </span> Completed Projects
            </p>
            <p>
              <span className="home_span"> 5+ </span> Technologies
            </p>
            <p>
              <span className="home_span"> 2 </span> Programming Languages
            </p>
          </div>
        </div>
      </div>
      <hr />
      <About />
      <hr />
      <Education/>
      <hr />
      <WorkExp />
      <hr />
      <OurProject/>
      <hr />
      <Contact />
    </>
  );
};

export default Home;
