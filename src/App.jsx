import { useState } from "react";
import "./App.css";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/Api";
import Current_weather from "./components/current-weather/Current_weather";
import Search from "./components/search/Search";
import Forecast from "./components/forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [daysCount, setDaysCount] = useState(5);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => {
        console.log(error);
        setCurrentWeather(null);
        setForecast(null);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      {/* The main app container */}
      <div className="container mx-auto max-w-[1080px] my-5 p-5 bg-gray-800 text-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-2">
            Weather App
          </h1>
          <p className="text-lg text-gray-300">
            Your reliable source for current weather and forecasts
          </p>
        </div>

        <Search onSearchChange={handleOnSearchChange} />

        <div className="mt-10">
          <div className="mb-4">
            <label htmlFor="daysCount" className="block text-lg mb-2">
              Number of Forecast Days:
            </label>
            <select
              id="daysCount"
              value={daysCount}
              onChange={(e) => setDaysCount(Number(e.target.value))}
              className="bg-gray-700 border border-gray-600 rounded-lg p-2 text-white"
            >
              {[1, 2, 3, 4, 5].map((day) => (
                <option key={day} value={day}>
                  {day} day{day > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-10">
            {currentWeather && <Current_weather data={currentWeather} />}
          </div>
          <div className="mt-5">
            {forecast && <Forecast data={forecast} daysCount={daysCount} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
