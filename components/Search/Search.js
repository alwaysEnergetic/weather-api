import { useState } from "react";

export default function Search({ setIsLoading }) {
  const [city, setCity] = (useState < string) | (null > null);
  return (
    <div className="py-2">
      <form
        className="flex items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.currentTarget);
          setCity(formdata.get("city").toString());
          setIsLoading(true);
        }}
      >
        <span>Weather Search:</span>{" "}
        <input
          data-testid="weather-input"
          className="ml-2 border px-2 py-1 border-black"
          type="text"
          name="city"
        />
        <button className="ml-2 text-sm border rounded-lg p-2" type="submit">
          Submit
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
