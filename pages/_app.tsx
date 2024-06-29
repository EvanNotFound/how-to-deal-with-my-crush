import type { ReactElement } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-7KDKC9L6V7Z" />
    </>
  );
}
