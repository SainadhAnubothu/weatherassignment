import React, { Component } from "react";
import HourlyWeatherDisplayCard from "../components/HourlyWeatherDisplayCard";
import Carousel from "react-elastic-carousel";
import styles from "../decorations/styles.module.css";

const options = [{ width: 3100, itemsToShow: 3 }];
class HourlyWeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <center style={{ backgroundColor: "rgb(149 176 195)" }}>
        <div className={styles.headingStyle}>Hourly</div>
        <Carousel
          breakPoints={options}
          pagination={false}
          style={{ background: "none" }}
        >
          {this.props.hourly.map((val, index) => (
            <HourlyWeatherDisplayCard
              key={index}
              value={val}
            ></HourlyWeatherDisplayCard>
          ))}
        </Carousel>
        <div>
          <br></br>
        </div>
      </center>
    );
  }
}
export default HourlyWeatherDisplay;
