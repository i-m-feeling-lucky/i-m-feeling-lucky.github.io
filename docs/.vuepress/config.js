module.exports = {
  title: 'LUCKY Document',
  description: 'LUCKY 在线面试平台文档',
  theme: '@vuepress/theme-default',

  base: '/',// 部署站点的基础路径。默认值为'/'。
  // 如果你想让你的网站部署到一个子路径下，你将需要设置它。
  // 如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/ ，
  // 那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
  // base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中，所以你只需要指定一次。

  // 自定义的 favicon
  head: [
    ['link', { rel: 'icon', href: '/logo-lucky.jpg' }]
  ],

  // 请参考文档来查看所有可用的选项。
  themeConfig: {
    logo: '/logo-lucky.jpg',// 在 docs/.vuepress/public 中

    //导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: '用户手册', link: '/guide/' },
      { text: '开发文档', link: '/develop/' },
      { text: 'API', link: 'https://i-m-feeling-lucky.github.io/api.html' },
      { text: '在线面试平台', link: 'https://interview.yusanshi.com' },
    ],
    repo: 'i-m-feeling-lucky',// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repoLabel: 'Github',// 自定义仓库链接文字

    // 侧边栏
    sidebar: {
      '/guide/': [
        '',          //  /guide/
        'uni',
        'admin',     //  /guide/admin.html
        'HR',
        'interviewer',
        'interviewee',
        'interview',
      ],
      '/develop/': [
        '',          // /develop/
        'guidelines',
        'frontend',  // /develop/frontend.html
        'backend',
      ],
    },
    sidebarDepth: 2,// 侧边栏深度（最大的深度为 2，能提取到 h2 和 h3 标题）

    editLinks: true,
    editLinkText: '此页面的内容有误？',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'i-m-feeling-lucky/i-m-feeling-lucky.github.io',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'source',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',

    lastUpdated: '最后更新于',
  },

  markdown: {
    lineNumbers: true,// 让代码块显示行号
  },
}
