import React from "react";
import "./WeatherView.css";
const WeatherView = ({ image, currentTemperature, condition }) => {
  return (
    <div className="container">
      <img className="icon" src={image} alt="sunny"></img>
      <h3 className="condition">{condition}</h3>
      <h1 className="temperature">{currentTemperature}&deg;C</h1>
    </div>
  );
};
export default WeatherView;
