import React, { Component } from "react";
import data from "../database/data";
import Profilepic from "../images/profile.jpg";
import "../styles/header.css";
import { FaHtml5, FaSass, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejs } from "react-icons/di";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      special: "FrontEnd Developer",
      index: 0,
      heading: "",
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        special: data.special[prevState.index],
        index: (prevState.index + 1) % data.special.length,
      }));
    }, 1000);
    this.Info();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  Info = () => {
    let heading = data.info;
    let mapHeading = heading.map((head) => (
      <div>
        <h3>{head.heading} </h3>
        <p>{head.text} </p>
      </div>
    ));

    this.setState({
      heading: mapHeading,
    });
  };

  render() {
    return (
      /*Home Dashboard */
      <div>
        {/* first Header*/}
        <div className="first-header">
          <h1>
            Hi! I'm {data.firstName} <br />{" "}
            <span style={{ color: "#032b44" }}>{this.state.special} </span>{" "}
          </h1>
          <p>
            Combining modern technology and creativity, i design and build
            websites,apps using specific frameworks in other to help an
            individual achieve there goals.
          </p>
        </div>

        {/* second Header*/}
        <div className="second-header">
          <h2 style={{ letterSpacing: "0.2em" }}>
            Bringing Your Vision to Life
          </h2>
          <p>Expert Frontend Development Solutions</p>
        </div>
        <div className="gridContainer">{this.state.heading}</div>

        {/* third Header*/}
        <div className="third-header">
          <div className="profilePic">
            <img src={Profilepic} alt="ProfilePic" />{" "}
          </div>

          <div className="library">
            <h2> Frameworks</h2>
            <p>
              i craft seamless, high-performance digital experiences across
              mobile and web platforms using innovative frameworks,libraries and
              trusted open-source solutions.{" "}
            </p>

            <div className="iconsContainer">
              <FaHtml5 className="icons" style={{ color: "orangered" }} />
              <FaSass className="icons" style={{ color: "#c51077" }} />
              <IoLogoJavascript className="icons" style={{ color: "yellow" }} />
              <DiNodejs className="icons" style={{ color: "green" }} />
              <FaReact className="icons" style={{ color: "skyblue" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
