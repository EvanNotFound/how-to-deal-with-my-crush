import React, { ReactElement } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-7KDKC9L6V7" />
      <Script
        defer
        src="/beacon.min.js"
        data-cf-beacon='{"token": "82cfd5698e6d457fbba750a86b5d3370"}'
      ></Script>
      <script
        defer
        src="https://events.ohevan.com/script.js"
        data-website-id="2d4f1a5b-77d5-4448-9585-05cd43dbbefd"
      ></script>
    </>
  );
}
