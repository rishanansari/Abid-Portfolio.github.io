import React from "react";
import { FcBusinessman, FcCellPhone, FcFeedback } from "react-icons/fc";
import { FaTwitterSquare,FaYoutubeSquare,FaGithubSquare,FaLinkedin} from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="main_contact">
      <div className="contact_heading">
        <h1>Contact Me</h1>
        </div>
        <div className="center_contact">
          <div className="conatct_info">
            <p>
              <span className="contact_span"><FcBusinessman /></span>
               Abid Ansari
            </p>
          </div>
          <div className="conatct_info">
            <p>
              <span className="contact_span"><FcCellPhone /></span>
               8856823440
            </p>
          </div>
          <div className="conatct_info">
            <p>
              <span className="contact_span"><FcFeedback /></span>
               ansariabid123s@gmail.com
            </p>
          </div>
        </div>
        <div className="social_link">
<div> <a href="https://twitter.com/ansari_rishan?s=09" target="_blank" className="linkt"><FaTwitterSquare/></a></div>
<div> <a href="https://github.com/rishanansari" target="_blank" className="linkg"><FaGithubSquare/></a></div>
<div> <a href="https://youtube.com/channel/UCTf14p6xkKy1OsMcpZXG8eg" target="_blank" className="linky"><FaYoutubeSquare/></a></div>
<div> <a href="https://www.linkedin.com/in/ansari-rishan-72a526126" target="_blank"className="linkl"><FaLinkedin/></a></div>
        </div>
        <div className="footer">
          <p>Made with ❤️ by Abid Ansari. © 2022</p>
        </div>
      </div>
    </>
  );
}; 

export default Contact;
