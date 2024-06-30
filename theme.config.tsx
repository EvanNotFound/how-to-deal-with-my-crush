import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Script from "next/script";

const config: DocsThemeConfig = {
  logo: <span className={"text-lg font-bold"}>一个自以为是的情感指南</span>,
  project: {
    link: "https://github.com/EvanNotFound/how-to-deal-with-my-crush",
  },
  docsRepositoryBase:
    "https://github.com/EvanNotFound/how-to-deal-with-my-crush",
  footer: {
    content: (
      <p className="_text-sm">© {new Date().getFullYear()} EvanNotFound</p>
    ),
  },
  head: function useHead() {
    const config = useConfig();
    const { route } = useRouter();

    const description =
      config.frontMatter.description ||
      "一个由 Evan 亲自撰写，收集，总结的情感指南";
    const title = config.title + (route === "/" ? "" : " | 自以为是的情感指南");

    return (
      <>
        <title>{title}</title>
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <Script
          defer
          src="/lib/beacon.min.js"
          data-cf-beacon='{"token": "82cfd5698e6d457fbba750a86b5d3370"}'
        ></Script>
      </>
    );
  },
  banner: {
    key: "aifadian-sponsorship",
    content: (
      <a
        href="https://afdian.net/a/evannotfound"
        target="_blank"
        rel="noreferrer"
      >
        ☕️ 你有个朋友也破防了？来爱发电赞助我吧！→
      </a>
    ),
    dismissible: true,
  },

  // useNextSeoProps() {
  //   return {
  //     titleTemplate: "%s – 一个自以为是的情感指南",
  //   };
  // },
};

export default config;
