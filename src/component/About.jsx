import React from "react";
import {DiHtml5, DiCss3, DiJavascript,} from "react-icons/di";
import {SiRedux,SiMaterialui,SiTailwindcss,SiReact,SiGithub,SiBootstrap,SiSass} from "react-icons/si";
import htmllogo from "../images/htmllogo.jpg"
import reactlogo from "../images/reactlogo.png"
import githublogo from "../images/githublogo.png"
import reduxlogo from "../images/reduxlogo.png"
import materialui from "../images/materialui.png"
import bootstraplogo from "../images/bootstrap.jpg"
import tailwindlogo from "../images/tailwindlogo.png"
import sasslogo from "../images/sasslogo.png"

const About = () => {

  return (
    <>
      <div className="about">
        <div className="about_heading">
          <h2>Personal Qulaities</h2>
        </div>
        <div className="personal">
          <p>Team building skills, emphasizing versatility and adaptability</p>
          <p> Demonstrated good communication and Analytical skills</p>
          <p> Ability to work under any given environment</p>
        </div>

        <div className="tech">
          <h2>Technologies Known</h2>
        </div>
        <div className="technology">
  
                <div>
                  <img
                    src= {htmllogo}
                    alt="logo"
                    style={{ width: "250px", height: "100px" }}
                  />
                  <p> HTML/CSS/JS <span style={{display:"block",color:"blue"}}> <DiHtml5 style={{color:"red"}}/>,<DiCss3 style={{color:"blue"}}/>,<DiJavascript style={{color:"gold"}}/> </span></p>
                </div>
                <div>
                  <img
                    src= {reactlogo}
                    alt="logo"
                    style={{ width: "250px", height: "100px" }}
                  />
                  <p> React-Js <span style={{display:"block",color:"blue"}}> <SiReact style={{color:"rgb(29, 161, 242)"}}/> </span></p>
                </div>
                <div>
                  <img
                    src= {githublogo}
                    alt="logo"
                    style={{ width: "250px", height: "100px" }}
                  />
                  <p> GitHub <span style={{display:"block",color:"blue"}}> <SiGithub style={{color:"black"}}/></span></p>
                </div>
                <div>
                  <img
                    src= {reduxlogo}
                    alt="logo"
                    style={{ width: "250px", height: "100px" }}
                  />
                  <p> React-Js <span style={{display:"block",color:"blue"}}> <SiRedux style={{color:"purple"}}/> </span></p>
                </div>
                <div>
                  <img
                    src= {materialui}
                    alt="logo"
                    style={{ width: "250px", height: "100px" }}
                  />
                  <p> React-Js <span style={{display:"block",color:"blue"}}><SiMaterialui style={{color:"blue"}}/> </span></p>
                </div>
                <div>
                  <img
                    src= {bootstraplogo}
                    alt="logo"
                    style={{ width: "250px", height: "100px" }}
                  />
                  <p> React-Js <span style={{display:"block",color:"blue"}}> <SiBootstrap style={{color:"darkorchid"}}/> </span></p>
                </div>
                <div>
                  <img
                    src= {tailwindlogo}
                    alt="logo"
                    style={{ width: "250px", height: "100px" }}
                  />
                  <p> React-Js <span style={{display:"block",color:"blue"}}> <SiTailwindcss style={{color:"darkcyan"}}/></span></p>
                </div>
                <div>
                  <img
                    src= {sasslogo}
                    alt="logo"
                    style={{ width: "250px", height: "100px" }}
                  />
                  <p> React-Js <span style={{display:"block",color:"blue"}}><SiSass style={{color:"palevioletred"}}/></span></p>
                </div>
              
        </div>
      </div>
    </>
  );
};

export default About;
