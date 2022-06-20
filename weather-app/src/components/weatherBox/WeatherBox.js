import "./WeatherBox.css";
import WeatherView from "../weatherView/WeatherView";
import WeatherDescription from "../weatherDescription/WeatherDescription";
export default function WeatherBox({ todayWeather }) {
  return (
    <div>
      <div className="box">
        <WeatherView
          condition={todayWeather.condition}
          currentTemperature={todayWeather.currentTemperature}
          image={todayWeather.image}
        />
        <WeatherDescription
          highTemperature={todayWeather.highTemperature}
          lowTemperature={todayWeather.lowTemperature}
          windSpeed={todayWeather.windSpeed}
          description={todayWeather.description}
        />
      </div>
    </div>
  );
}
