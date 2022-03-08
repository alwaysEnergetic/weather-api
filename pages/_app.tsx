import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Header />
      <Component
        {...pageProps}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Footer />
    </>
  );
}

export default MyApp;
