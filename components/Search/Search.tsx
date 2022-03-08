import { useState } from "react";
import CityWeather from "../WeatherBox/city-weather-refactor";

export default function Search(props: any) {
  const [city, setCity] = useState<string | null>(null);
  return (
    <div className="py-12">
      <form
        className="flex items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          const formdata: FormData = new FormData(e.currentTarget);
          setCity(formdata.get("city")!.toString());
          props.setIsLoading(true);
        }}
      >
        <span className="sm:text-3xl text-xl  font-semibold text-center">Weather Search:</span>{" "}
        <input
          data-testid="weather-input"
          className="ml-2 border-none sm:h-15 sm:text-3xl text-1xl sm:w-80 w-11/12 p-4 rounded-l-xl shadow-md"
          type="text"
          name="city"
        />

        <button className="border-none sm:h-15 sm:text-3xl p-4 rounded-r-xl font-semibold text-1xl bg-buttonColor" type="submit">
          SUBMIT
        </button>
      </form>

      {city && (
        <div className="mt-4">
          <CityWeather city={city} />
        </div>
      )}
    </div>
  );
}
