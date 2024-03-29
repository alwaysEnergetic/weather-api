// eslint-disable @typescript-eslint/no-use-before-define
import { Component } from "react";

// to get api key: https://openweathermap.org/appid
const API_KEY = "a256759540cfa9f237b08a1777849af3";

interface CityWeatherProps {
  city: string;
}

interface CityWeatherState {
  weatherResult: any;
  isLoading: boolean;
}

export default class CityWeather extends Component<
  CityWeatherProps,
  CityWeatherState
> {
  public constructor(props: any) {
    super(props);
    this.state = {
      weatherResult: null,
      isLoading: false,
    };
  }

  public componentDidMount() {
    const { city } = this.props;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((r) => r.json())
      .then((result) =>
        this.setState({ weatherResult: result, isLoading: true })
      );
  }

  public render() {
    const { city } = this.props;
    const { weatherResult, isLoading } = this.state;

    return (
      <div>
        <h1>{city}</h1>
        {isLoading === true ? (
          <>
            <div>
              Temperature: {KtoF(weatherResult.main.temp).toFixed(0)} &#8457;
            </div>
            <div>Descripiton: {weatherResult.weather[0].description}</div>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
}

function KtoF(tempKevlin: number) {
  return ((tempKevlin - 273.15) * 9) / 5 + 32;
}
