import React, { memo, useMemo } from "react";
import datas from "../datas";

export const WeatherInfo = memo(({ weatherData }) => {
  const showData = useMemo(() => {
    const now = new Date();
    const day = datas.days[now.getDay()];
    const month = datas.months[now.getMonth()];
    const year = now.getFullYear();
    const date = now.getDate();
    return `${day} ${date} ${month} ${year}`;
  }, []);
  return (
    <>
      <main className="">
        <section className=" bg-yellow-600 border-2 rounded-md border-white p-2 m-2">
          <div className="  border-white ">
            Weather Info: {weatherData.name}, {weatherData.sys.country}
          </div>
          <div className="   "> {showData}</div>
        </section>
        <div className="bg-stone-700 rounded-md border-2 items-start justify-start text-left p-4 text-white  opacity-85 w-fit mx-auto">
          <div className="temp text-xl  p-2 border-2 ">
            Temperature: {weatherData.main.temp.toFixed()}°C
          </div>
          <div className="feels-like  ">
            {" "}
            Feels-Like: {weatherData.main.feels_like.toFixed()}°C{" "}
          </div>
          <div className="temp-min  ">
            Min-Temp: {weatherData.main.temp_min.toFixed()}°C
          </div>
          <div className="temp-max  ">
            Max-Temp: {weatherData.main.temp_max.toFixed()}°C
          </div>
          <div className="humidity  ">
            Humidity: {weatherData.main.humidity}%
          </div>
          <div className="wind  ">Wind: {weatherData.wind.speed} m/s</div>
          <div className="weather">Weather: {weatherData.weather[0].main}</div>
          <div className="sea-level">
            Sea-Level: {weatherData.main.sea_level} m
          </div>
          <div className="icon bg-yellow-500 rounded-full w-20 items-center justify-center m-auto">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
            />
          </div>
        </div>
      </main>
    </>
  );
});
