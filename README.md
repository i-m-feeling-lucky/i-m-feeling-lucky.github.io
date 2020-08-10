# LUCKY 在线面试平台文档

文档链接：[https://i-m-feeling-lucky.github.io/](https://i-m-feeling-lucky.github.io/)

![示例图片](./example.png)

## 仓库结构

`source` 分支是本仓库的默认分支，存放的是源代码。`master` 分支是由源码自动构建出的网站，用于 Github Pages。

每次 push 到 `source` 分支，都会触发一次自动构建。在 `master` 分支中只会保留最新构建出的网站所对应的一次 commit。

## 参与编写

### 克隆仓库

```shell
git clone https://github.com/i-m-feeling-lucky/i-m-feeling-lucky.github.io.git
```

### 安装依赖

进入项目所在目录后，使用 [yarn](https://github.com/yarnpkg/yarn) 来安装依赖，

```shell
yarn install
```

### 构建

```shell
yarn docs:dev
```

一般来说，在本地只需要 `yarn docs:dev` 即可。

如果在本地进行 `yarn docs:build`，构建好的网站会放在 `./docs/.vuepress/dist` 中。但是直接打开 `./docs/.vuepress/dist/index.html`的话，一般都会发现网页显示不正常（无样式、无图片）。这是因为在构建好的网页里使用的都是绝对路径。例如一张图片，如果在 Markdown 文件里写相对路径：

```html
<img src="./clover.jpg">
```

那么在构建好的网页中会变成绝对路径：

```html
<img src="/assets/img/clover.5ca19010.jpg">
```

### 获取更新

只需获取 `source` 分支的更新就可以了：

```shell
# 从远程主机的 source 分支拉取最新内容
git fetch origin source

# 将拉取下来的最新内容合并到当前所在的分支中
git merge FETCH_HEAD
```

## 一些重要设置

在 `docs/.vuepress/public/api.yaml` 中，有 API 的定义。最终生成的API文档在[这里](https://i-m-feeling-lucky.github.io/api.html)。

在 `docs/.vuepress/config.js` 中，有导航栏和侧边栏的定义：

```js
//导航栏
nav: [
  { text: 'Home', link: '/' },
  { text: '用户手册', link: '/guide/' },
  { text: '开发文档', link: '/develop/' },
  { text: '在线面试平台', link: 'https://interview.yusanshi.com' },
],
repo: 'i-m-feeling-lucky',// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
repoLabel: 'Github',// 自定义Github链接文字

// 侧边栏
sidebar: {
  '/guide/': [
    '',          //  /guide/
    'admin',     //  /guide/admin.html
  ],
  '/develop/': [
    '',          // /develop/
    'frontend',  // /develop/frontend.html
    'backend',
  ],
},
sidebarDepth: 2,// 侧边栏深度（最大的深度为 2，能提取到 h2 和 h3 标题）
```

如果需要修改导航栏或侧边栏的内容，就在这里修改。一般在添加了一篇新的文章（一个新的 Markdown 文件）之后，都要在侧边栏里添加它。
