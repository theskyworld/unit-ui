---
title: 图标Icon
description: Icon组件
prev:
  text: "导航"
  link: "./nav.md"

next:
  text: "Logo"
  link: "./logo.md"
---

# 图标

来自 fontawesome 中的图标

## 基本样式

<preview path="../previews/icon/Basic.vue"></preview>

## 大小

通过`size`属性指定 Icon 的大小，接受表示大小的数值或字符串值，默认值为`16px`

<preview path="../previews/icon/ConfigSize.vue"></preview>

## 颜色

通过`color`属性指定 Icon 的颜色，接受表示颜色的字符串值，默认值为`#000`

<preview path="../previews/icon/ConfigColor.vue"></preview>

还支持通过`hColor`指定鼠标悬停时的颜色

<preview path="../previews/icon/ConfigHColor.vue"></preview>

## 旋转

通过`rotation`属性指定 Icon 的旋转角度，接受表示旋转角度的数值，默认值为`0`

<preview path="../previews/icon/ConfigRotation.vue"></preview>

## 动画

通过`animate`属性指定 Icon 的动画，接受以下值之一：

- `"beat"`
- `"beat-fade"`
- `"bounce"`
- `"fade"`
- `"flip"`
- `"shake"`
- `"spin"`
- `"spin-pulse"`

<preview path="../previews/icon/ConfigAnimate.vue"></preview>

## 边框

通过`border`属性为 Icon 添加边框

同时可以通过`bColor`属性修改边框颜色

<preview path="../previews/icon/ConfigBorder.vue"></preview>

## 图标库

<icon-library></icon-library>
