// eslint-disable @typescript-eslint/no-use-before-define
import React, { FC, useState, useEffect } from "react";
import { getIconUrl, searchLocation } from "../../services/weather";
import Loader from "../Loader/Loader";

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
    let sample = async () => {
      setState({ ...state, isLoading: false });
      const result = await searchLocation(props.city);
      setState({ weatherResult: result, isLoading: true });
    };
    sample();
  }, [props]);

  const { weatherResult, isLoading } = state;

  return (
    <div>
      <h1>{props.city}</h1>
      {isLoading === true ? (
        <>
          {state.weatherResult ? (
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
            <div>Unable to find location!</div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export const KtoF = (tempKevlin: number) => {
  return ((tempKevlin - 273.15) * 9) / 5 + 32;
};

export default CityWeather;
