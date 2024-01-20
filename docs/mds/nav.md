---
title: 导航Nav
description: Nav组件
prev:
  text: "首页"
  link: "../index.md"

next:
  text: "图标"
  link: "./logo.md"
---

# 导航

网站的顶部导航栏

## 基本样式

<preview path="../previews/nav/Basic.vue"></preview>

## 背景颜色

通过`bgColor`属性指定 Nav 的背景颜色，支持任意颜色字符串，默认为`#ccc`

<preview path="../previews/nav/ConfigColor.vue"></preview>

## 大小

通过`w`和`h`属性指定 Nav 的宽度和高度，支持表示大小的数值和字符串值，或者百分比字符串，默认为 `100%`和`50px`

<preview path="../previews/nav/ConfigSize.vue"></preview>

## 圆角

通过`borderRadius`指定 Nav 的圆角，支持表示大小的数值或字符串值，或者百分比字符串。默认为`0`
<preview path="../previews/nav/ConfigBorderRadius.vue"></preview>

## 透明度

通过`opacity`指定 Nav 的透明度，支持数值（0-1），默认为 `1`

<preview path="../previews/nav/ConfigOpacity.vue"></preview>

## 自动隐藏

通过`autoHide`属性指定 Nav 在滑动过程中自动隐藏

<preview path="../previews/nav/ConfigAutoHide.vue"></preview>

## 使用插槽

通过插槽向 Nav 中传递内容

可以使用具有左中右布局的命名插槽

或者不具有任何布局的默认插槽

<preview path="../previews/nav/ConfigSlots.vue"></preview>
