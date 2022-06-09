export default function Footer() {
  return (
    <footer className="text-3xl text-center absolute bottom-0 w-full p-8 bg-background">
      <p className="text-textColor">
        Site deployed {}
        <a
          className="text-yellow font-semibold hover:underline "
          target="_blank"
          href="https://github.com/alwaysEnergetic/coding-test-weather-api"
        >
        </a>{" "}
        @2022 March 8
      </p>
    </footer>
  );
}
