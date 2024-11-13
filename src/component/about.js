import React, { Component } from "react";
import Profilepic from "../images/profile.jpg";
import "../styles/about.css";

class About extends Component {
 
  render() {
    return (
      /*About DashBoard */
      <div className="aboutContainer">
        <div className="profileImg">
          <span className="top"></span>{" "}
          <img src={Profilepic} alt="ProfilePic" />{" "}
          <span className="bottom"></span>
        </div>
        <div className="content">
          <h1>BIO</h1>
          <p>
            Hello! I'm Solomon Nnamani, a passionate software engineer with a
            drive for innovation. i specialize in developing web, mobile, and
            desktop applications, leveraging my core expertise in JavaScript. My
            goal is to make the web more accessible and open to the world. I
            hold a Bachelor's degree in Political Science from the University of
            Nigeria, Nsukka, graduating in 2024. Although my academic background
            is in Political Science, my passion for coding has led me to become
            a skilled software engineer. I'm excited to explore new
            opportunities that align with my interests and skills. if you're
            looking for a dedicated and innovative problem-solver, let's
            connect!
          </p>
        </div>
      </div>
    );
  }
}

export default About;
