export interface WeatherLocation {
  id: number;
  name: string;
}

export interface CityWeatherState {
  weatherResult: any;
  isLoading: boolean;
}

export interface WeatherConditions {
  id: number;
  main: string;
  description: string;
  icon: string;
}
