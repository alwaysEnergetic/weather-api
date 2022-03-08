import {WeatherLocation, WeatherConditions} from "../model/Weather";

const API_KEY:string = process.env.REACT_APP_OPEN_WEATHER_API_KEY as string;

export async function searchLocation(city: string): Promise<WeatherLocation | undefined> {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    if (result.status === 404) return undefined;
    if (result.status !== 200) throw new Error('Failed to read location data');

    return await result.json();
}