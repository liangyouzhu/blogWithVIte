import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './configs'

export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/',

  lang: 'zh-CN',
  title: '火の意志',
  titleTemplate: '%s - 火の意志',
  description: '前端武器库，日积月累，可塑星河！',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true // 代码块显示行号
  },




  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    logo: '/logo.png',
    algolia: {
      appId: 'QFZLWPCGNT', // App ID
      apiKey: 'dab30e5c633dad647ec550f3d6bd70dd', // API Key
      indexName: '火の意志', // 需要替换
      placeholder: '请输入关键词',
    },
    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/maomao1996/vitepress-nav-template' },{ icon: 'linkedin', link: 'https://github.com/maomao1996/vitepress-nav-template' }],


    // footer: {
    //   message: '如有转载或 CV 的请标注本站原文地址',
    //   copyright: 'Copyright © 2019-present maomao'
    // },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
