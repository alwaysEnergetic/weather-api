// eslint-disable @typescript-eslint/no-use-before-define
import React, { FC, useState, useEffect } from "react";
import { getIconUrl } from "../services/weather";

// to get api key: https://openweathermap.org/appid
const API_KEY = "a256759540cfa9f237b08a1777849af3";

interface CityWeatherProps {
  city: string;
}

interface CityWeatherState {
  weatherResult: any;
  isLoading: boolean;
}

export const CityWeather = (props: any) => {
  const [state, setState] = useState<CityWeatherState>({
    weatherResult: null,
    isLoading: false,
  });

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${API_KEY}`
    )
      .then((r) => r.json())
      .then((result) => setState({ weatherResult: result, isLoading: true }))
      .catch((error) => console.log(error));
  });

  const { weatherResult, isLoading } = state;

  return (
    <div>
      <h1>{props.city}</h1>
      {isLoading === true ? (
        <>
          <div>
            Temperature: {KtoF(weatherResult.main.temp).toFixed(0)} &#8457;
          </div>
          <div>Descripiton: {weatherResult.weather[0].description}</div>
          <img
            src={getIconUrl(weatherResult.weather[0].icon)}
            alt={weatherResult.weather[0].main}
          />{" "}
          {weatherResult.weather[0].main}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export const KtoF = (tempKevlin: number) => {
  return ((tempKevlin - 273.15) * 9) / 5 + 32;
};

export default CityWeather;
