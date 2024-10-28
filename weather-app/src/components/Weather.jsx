import React, { useState } from "react";
import datas from "../datas";
import { WeatherInfo } from "./WeatherInfo";
import img from "../assets/img.webp";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherdata = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"2643c400e8a4f55da019b5beb631f955"}&units=metric`
    );
    const data = await response.json();
    if (data.cod === "404") {
      alert("City not found");
    } else {
      setWeatherData(data);
      setCity("");
      console.log(data);
    }
  };

  const inputHandler = (e) => {
    if (e.key === "Enter") {
      getWeatherdata(city);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        display: "flex",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full h-max m-0"
    >
      {/* <img src={wpic} /> */}
      <ul className=" bg-stone-800 border-2 border-black items-start justify-start text-left p-4 text-2xl opacity-90 ">
        <p className=" text-2xl text-yellow-400  w-fit rounded-sm  ">
          List of Largest Cities of IRAN
        </p>
        {datas.iranCities.map((cityName, index) => (
          <li
            className="cursor-pointer hover:bg-stone-950 text-slate-300 border-2 m-2 rounded-sm p-2"
            key={index}
            onClick={() => getWeatherdata(cityName)}
          >
            {cityName}
          </li>
        ))}
      </ul>

      {/* /search section */}

      <div className="flex flex-col mx-auto my-auto">
        <h3 className="bg-yellow-600 border-2 border-white text-lg self-center w-full rounded-md  p-2 m-2">
          Weather In Your City/Country:
        </h3>
        <input
          className="cursor-pointer bg-slate-950 border-2  opacity-90 rounded-md w-full self-center  text-white p-2  "
          type="text"
          autoComplete="off"
          placeholder="🔎Search:"
          value={city}
          onChange={(e) => setCity(e.target.value.trim())}
          onKeyUp={inputHandler}
        />
        {/* Weather info  */}
        {weatherData && <WeatherInfo weatherData={weatherData} />}
      </div>
    </div>
  );
};
