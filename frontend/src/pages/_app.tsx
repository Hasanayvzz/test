import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../@app/utility/createEmotionCache";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoaderProvider } from "../contexts/loaderContext";
import "../i18n";
import { ThemeContextProvider } from "../contexts/Theme/ThemeContext";
import "../assets/scss/styles.scss";
import { AuthContextProvider } from "../contexts/AuthContext";
import { handleScroll } from "../hooks/animation";
import { SettingsContextProvider } from "../contexts/SettingsContext";

const projectId = "17efc7ddc30b8c6d6ee7da30cfe7e820";
const clientSideEmotionCache = createEmotionCache();
interface ICustomAppProps extends AppProps {
  emotionCache: any;
}

const MyApp = (props: ICustomAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [DarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    let Theme = localStorage.getItem("theme");
    if (Theme === "light") {
      setDarkTheme(false);
    } else {
      setDarkTheme(true);
    }
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />

        <title>Seyehat Düşleri</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
        {/* boxicon connection cdn link */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"></link>
        {/* bootstrap icons connection cdn link */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
        {/* <!-- Favicons --> */}
        <link href="favicon.ico" rel="icon" />
        {/* Font family cdn connection link */}
      </Head>
      {/*@ts-ignore */}

      <ThemeContextProvider>
        <CacheProvider value={emotionCache}>
          {/*@ts-ignore */}
          <AuthContextProvider>
            <LoaderProvider>
              <SettingsContextProvider>
                <Component {...pageProps} />
              </SettingsContextProvider>
            </LoaderProvider>
          </AuthContextProvider>
        </CacheProvider>
      </ThemeContextProvider>
      <ToastContainer />
    </>
  );
};
export default MyApp;
