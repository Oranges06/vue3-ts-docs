import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Vue 3+TypeScript 学习文档',
  description: '详细学习 Vue 3 和 TypeScript 的指南',
  themeConfig: {
    siteTitle: '前端学习',
    logo: '/assets/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'API 参考', link: '/api/' },
      { text: '笔记', link: '/note/' },
      { text: '常见问题', link: '/fag/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Oranges06/vue3-ts-docs.git' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          collapsed: true,
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
            { text: '基本概念', link: '/guide/concepts' }
          ]
        }
      ],
      '/components/': [
        {
          text: '常用组件',
          items: [
            { text: '介绍', link: '/components/' },
            { text: '按钮 Button', link: '/components/button' },
            { text: '表单 Form', link: '/components/form' },
            { text: '表格 Table', link: '/components/table' }
          ]
        }
      ],
      '/note/': [
        {
          text: '学习笔记',
          collapsed: true,
          items: [
            { text: '介绍', link: '/note/' },
            { text: '前端发展的几个时代', link: '/note/前端发展的几个时代' },
            { text: '掌握前端“三驾马车”', link: '/note/掌握前端“三驾马车”' },
            { text: 'npm、pnpm 和 yarn 学习', link: '/note/npm' },
            { text: 'Vue.js 3 基础', link: '/note/Vue3' },
            { text: '关于Vite创建项目', link: '/note/Vite' },
            {
              text: '使用 VitePress 构建自己的学习站点实施步骤',
              link: '/note/VitePress'
            },
            { text: 'VueUse学习笔记', link: '/note/VueUse' }
          ]
        }
      ]
    }
  }
})
