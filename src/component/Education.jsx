import React from "react";
import great from "../images/Great_Learning_Logo.jpg";
import html from "../images/gl_html.jpg";
import css from "../images/gl_css.jpg";
import introjs from "../images/gl_introjs.jpg";
import jsproject from "../images/gl_jsproject.jpg";
import jsgame from "../images/gl_jsgame.jpg";
import react from "../images/gl_react.jpg";
import website from "../images/gl_ewesite.jpg";

const Education = () => {
  return (
    <>
      <div className="education">
        <div className="academic">
          <h2>Academics</h2>
        </div>
        <div className="academics">
          <div>
            <p>
              Pursuing Master in Structural Design (M-Tech Civil) from SSSUTMS,
              Sehore.
            </p>
          </div>
          <div>
            <p>
              Bachelor of Civil Engineering (B.E) from Mumbai university with
              CGPI 8.26.
            </p>
          </div>
          <div>
            <p>
              HSC passed from Rais High School and Jr College, Bhiwandi with
              73.83%(science).
            </p>
          </div>
          <div>
            <p>
              SSC passed from Rais High School and Jr College, Bhiwandi with
              79.09%.
            </p>
          </div>
        </div>
        <div className="academic">
          <h2>Achievements</h2>
        </div>
        <div className="academics">
          <div>
            <p>
              Completed a 300 HRS online bootcamp of responsive web design from
              freecodecamp.
            </p>
          </div>
          <div>
            <p>
              Attended 6 Days National F.D.P on “React-JS” by Brain O Vision
              Solution Ind Pvt Ltd.
            </p>
          </div>
          <div>
            <p>
              Attended 3 Days Essential Program in HTML & CSS zero to hero by
              Let's Upgrade.
            </p>
          </div>
        </div>

        <div className="great">
          <img
            src={great}
            alt="GL"
            style={{ width: "120px", height: "50px" }}
          />
          <h2>Great Learning Short Courses</h2>
        </div>
        <div className="great_certificate">
          <div>
            <img
              src={html}
              alt="html"
              style={{ width: "250px", height: "200px" }}
            />
            <p>Front-End HTML</p>
          </div>
          <div>
            <img
              src={css}
              alt="css"
              style={{ width: "250px", height: "200px" }}
            />
            <p>Front-End CSS</p>
          </div>
          <div>
            <img
              src={introjs}
              alt="introjs"
              style={{ width: "250px", height: "200px" }}
            />
            <p>Intro to JavaScript</p>
          </div>
          <div>
            <img
              src={jsproject}
              alt="jsproject"
              style={{ width: "250px", height: "200px" }}
            />
            <p>JavaScript Project</p>
          </div>
          <div>
            <img
              src={jsgame}
              alt="jsgame"
              style={{ width: "250px", height: "200px" }}
            />
            <p>JavaScript Game</p>
          </div>
          <div>
            <img
              src={react}
              alt="react"
              style={{ width: "250px", height: "200px" }}
            />
            <p>React-Js</p>
          </div>
          <div>
            <img
              src={website}
              alt="web"
              style={{ width: "250px", height: "200px" }}
            />
            <p>Web by HTML/CSS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
