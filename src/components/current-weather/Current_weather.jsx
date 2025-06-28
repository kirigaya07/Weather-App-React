/* eslint-disable react/prop-types */
export default function Current_weather({ data, airQuality }) {
  // Helper to format unix time to HH:MM
  const formatTime = (unix, timezone) => {
    const date = new Date((unix + (timezone || 0)) * 1000);
    return date.toUTCString().slice(-12, -7);
  };
  const sunrise = data.sys?.sunrise;
  const sunset = data.sys?.sunset;
  const timezone = data.timezone;
  const aqi = airQuality?.list?.[0]?.main?.aqi;
  const aqiLevels = [null, "Good", "Fair", "Moderate", "Poor", "Very Poor"];
  return (
    <div className="max-w-xs mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-2xl border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-2xl font-bold">{data.city}</p>
          <p className="text-sm font-light mt-1">
            {data.weather[0].description}
          </p>
        </div>
        <img
          alt="weather"
          className="w-20 h-20 filter invert brightness-100 animate-bounce"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div>
        <p className="text-6xl font-extrabold">
          {Math.round(data.main.temp)}°C
        </p>
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="font-light">Feels Like</span>
            <span className="font-semibold">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-light">Wind</span>
            <span className="font-semibold">{data.wind.speed} m/s</span>
          </div>
          <div className="flex justify-between">
            <span className="font-light">Humidity</span>
            <span className="font-semibold">{data.main.humidity}%</span>
          </div>
          <div className="flex justify-between">
            <span className="font-light">Pressure</span>
            <span className="font-semibold">{data.main.pressure} hPa</span>
          </div>
        </div>
        {/* New: Air Quality and Sunrise/Sunset */}
        <div className="mt-6 border-t border-gray-700 pt-4 space-y-2">
          {aqi && (
            <div className="flex justify-between items-center">
              <span className="font-light">Air Quality</span>
              <span
                className={`font-semibold px-2 py-1 rounded ${
                  aqi === 1
                    ? "bg-green-600"
                    : aqi === 2
                    ? "bg-yellow-500"
                    : aqi === 3
                    ? "bg-orange-500"
                    : aqi === 4
                    ? "bg-red-600"
                    : "bg-purple-800"
                }`}
              >
                {aqiLevels[aqi]}
              </span>
            </div>
          )}
          {sunrise && sunset && (
            <div className="flex justify-between items-center">
              <span className="font-light">Sunrise</span>
              <span className="font-semibold">
                {formatTime(sunrise, timezone)}
              </span>
            </div>
          )}
          {sunrise && sunset && (
            <div className="flex justify-between items-center">
              <span className="font-light">Sunset</span>
              <span className="font-semibold">
                {formatTime(sunset, timezone)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
