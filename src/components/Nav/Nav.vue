<script setup lang="ts">
import { computed, Ref, onMounted, ref } from "vue";
/*********************************导包分界线***************************************/
/* types */
export interface NavProps {
  bgColor?: string; // 指定Nav的背景颜色，支持任意颜色字符串，默认为#ccc
  w?: number | string; // 指定Nav的宽度，支持数值或者百分比字符串，默认为100%
  h?: number | string; // 指定Nav的高度，支持数值或者百分比字符串，默认为100%
  opacity?: number; // 指定Nav的透明度，支持数值（0-1），默认为1
  autoHide?: boolean; // 指定Nav在滑动过程中是否自动隐藏，默认为false
  borderRadius?: number | string; // 指定Nav的圆角，支持数值或者百分比字符串：默认为0
}
/* macros */
/* props */
const { bgColor, w, h, opacity, autoHide, borderRadius } = withDefaults(
  defineProps<NavProps>(),
  {
    bgColor: "var(--nav-bg-color)",
    w: "100%",
    h: "100%",
    opacity: 1,
    autoHide: false,
    borderRadius: 0,
  }
);
/* emits */
/* datas */
const navElemRef = ref<HTMLElement>();
/* computed */
const wVal: Ref<string> = computed(() => {
  if (typeof w === "number") {
    return `${w}px`;
  } else {
    return w;
  }
});
const hVal: Ref<string> = computed(() => {
  if (typeof h === "number") {
    return `${h}px`;
  } else {
    return h;
  }
});
const borderRadiusVal = computed(() => {
  if (typeof borderRadius === "number") {
    return `${borderRadius}px`;
  } else {
    return borderRadius;
  }
});

/* methods */
onMounted(() => {
  if (navElemRef.value && autoHide) {
    const navParentNode = navElemRef.value.parentNode;
    if (navParentNode) {
      navParentNode.onscroll = () => {
        navElemRef.value.style.opacity = 0;
      };
      // 停止滑动时，恢复以前的opacity值
      navParentNode.onscrollend = () => {
        navElemRef.value.style.opacity = 1;
      };
    }
  }
});
</script>
<template>
  <div :style="{ backgroundColor: bgColor }" class="nav" ref="navElemRef">
    <!-- 可以只传入default插槽的内容，不进行左中右布局 -->
    <slot name="default" />
    <!-- 也可以分别传入左中右插槽的内容，对应地进行左中右布局 -->
    <div class="nav_left slot">
      <slot name="left" />
    </div>
    <div class="nav_center slot">
      <slot name="center" />
    </div>
    <div class="nav-right slot">
      <slot name="right" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.nav {
  width: v-bind(wVal);
  height: v-bind(hVal);
  opacity: v-bind(opacity);
  position: fixed;
  border-radius: v-bind(borderRadiusVal);
  transition: opacity 0.3s ease-in-out;
  // 垂直居中
  display: flex;
  align-items: center;
  display: grid;
  // 子元素左中右布局
  grid-template-columns: [left-start] 1fr [center-start] 8fr [right-start] 1fr [cols-end];

  .slot:not(:last-child) {
    margin : {
      right: 10px;
    }
  }
  .nav_left {
    grid-column-start: left-start;
    grid-column-end: center-start;
  }
  .nav_center {
    grid-column-start: center-start;
    grid-column-end: right-start;
  }
  .nav_right {
    grid-column-start: right-start;
    grid-column-end: cols-end;
  }
}
</style>
