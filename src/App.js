import React from "react";
import Header from "./components/HeaderComponent";
import WeatherDashboard from "./components/WeatherDashboardComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      {/*<TestCorousel></TestCorousel>*/}
      <Header></Header>
      <WeatherDashboard></WeatherDashboard>
    </div>
  );
}

export default App;
