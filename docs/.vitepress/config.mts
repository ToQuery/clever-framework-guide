import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Clever Framework 手册",
  description: "Clever Framework 快速开发框架",
  outDir: '../dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],

    sidebar: [
      {text: '首页', link: '/'},
      {text: '指南', link: '/guide/'},
      {
        text: '组件',
        items: [
          {text: '业务数据CRUD', link: '/components/crud/'},
          {text: '操作日志', link: '/components/biz-log/'},
          {text: '系统管理', link: '/components/system/'},
          {text: '缓存', link: '/components/cache/'},
          {text: 'GRpc', link: '/components/grpc/'},
          {text: 'Minio文件存储', link: '/components/minio/'},
          {text: '多数据源', link: '/components/datascource/'},
          {text: '请求响应加密', link: '/components/secret/'}
        ]
      },
      {text: '前端框架', link: '/front/'},
      {text: '代码生成器', link: '/builder/'},
      {text: '版本说明', link: '/versions/'},
      {text: '参考', link: '/refer/'}
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
