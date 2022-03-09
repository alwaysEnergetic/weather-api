// eslint-disable @typescript-eslint/no-use-before-define
import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { getIconUrl, searchLocation } from "../../services/weather";
import { CityWeatherState } from "../../model/Weather";

export const CityWeather = (props: any) => {
  const [state, setState] = useState<CityWeatherState>({
    weatherResult: null,
    isLoading: false,
  });

  useEffect(() => {
    const sample = async () => {
      setState({ ...state, isLoading: false });
      const result = await searchLocation(props.city);
      setState({ weatherResult: result, isLoading: true });
    };
    sample();
  }, [props]);

  const { weatherResult, isLoading } = state;

  return (
    <div className="flex items-center justify-center">
      <div className="w-96 rounded-xl shadow-xl bg-white mt-20 text-center">
        {isLoading === true ? (
          <>
            <header className=" text-5xl font-semibold p-6">
              {props.city}
            </header>
            {state.weatherResult ? (
              <>
                <img
                  src={getIconUrl(weatherResult.weather[0].icon)}
                  alt={weatherResult.weather[0].main}
                  className="object-contain sm:h-32 h-16 sm:w-32 w-16 m-auto"
                />{" "}
                <p className="text-3xl font-semibold opacity-80">
                  {weatherResult.weather[0].description}
                </p>
                <div>
                  <p className="text-2xl font-semibold mt-6 opacity-80">
                    {" "}
                    Temperature:{" "}
                    <span className="text-7xl  font-black">
                      {KtoF(weatherResult.main.temp).toFixed(0)} &#8457;{" "}
                    </span>
                  </p>
                </div>
              </>
            ) : (
              <p className="text-lg">Unable to find location!</p>
            )}
            <footer className="text-right py-3 px-8 text-gray-500"></footer>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export const KtoF = (tempKevlin: number) => {
  return ((tempKevlin - 273.15) * 9) / 5 + 32;
};

export default CityWeather;
