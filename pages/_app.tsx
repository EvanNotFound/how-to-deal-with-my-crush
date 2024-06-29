import type { ReactElement } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="G-7KDKC9L6V7" />
    </>
  );
}
