/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemHeading,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css"; // Ensure correct styling is applied

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Forecast({ data, daysCount }) {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  // Slice the dailyData based on daysCount prop
  const dailyData = data.list
    .filter((reading) => reading.dt_txt.includes("12:00:00"))
    .slice(0, daysCount);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Daily Forecast</h2>
      <Accordion allowZeroExpanded>
        {dailyData.map((item, index) => {
          const adjustedMinTemp = Math.round(item.main.temp_min) - 3;
          return (
            <AccordionItem key={index} className="border-b border-gray-700">
              <AccordionItemHeading>
                <AccordionItemButton className="flex items-center bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-300">
                  <img
                    alt="weather"
                    className="w-14 h-14 mr-4"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <div className="flex-1 flex justify-between items-center">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold mb-1">
                        {forecastDays[index]}
                      </h3>
                      <p className="text-sm text-gray-400 mb-1">
                        {item.dt_txt.split(" ")[0]}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm mb-1">
                        {item.weather[0].description}
                      </p>
                      <p className="text-sm text-gray-300">
                        {adjustedMinTemp}°C / {Math.round(item.main.temp_max)}°C
                      </p>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="bg-gray-700 p-6 rounded-b-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <p className="text-sm font-semibold">Humidity</p>
                    <p className="text-lg font-bold">{item.main.humidity}%</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <p className="text-sm font-semibold">Wind Speed</p>
                    <p className="text-lg font-bold">{item.wind.speed} m/s</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <p className="text-sm font-semibold">Feels Like</p>
                    <p className="text-lg font-bold">
                      {Math.round(item.main.feels_like)}°C
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <p className="text-sm font-semibold">Wind Direction</p>
                    <p className="text-lg font-bold">{item.wind.deg}°</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-2">
                    <p className="text-sm font-semibold">Pressure</p>
                    <p className="text-lg font-bold">
                      {item.main.pressure} hPa
                    </p>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
