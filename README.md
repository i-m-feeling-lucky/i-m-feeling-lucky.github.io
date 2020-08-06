# i-m-feeling-lucky.github.io

LUCKY 在线面试平台文档

## 仓库结构

`source` 分支是本仓库的默认分支，存放的是源代码。`master` 分支是由源码自动构建出的网站，用于 Github Pages。

每次 push 到 `source` 分支，都会触发一次自动构建。

## 参与编写

### 安装依赖

Clone 本项目。进入项目所在目录后，使用 [yarn](https://github.com/yarnpkg/yarn) 来安装依赖，

```shell
yarn install
```

### 构建

#### 调试

```shell
yarn docs:dev
```

一般来说，在本地只需要 `yarn docs:dev` 即可。

#### 生产

```shell
yarn docs:build
```

如果在本地进行 `yarn docs:build`，构建好的网站会放在 `./docs/.vuepress/dist` 中。但是直接打开 `./docs/.vuepress/dist/index.html`的话，一般都会发现网页显示不正常（无样式、无图片）。这是因为在构建好的网页里使用的都是绝对路径。例如一张图片，如果在 Markdown 文件里写相对路径：

```html
<img src="./clover.jpg">
```

那么在构建好的网页中会变成绝对路径：

```html
<img src="/assets/img/clover.5ca19010.jpg" height="100px">
```
