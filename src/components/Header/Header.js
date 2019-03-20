import React, { Component } from "react";
import { FiAperture } from "react-icons/fi";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-inner-wrapper">
          <div className="logo-wrapper">
            <FiAperture />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
