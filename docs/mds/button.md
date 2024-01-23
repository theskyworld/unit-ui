---
title: 按钮
description: Button组件
prev:
  text: "Notification"
  link: "./notification.md"
next:
  text: "Button"
  link: "./button.md"
---

# 按钮

## 基本样式

<preview path="../previews/button/Basic.vue"></preview>

## 触发点击事件

<preview path="../previews/button/Click.vue"></preview>

## 不同类型

<preview path="../previews/button/ConfigType.vue"></preview>

## 不同形状

<preview path="../previews/button/Shape.vue"></preview>

## 不同大小

可以通过`size`来指定`small`、`medium`(默认值)或者`large`值

也可以通过`w`和`h`来指定按钮的具体大小

<preview path="../previews/button/ConfigSize.vue"></preview>

## 颜色

可以分别通过`bgColor`和`color`指定背景颜色和字体颜色

<preview path="../previews/button/Color.vue"></preview>

## 图标

通过`icon`(添加在后面)或者`iconBefore`(添加在前面)来添加图标

也可以通过`color`和`iconSize`分别指定图标的颜色和大小

还可以指定`appearance`属性值为`icon`来使用图标作为按钮
<preview path="../previews/button/Icon.vue"></preview>

## 纯文本

渲染成纯文本的按钮

还可以渲染成一个超链接

<preview path="../previews/button/Text.vue"></preview>
