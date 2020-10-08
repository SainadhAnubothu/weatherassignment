import React, { Component } from "react";
import styles from "../decorations/styles.module.css";

class CurrentWeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      temperature,
      city,
      minTemp,
      maxTemp,
      description,
      icon,
    } = this.props;
    const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
      <center className={styles.currentWeatherStyle}>
        <div>{city}</div>
        <div>
          {minTemp}&deg; | {maxTemp}&deg;
        </div>
        <div className={styles.tempStyle}>
          {temperature}
          <sup>&#8451;</sup>
        </div>
        <div>
          <img src={url} alt="icon_desc"></img>
          <span className={styles.descStyle}>{description}</span>
          <span className={styles.descStyle}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#30c030",
                fontWeight: "bolder",
              }}
              onClick={this.props.refreshHandler}
            >
              <label>&#8634;</label>
            </button>
          </span>
        </div>
      </center>
    );
  }
}

export default CurrentWeatherDisplay;
