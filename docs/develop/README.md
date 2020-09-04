# 开发文档

<img src="../test.png" height="100px">

开发文档分为以下几个部分：

- [开发规范](./guidelines.md)
- [前端](./frontend.md)
- [后端](./backend.md)
- [API](./API.md)

## Markdown 拓展示例

目录：

[[toc]]

### Hello

Hello there!!

### 提示信息

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

### 代码块

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

### GitHub 风格的表格

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### Emoji

:tada: :100:

### Badge

#### Badge1 <Badge text="提示标签"/><Badge text="警告标签" type="warning"/> <Badge text="错误标签" type="error" vertical="middle"/>

### 图片

<img src="../test.png" height="100px">