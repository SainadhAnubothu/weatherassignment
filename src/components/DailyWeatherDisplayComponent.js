import React, { Component } from "react";
import DailyWeatherDisplayCard from "../components/DailyWeatherDisplayCard";
import Carousel from "react-elastic-carousel";
import styles from "../decorations/styles.module.css";

const options = [{ width: 3100, itemsToShow: 3 }];
class DailyWeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <center style={{ backgroundColor: "#cfd5d3" }}>
        <div className={styles.headingStyle}>Daily</div>
        <Carousel
          breakPoints={options}
          pagination={false}
          style={{ background: "none" }}
        >
          {this.props.daily.map((val, index) => (
            <DailyWeatherDisplayCard
              key={index}
              value={val}
            ></DailyWeatherDisplayCard>
          ))}
        </Carousel>
        <div>
          <br></br>
        </div>
      </center>
    );
  }
}

export default DailyWeatherDisplay;
