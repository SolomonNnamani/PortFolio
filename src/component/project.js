import React, { Component } from "react";
import "../styles/project.css";
import porfolio from "../images/portfolio.png";

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      /*Project DashBoard */
      <div className="projectContainer">
        <h1>PROJECTS </h1>
        <p>
          {" "}
          Below is a showcase of selected projects i have designed, developed ,
          and delivered utilizing a range of cutting-edge frameworks and
          technologies. These projects demonstrate my expertise and proficiency
          in crafting innovative solutions across various domains.
        </p>

        <div className="projects">
          <h3>This PortFoilo </h3>
          <img src={porfolio} alt="NoImageYet" />
          <p>
            By Combining HTML,CSS, and React, I created a professional PortFoilo
            that showcases my expertise and provides an engaging experience for
            Visitors. This tech stack proved ideal for building a fast,
            responsive, and interactive web application.
          </p>
        </div>

        <p>
          <i>More Loading...</i>{" "}
        </p>
      </div>
    );
  }
}

export default Project;
