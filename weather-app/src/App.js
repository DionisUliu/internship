import WeatherBox from "./components/weatherBox/WeatherBox";
import allWeathers from "./weather.json";
const App = () => {
  const todayWeather = allWeathers.weather[Math.floor(Math.random() * 3)];

  return (
    <div>
      <WeatherBox todayWeather={todayWeather}></WeatherBox>
    </div>
  );
};
export default App;
