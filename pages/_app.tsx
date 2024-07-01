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
        data-website-id="0f5f41ba-4963-4f64-bed9-96bebca5d756"
      ></script>
    </>
  );
}
