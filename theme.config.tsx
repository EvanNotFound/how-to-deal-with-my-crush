import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Link from "next/link";
import Image from "next/image";
import { Waline } from "./components/waline";

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
      </>
    );
  },
  color: {
    hue: {
      light: 0,
      dark: 0,
    },
    saturation: {
      light: 69,
      dark: 41,
    },
  },
  main: ({ children }) => {
    const { route } = useRouter();
    const config = useConfig();

    let isShowComments = true;

    if (
      config.frontMatter.comments === false ||
      config.frontMatter.comment === false
    ) {
      isShowComments = false;
    }

    return (
      <>
        {children}
        {isShowComments && (
          <Waline
            serverURL={"https://waline.ohevan.com"}
            path={`relationship.ohevan.com${route}`}
            locale={{
              nick: "昵称",
              nickError: "昵称不能少于3个字符",
              mail: "邮箱",
              mailError: "请填写正确的邮件地址",
              link: "网址",
              optional: "可选",
              placeholder: "破防了？来评论",
              sofa: "暂无评论",
              submit: "提交",
              like: "喜欢",
              cancelLike: "取消喜欢",
              reply: "回复",
              cancelReply: "取消回复",
              comment: "评论",
              refresh: "刷新",
              more: "加载更多...",
              preview: "预览",
              emoji: "表情",
              uploadImage: "上传图片",
              seconds: "秒前",
              minutes: "分钟前",
              hours: "小时前",
              days: "天前",
              now: "刚刚",
              uploading: "正在上传",
              login: "登录",
              logout: "退出",
              admin: "博主",
              sticky: "置顶",
              word: "字",
              wordHint: "评论字数应在 $0 到 $1 字之间！\n当前字数：$2",
              anonymous: "匿名",
              level0: "破防了",
              level1: "我有个朋友",
              level2: "我是没什么问题的",
              level3: "真没感觉",
              level4: "没破防",
              level5: "破烦的是你",
              gif: "表情包",
              gifSearchPlaceholder: "搜索表情包",
              profile: "个人资料",
              approved: "通过",
              waiting: "待审核",
              spam: "垃圾",
              unsticky: "取消置顶",
              oldest: "按倒序",
              latest: "按正序",
              hottest: "按热度",
              reactionTitle: "写的如何？",
            }}
            reaction={[
              "https://emojicdn.elk.sh/😭",
              "https://emojicdn.elk.sh/😋",
              "https://emojicdn.elk.sh/🤓",
              "https://emojicdn.elk.sh/😡",
            ]}
          />
        )}
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
