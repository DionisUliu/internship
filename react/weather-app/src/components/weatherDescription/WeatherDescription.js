import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faWind,
  faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";

const WeatherDescription = ({
  highTemperature,
  lowTemperature,
  windSpeed,
  description,
}) => {
  return (
    <div className="container">
      <div>
        <h4 className="highest">
          <FontAwesomeIcon icon={faTemperatureHigh} /> Highest {highTemperature}
          &deg;C
        </h4>
      </div>
      <div>
        <h4 className="lowest">
          <FontAwesomeIcon icon={faTemperatureLow} /> Lowest {lowTemperature}
          &deg;C
        </h4>
      </div>
      <div>
        <h4 className="wind">
          <FontAwesomeIcon icon={faWind} /> Wind Speed {windSpeed} m/s
        </h4>
      </div>
      <div>
        <h5 className="description">"{description}"</h5>
      </div>
    </div>
  );
};
export default WeatherDescription;
