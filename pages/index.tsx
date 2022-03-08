import Head from "next/head";
import Search from "../components/Search/Search";
import Loader from "../components/Loader/Loader";
import { CityWeather } from "../components/WeatherBox/city-weather-refactor";

export default function IndexPage(props: any) {
  return (
    <div>
      <Head>
        <title>Weather</title>
      </Head>
      <main>
        {props.isLoading ? (
          <Loader />
        ) : (
          <>
            <Search setIsLoading={props.setIsLoading} />
            <CityWeather />
          </>
        )}
      </main>
    </div>
  );
}
