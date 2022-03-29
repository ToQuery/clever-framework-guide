/**
 * vue-press config
 */
module.exports = {
  title: 'Clever Framework 手册',
  description: 'Sping Boot 快速开发框架',
  repo: 'ToQuery/clever-framework',
  editLinks: true,
  base: '/clever-framework/',
  dest: 'dist',
  docsDir: 'docs',
  editLinkText: '帮助我们改善此页面！',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
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
    sidebar: 'auto',
    lastUpdated: 'Last Updated'
  }
}