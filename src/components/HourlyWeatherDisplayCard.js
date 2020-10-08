import React, { Component } from "react";

import styles from "../decorations/styles.module.css";
class HourlyWeatherDisplayCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  timeFormat = (epochValue) => {
    var rdblFormat = new Date(epochValue * 1000);
    return `${rdblFormat.getHours()}:00`;
  };
  dateFormat = (epochValue) => {
    var rdblFormat = new Date(epochValue * 1000);
    return `${rdblFormat.getDate()}-${
      rdblFormat.getMonth() + 1
    }-${rdblFormat.getFullYear()}`;
  };
  render() {
    const url = `http://openweathermap.org/img/wn/${this.props.value.weather[0].icon}@2x.png`;
    const hourlyData = this.props.value;
    return (
      <center style={{ backgroundColor: "rgb(149 176 195)" }}>
        <div className={styles.dateStyle}>
          {this.dateFormat(this.props.value.dt)}
        </div>
        <div className={styles.tempCardStyle}>
          {this.timeFormat(this.props.value.dt)}
        </div>
        <div>
          <img src={url} alt="icon_desc"></img>
        </div>
        <div className={styles.tempCardStyle} style={{ fontWeight: "bold" }}>
          {Math.round(hourlyData.temp - 273.15)}
          <sup>&deg;</sup>
        </div>
        <div>{hourlyData.weather[0].description}</div>
      </center>
    );
  }
}

export default HourlyWeatherDisplayCard;
