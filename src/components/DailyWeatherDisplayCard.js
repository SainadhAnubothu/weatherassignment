import React, { Component } from "react";

import styles from "../decorations/styles.module.css";
class DailyWeatherDisplayCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  dateFormat = (epochValue) => {
    var dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var rdblFormat = new Date(epochValue * 1000);
    return `${dayArr[rdblFormat.getDay()]} ${rdblFormat.getDate()}`;
  };
  render() {
    const url = `http://openweathermap.org/img/wn/${this.props.value.weather[0].icon}@2x.png`;
    const dailyData = this.props.value;
    return (
      <center style={{ backgroundColor: "#cfd5d3" }}>
        <div className={styles.dateStyle}>
          {this.dateFormat(this.props.value.dt)}
        </div>
        <div>
          <img src={url} alt="icon_desc"></img>
        </div>
        <div>
          <span style={{ fontSize: "15px", fontWeight: "bold" }}>
            {Math.round(dailyData.temp.max - 273.15)}
            <sup>&deg;</sup>
          </span>
          <span>&nbsp;</span>
          <span style={{ fontSize: "12px" }}>
            {Math.round(dailyData.temp.min - 273.15)}
            <sup>&deg;</sup>
          </span>
        </div>
        <div>{dailyData.weather[0].description}</div>
      </center>
    );
  }
}

export default DailyWeatherDisplayCard;
