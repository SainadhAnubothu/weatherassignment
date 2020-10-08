import React, { Component } from "react";
import axios from "axios";
import CurrentWeatherDisplay from "../components/CurrentWeatherDisplayComponent";
import DailyWeatherDisplay from "../components/DailyWeatherDisplayComponent";
import HourlyWeatherDisplay from "../components/HourlyWeatherDisplayComponent";

class WeatherDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "Retry",
      city: "Retry",
      minTemp: "Retry",
      maxTemp: "Retry",
      description: "Retry",
      icon: "Retry",
      hourly: [],
      daily: [],
    };
  }
  componentDidMount() {
    this.dataFetcher();
  }
  refreshHandler = () => {
    console.log("refreshed");
    this.dataFetcher();
  };
  async dataFetcher() {
    const locResponse = await axios.get(
      "https://www.geolocation-db.com/json/AIzaSyAjeZn4GBfOUsNQ68vBPHFBb45ohb5Yypc"
    );
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${locResponse.data.latitude}&lon=${locResponse.data.longitude}&appid=f13c80a9644a61184bf676e37cf8ee97`;
    const response = await axios.get(url);
    this.setState({
      city: locResponse.data.city,
      temperature: response.data.current.temp - 273.15,
      minTemp: Math.round(response.data.daily[0].temp.min - 273.15),
      maxTemp: Math.round(response.data.daily[0].temp.max - 273.15),
      description: response.data.current.weather[0].main,
      icon: response.data.current.weather[0].icon,
      hourly: response.data.hourly,
      daily: response.data.daily,
    });
  }
  render() {
    return (
      <div>
        <CurrentWeatherDisplay
          temperature={this.state.temperature}
          city={this.state.city}
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          description={this.state.description}
          icon={this.state.icon}
          refreshHandler={this.refreshHandler}
        ></CurrentWeatherDisplay>
        <DailyWeatherDisplay daily={this.state.daily}></DailyWeatherDisplay>
        <HourlyWeatherDisplay hourly={this.state.hourly}></HourlyWeatherDisplay>
      </div>
    );
  }
}

export default WeatherDashboard;
