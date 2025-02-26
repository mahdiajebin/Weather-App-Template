import { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  //const VITE_WEATHER_API_KEY=68c1acbcc4984c5459103b30b1ee2145;

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  console.log("API Key:", API_KEY);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather", error);
    }
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{Math.round(weather.main.temp)}°F | {weather.weather[0].description}</p>
          <div className="weather-details">
            <p>🌅 Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>💨 Wind: {weather.wind.speed} mph</p>
            <p>📊 Pressure: {weather.main.pressure} hPa</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;