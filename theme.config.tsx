import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span className={"font-bold text-lg"}>一个自以为是的情感指南</span>,
  project: {
    link: 'https://github.com/EvanNotFound/how-to-deal-with-my-crush',
  },
  docsRepositoryBase: 'https://github.com/EvanNotFound/how-to-deal-with-my-crush',
  footer: {
    text: '2024 © EvanNotFound',
  },
  head: (
    <>
      <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "de9abb7ca9d84afab8664d1c9d405979"}'></script>
    </>
  ),

  useNextSeoProps() {
    return {
      titleTemplate: '%s – 一个自以为是的情感指南'
    }
  }
}

export default config
