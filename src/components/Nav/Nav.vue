<script setup lang="ts">
import { computed, Ref, onMounted, ref } from "vue";
/*********************************导包分界线***************************************/
/* types */
export interface NavProps {
  bgColor?: string;
  w?: number | string;
  h?: number | string; // 指定Nav的高度，支持数值或者百分比字符串，默认为50px
  opacity?: number; //
  autoHide?: boolean; // 指定Nav在滑动过程中是否自动隐藏，默认为false
  borderRadius?: number | string;
}
/* macros */
/* props */
const { bgColor, w, h, opacity, autoHide, borderRadius } = withDefaults(
  defineProps<NavProps>(),
  {
    bgColor: "var(--nav-bg-color)",
    w: "100%",
    h: "50px",
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
defineExpose({
  bgColor,
  wVal,
  hVal,
  opacity,
  autoHide,
  borderRadiusVal,
});
onMounted(() => {
  if (navElemRef.value && autoHide) {
    const navParentNode: ParentNode | null = navElemRef.value.parentNode;
    if (navParentNode) {
      (navParentNode as HTMLElement).onscroll = () => {
        navElemRef.value!.style.opacity = "0";
      };
      // 停止滑动时，恢复以前的opacity值
      // @ts-ignore
      (navParentNode as HTMLElement).onscrollend = () => {
        navElemRef.value!.style.opacity = "1";
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
    <div class="nav__left slot">
      <slot name="left" />
    </div>
    <div class="nav__center slot">
      <slot name="center" />
    </div>
    <div class="nav-right slot">
      <slot name="right" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.nav {
  z-index: 999;
  width: v-bind(wVal);
  height: v-bind(hVal);
  opacity: v-bind(opacity);
  // 相对于容器元素上边界0px的位置固定定位
  position: sticky;
  top: 0;
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
  .nav__left {
    grid-column-start: left-start;
    grid-column-end: center-start;
  }
  .nav__center {
    grid-column-start: center-start;
    grid-column-end: right-start;
    display: flex;
    justify-content: center;
  }
  .nav__right {
    grid-column-start: right-start;
    grid-column-end: cols-end;
  }
}
</style>
