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
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Navbar = (props) => {
  const { isVisible } = props;

  return (
    <div className="NavContainer">
      <nav className={`NavDesign  ${isVisible ? "open" : "close"}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/about">About</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/project">Projects </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/contact">Contact </NavLink>{" "}
          </li>
        </ul>
      </nav>
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
  }
  componentDidMount() {
    this.DisplayButton();
  }

  DisplayButton = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

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
            <a href="https://x.com/SSolomon01?t=ZTbu5ZpcYWELVZOuEqZwjg&S=09">
              {" "}
              <BsTwitterX />{" "}
            </a>
          </div>
          <button onClick={this.DisplayButton} className="isVisibleBtn">
            {this.state.isVisible ? <MdCancel /> : <CiSliderHorizontal />}{" "}
          </button>{" "}
          <br />
        </div>

        <Router>
          <Navbar isVisible={this.state.isVisible}  />
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
