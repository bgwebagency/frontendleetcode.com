import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>frontendleetcode.com</strong>,
  project: {
    link: 'https://github.com/bgwebagency/frontendleetcode.com',
  },
  chat: {
    link: 'https://discord.gg/62VR3MMCVm',
  },
  docsRepositoryBase: 'https://github.com/bgwebagency/frontendleetcode.com',
  footer: {
    text: 'Frontend Leetcode - Free resources for effective Front End interviews preparation',
  },
  sidebar: {
    autoCollapse: true,
  },
}

export default config
