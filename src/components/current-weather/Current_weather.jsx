/* eslint-disable react/prop-types */
export default function Current_weather({ data }) {
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
          className="w-20 h-20 filter invert brightness-100"
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
      </div>
    </div>
  );
}
