import React, { Component } from "react";

import weather_logo from "../assets/weather_logo.png";
import styles from "../decorations/styles.module.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.navbar}>
        <div className="container row">
          <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6"></div>
          <div className="col-md-0.5 col-lg-0.5 col-sm-0.5 col-xs-0.5">
            <img
              src={weather_logo}
              className={styles.logoProps}
              alt="logo"
            ></img>
          </div>
          <div className="col-md-5.5 col-lg-5.5 col-sm-5.5 col-xs-5.5">
            <label className={styles.titleProps}>Weather Info</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
