import Search from "../components/Search/Search";

export default function IndexPage(props: any) {
  return (
    <div>
      <title>Weather</title>
      <main>
        <Search setIsLoading={props.setIsLoading} />
      </main>
    </div>
  );
}
