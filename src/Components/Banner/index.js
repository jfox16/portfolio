import React, { Component } from "react";
import { outdoorBg } from "../../Images";

// import css
import "./Banner.css"

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <img src={outdoorBg} alt="Jon chillin outdoors"/>
        <div className="overlayDiv">
          <div>
            <h1>I'm <c>Jonathan Paul Fox</c>, a Software Engineer living in San Francisco.</h1>
            <p>
              I'm a recent grad from SFSU with experience making games and building websites.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;