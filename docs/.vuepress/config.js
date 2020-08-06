module.exports = {
  title: '网站标题',
  description: '网站描述',
  theme: '@vuepress/theme-default',

  base: '/',// 部署站点的基础路径。默认值为'/'。
  // 如果你想让你的网站部署到一个子路径下，你将需要设置它。
  // 如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/ ，
  // 那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
  // base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中，所以你只需要指定一次。

  // 请参考文档来查看所有可用的选项。
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Bar', link: '/bar/' },
      { text: 'bilibili', link: 'https://space.bilibili.com/33902743' },
    ],
    sidebar: 'auto',

    lastUpdated: '本页面最后更新于',

    repo: 'ipython3/vuepress-init',// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL

    repoLabel: '查看源码',// 自定义仓库链接文字

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'ipython3/vuepress-init',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '此页面的内容有误？',

    // 侧边栏
    sidebar: {
      '/guide/': [
        '',     /* /guide/ */
        'guide1',  /* /guide/guide1.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'bar1', /* /bar/bar1.html */
      ],

    },
    sidebarDepth: 2,// 侧边栏深度（最大的深度为 2，能提取到 h2 和 h3 标题）
  },

  markdown: {
    lineNumbers: true,// 让代码块显示行号
  },
}
