import React, { Component } from "react";
import { IoMdMail } from 'react-icons/io';

import { FaLinkedin, FaGithub } from "react-icons/fa";

// Import CSS
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <h1>Looking for a software engineer? Let's get in touch.</h1>

        <div className="linkDiv">
          <div>
          <a href="mailto:FoxJonathanP@gmail.com">
            <IoMdMail/> FoxJonathanP@gmail.com
          </a>
          </div>
          
          <div>
          <a href="https://www.linkedin.com/in/jonathan-fox-cs/h">
            <FaLinkedin/> Linkedin.com/in/jonathan-fox-cs
          </a>
          </div>

          <div>
          <a href="https://github.com/FishWash">
            <FaGithub/> Github.com/FishWash
          </a>
          </div>

        </div>
      </div>
    );
  }
}

export default Footer;