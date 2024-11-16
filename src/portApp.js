import React, { Component } from "react";
import Header from "./component/header";
import About from "./component/about";
import Project from "./component/project";
import Contact from "./component/contact";
import Footer from "./component/footer";
import "./styles/portApp.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import { MdCancel } from "react-icons/md";
import { CiSliderHorizontal } from "react-icons/ci";
import { FaGithub,FaWhatsapp , FaLinkedinIn} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Navbar = (props) => {
  const { isVisible, handleNavClick,sidebarRef} = props;

  return (
    <div>

<div className="NavContainer">
      <nav 
       ref={sidebarRef}
      className={`NavDesign  ${isVisible ? "open" : "close"}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={handleNavClick}>Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/about" onClick={handleNavClick}>About</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/project" onClick={handleNavClick}>Projects </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/contact" onClick={handleNavClick}>Contact </NavLink>{" "}
          </li>
        </ul>
      </nav>
    </div>

    </div>
   
  );
};

/*App DashBoard */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  this.sidebarRef = React.createRef();
  }
  



  componentDidMount() {

    document.addEventListener('mousedown',this.handleClickOutside);
   
  }

   componentWillUnmount() {

    document.removeEventListener('mousedown',this.handleClickOutside)
  }

  DisplayButton = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

   handleNavClick = () => {
      this.setState({isVisible: false})
    }

  handleClickOutside =(e) => {
    if(this.sidebarRef.current && !this.sidebarRef.current.contains(e.target)){
      this.setState ({isVisible: false})
    }

    

   
  }

  render() {
    return (
      <div className="app">
        {/*DashBoard Container */}
        <div className="headDiv">
          <div className="LinkContainer">
            <a href="https://github.com/Solom0m">
              {" "}
              <FaGithub />{" "}
            </a>
            <a href="https://x.com/therealnnamani?t=7GmwKXQ6yeHkb-S5OHQopg&s=09">
              <BsTwitterX />
            </a>
            <a href="hrttps://wa.me/message/NG5EUZ54WXZDH1"> <FaWhatsapp/> </a>
            <a href="https://www.linkedin.com/in/solo-mon-5b9b19262?utm_source=share&utm_
            source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedinIn/></a>
          </div>
          <button onClick={this.DisplayButton} className="isVisibleBtn">
            {this.state.isVisible ?  <MdCancel />:  <CiSliderHorizontal  />  }{" "}
          </button>{" "}
          <br />
        </div>

        <Router>
          <Navbar isVisible={this.state.isVisible}
          sidebarRef = {this.sidebarRef} 
          handleNavClick = {this.handleNavClick} />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Header />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
