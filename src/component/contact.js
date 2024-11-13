import React, { Component } from "react";
import "../styles/contact.css";

class Contact extends Component {
  render() {
    return (
      /* Contact DashBoard */
      <div className="contactContainer">
        <h1>Contact Us</h1>
        <p>
          Experienced software engineer with expertise in frontEnd development
          (HTML,React,JavaScript,Sass etc). i'm eager to join a dynamic team
          where my skills can drive innovation. if you're seeking a dedicated
          professional, feel free to send me a message so we can discuss
          potential opportunities.{" "}
        </p>
        <a href="mailto:solomonnnamani01@gmail.com">
          <i>Contact me</i>
        </a>
      </div>
    );
  }
}

export default Contact;
