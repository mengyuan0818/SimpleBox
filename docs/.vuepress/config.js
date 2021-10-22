module.exports = {
  title: 'SimpleBox',
  base: '/SimpleBox/',
  themeConfig: {
    smoothScroll: true,
    logo: '/logo.png',
    sidebar: [
      {
        title: '医生简介卡片',   // 必要的
        path: '/example/DoctorCard',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '医生详情卡片',   // 必要的
        path: '/example/DoctorDetailCard',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      }
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件', link: '/example/DoctorCard'},
      {
        text: 'collection',
        items: [
          { text: 'ElementUI', link: 'https://element.faas.ele.me/#/zh-CN' },
          { text: 'Vue', link: 'https://cn.vuejs.org/v2/guide/' }
        ]
      }
    ]
  },
  chainWebpack: config => {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features')
  }
}