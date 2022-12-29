import React from "react";
import { render, screen } from "@testing-library/react";
import CityWeather from "./city-weather-refactor";

describe("CityWeather component ", () => {
  it("should render a regoin name San Francisco", () => {
    render(<CityWeather city={"San Francisco"} />);
    setTimeout(function () {
      expect(screen.getByRole("header")).toHaveDisplayValue("San Francisco");
    }, 3000);
  });
});
