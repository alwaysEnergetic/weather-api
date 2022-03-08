import { WeatherLocation } from "../model/Weather";

const API_KEY = "a256759540cfa9f237b08a1777849af3";

export async function searchLocation(
  city: string
): Promise<WeatherLocation | undefined> {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  if (result.status === 404) return undefined;
  if (result.status !== 200) throw new Error("Failed to read location data");

  return await result.json();
}

export function getIconUrl(code: string): string {
  return `http://openweathermap.org/img/wn/${code}.png`;
}
