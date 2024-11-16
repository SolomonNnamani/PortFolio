import React, { Component } from "react";
import "../styles/footer.css";

import { FaGithub,FaWhatsapp , FaLinkedinIn} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {SiGmail} from 'react-icons/si'
import { IoCallOutline } from "react-icons/io5";

class Footer extends Component {
  render() {
    return (
      /* Footer DashBoard */
      <div className="footerContainer">
        <h4>SAY HELLO </h4>
        <a href="mailto:solomonnnamani01@gmail.com"><SiGmail/> Hi there&#64;Solomon</a>
        <p> <IoCallOutline /> +2349055299725 </p>
        <p> <IoCallOutline /> +2349165723228 </p>

        <div className="linkCenter">
    <p> You may also find me on these platforms</p>  

      <a href="https://github.com/Solom0m">
      <FaGithub />
    </a>
    <a href="https://x.com/therealnnamani?t=7GmwKXQ6yeHkb-S5OHQopg&s=09">
      <BsTwitterX />
    </a>
    <a href="hrttps://wa.me/message/NG5EUZ54WXZDH1"> <FaWhatsapp/> </a>
    <a href="https://www.linkedin.com/in/solo-mon-5b9b19262?utm_source=share&utm_
    source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedinIn/></a>

        </div>
       






        <hr />
        <p className="copy">&copy; Solomon Nnamani, 2024</p>
      </div>
    );
  }
}

export default Footer;
