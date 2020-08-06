---
home: true
heroImage: /hero.png
heroText: LUCKY 在线面试平台
tagline: 千里“职”缘一线牵
actionText: 用户手册 →
actionLink: /guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2020-present 派三叔iPython3
---
# Markdown 拓展示例

目录：

[[toc]]

## Hello

Hello there!!

## 提示信息

::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险警告
这是一个危险警告
:::

::: details 详情
这是一个详情块，在 IE / Edge 中不生效
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

## 代码块

[语言列表](https://prismjs.com/#languages-list)

高亮一行：

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## GitHub 风格的表格

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji

:tada: :100:

## Badge

### Badge1 <Badge text="提示标签"/><Badge text="警告标签" type="warning"/> <Badge text="错误标签" type="error" vertical="middle"/>

## 图片

<img src="./clover.jpg" height="100px">
