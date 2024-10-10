# 使用 VitePress 构建自己的学习站点实施步骤

## 创建项目

命令行输入

```bash
npm init vitepress@latest vue3-ts-docs
```

```bash
cd vue3-ts-docs
```

```bash
npm install
```

运行

```bash
npm run dev
```

## 添加配置

在package.json添加

```java
{
  "name": "vitepress-project",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "serve": "vitepress serve docs",
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "1.0.0-alpha.28",
    "vue": "3.2.44"
  },
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": [
        "@algolia/client-search"
      ]
    }
  },
  "dependencies": {
    "vitepress-theme-demoblock": "^3.0.7"
  }
}

```

可以使用左下角的 NPM SCRIPTS 运行

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728373075120-58776c82-aa94-449f-a486-a83e034b65c0.png)

## 项目结构

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728373240553-9722e261-6f12-43bd-946b-d866e5ebfefe.png)

每个文件夹新建`index.md`作为首页

## 主页配置

`docs/index.md`

```markdown
---
## https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: '前端工程化'
  text: 'Vue 3 + Typescript 学习文档'
  tagline: '落笔生花, 惊起思绪涟漪；拾笔凝思, 记录学习璀璨'
  image:
    src: https://chenpicture.oss-cn-shanghai.aliyuncs.com/1569440014103_7.png
    alt: Chrome 浏览器插件
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: 常见问题
      link: /fag/

features:
  - icon: 🔥
    title: 轻松入门
    details: 从头开始，循序渐进地学习 Vue 3 和 TypeScript。
  - icon: 💻
    title: 最佳实践
    details: 涵盖从组件设计到代码优化的实际开发经验，
  - icon: 🚀
    title: 高效开发
    details: 通过 VitePress 和 TypeScript，快速搭建高效、可维护的 Vue 3 应用。
---

<div style="text-align: center; margin-top: 50px;">
  <em>':+ Happy Coding! :+</em>
</div>
```

## 页面样式修改

安装 vitepress-theme-demoblock：

```bash
npm i vitepress-theme-demoblock
```

新建`var.css`和`index.ts`

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728373619753-f848b400-1f28-451a-96d0-f39821ce3def.png)

修改颜色

```css
:root {
  /* 标题 */
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(
    135deg,
    ##6e9bc5 10%,
    ##48668a 108%
  );

  /* 图标背景 */
  --vp-home-hero-image-background-image: linear-gradient(
    135deg,
    ##6e9bc5 10%,
    ##48668a 100%
  );
  --vp-home-hero-image-filter: blur(150px);

  /* brand按钮 */
  --vp-button-brand-border: ##6e9bc5;
  --vp-button-brand-text: ##fff;
  --vp-button-brand-bg: ##154a6c;

  --vp-button-brand-hover-border: ##aed0ec;
  --vp-button-brand-hover-text: ##fff;
  --vp-button-brand-hover-bg: ##48668a;

  --vp-button-brand-active-border: ##f6ceec;

  /* 字体颜色 */
  --vp-c-brand: ##5389ca;
}
```

`index.ts`

```typescript
import DefaultTheme from 'vitepress/theme'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import './styles/var.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {}
}
```

## 配置顶部导航

docs\.vitepress\config.ts

```typescript
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
      ]
    }
  }
})
```

## README.md

编写`README.md`

```markdown
<p align="center">
<img src="https://chenpicture.oss-cn-shanghai.aliyuncs.com/favicon.png" style="width:200px;">
</p>
<h1 align="center">Vue 3 + TypeScript 学习文档</h1>
<p align="center">
无论你是初学者还是有经验的开发者，这个站点都会帮助你掌握最新的 Vue 3 技术与 TypeScript
实践，从基础到进阶，全方位提升你的前端开发能力。
</p>

<p>
<!-- 后面可以加入 ？color=red 这样的参数改变徽章颜色，默认为绿色 -->

![GitHub License](https://img.shields.io/github/license/Oranges06/vue3-ts-docs)
![GitHub Stars](https://img.shields.io/github/stars/Oranges06/vue3-ts-docs)
![GitHub Forks](https://img.shields.io/github/forks/Oranges06/vue3-ts-docs)
![Build Status](https://img.shields.io/github/workflow/status/oranges/vue3-ts-docs/CI)
![NPM Version](https://img.shields.io/npm/v/vue)
![NPM Downloads](https://img.shields.io/npm/dw/vue)
![Maintenance](https://img.shields.io/maintenance/yes/2024)

</p>

#### 🔥 features

- 从头开始，循序渐进地学习 Vue 3和 TypeScript。
- 涵盖从组件设计到代码优化的实际开发经验。
- 通过 VitePress 和 TypeScript，快速搭建高效、可维护的 Vue 3 应用。
```

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728375106765-71b32aa4-1fe3-4afb-9e53-2ced9f7ff996.png)

## LICENSE

编写`LICENSE`

```markdown
MIT License

Copyright (c) 2024 Oranges06

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 上传git

创建公共仓库

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728374092514-d47f9209-73d2-4d61-a9e9-9764ab412d6c.png)

上传代码

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728374176892-35bb648a-1660-4cea-b276-f7f8a4c6471b.png)

## 部署Vercel

用github登录

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728374297345-bb02cd04-4900-4caa-bc68-7789290c51e4.png)

创建

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728374376077-3f3653eb-2bd2-458f-a105-2e52ff67a7bc.png)

选择git仓库

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728374437773-5ab7bdc7-2576-44c6-938d-5db58f42a458.png)

部署

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728374554591-82eaf83f-8b61-47bd-aa20-14730ad5373f.png)

访问页面

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728374686753-a5241ec2-a46f-4b72-b3d8-e41e7f534e4b.png)

## 页面展示

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728374726176-a237286a-4ae3-453e-a786-532de916357c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/33727968/1728375059457-53b7b936-b7d1-4beb-8f10-7e6fadc67c8f.png)
