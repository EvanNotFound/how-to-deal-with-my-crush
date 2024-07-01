import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <div className={"flex flex-row items-center justify-center gap-1.5"}>
      <Image
        src={"/icon.png"}
        alt={"Logo"}
        width={512}
        height={512}
        className={"h-6 w-6 -translate-y-[1px]"}
      />
      <span className={"text-lg font-bold"}>一个自以为是的情感指南</span>
    </div>
  ),
  project: {
    link: "https://github.com/EvanNotFound/how-to-deal-with-my-crush",
  },
  docsRepositoryBase:
    "https://github.com/EvanNotFound/how-to-deal-with-my-crush",
  footer: {
    content: (
      <div className={"flex w-full flex-row items-center justify-between"}>
        <p className="_text-sm">
          <Link href={"https://creativecommons.org/licenses/by-sa/4.0/"}>
            CC BY-SA 4.0{" "}
          </Link>
          © {new Date().getFullYear()} EvanNotFound
        </p>
        <p className="_text-sm">
          made with ❤️ by <Link href="https://evannotfound.com">Evan</Link>
        </p>
      </div>
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
        <meta property={"og:image"} content={"/opengraph.png"} />
        <Script
          defer
          src="/lib/beacon.min.js"
          data-cf-beacon='{"token": "82cfd5698e6d457fbba750a86b5d3370"}'
        ></Script>
      </>
    );
  },
  // banner: {
  //   key: "aifadian-sponsorship",
  //   content: (
  //     <a
  //       href="https://afdian.net/a/evannotfound"
  //       target="_blank"
  //       rel="noreferrer"
  //     >
  //       ☕️ 你有个朋友也破防了？来爱发电赞助我吧！→
  //     </a>
  //   ),
  //   dismissible: true,
  // },
};

export default config;
