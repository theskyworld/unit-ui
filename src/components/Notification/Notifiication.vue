<script setup lang="ts">
import Icon from "@/components/Icon";
import { computed, ref, onBeforeMount, nextTick } from "vue";
/*********************************导包分界线***************************************/
/* types */
export type NotificationType = "info" | "warn" | "success" | "error";
export type NotificationPos =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";
export interface NotificationProps {
  type?: NotificationType;
  message?: string;
  position?: NotificationPos;
  duration?: number;
  offset?: number;
  unRender?: () => void;
}
/* macros */
/* props */
const { type, message, position, duration, offset, unRender } = withDefaults(
  defineProps<NotificationProps>(),
  {
    type: "info",
    message: "message",
    position: "top-center",
    duration: 5,
    offset: 0,
  }
);
/* emits */
/* datas */
const isShow = ref(false);
const notificationElemRef = ref();
const notificationHeight = ref(0);
/* computed */
const bgColorVal = computed(() => {
  switch (type) {
    case "info":
      return "var(--info-bg-color)";
    case "warn":
      return "var(--warn-bg-color)";
    case "success":
      return "var(--success-bg-color)";
    case "error":
      return "var(--error-bg-color)";
    default:
      return "var(--info-bg-color)";
  }
});
const iconVal = computed(() => {
  switch (type) {
    case "info":
      return "circle-info";
    case "warn":
      return "triangle-exclamation";
    case "success":
      return "circle-check";
    case "error":
      return "circle-xmark";
    default:
      return "circle-info";
  }
});
// Notification相对于body进行固定定位的位置
const leftVal = computed(() => {
  switch (position) {
    case "top-left":
      return "10px";
    case "bottom-left":
      return "10px";
    case "top-center":
      return "43%";
    case "bottom-center":
      return "43%";
    default:
      return null;
  }
});
const topVal = computed(() => {
  switch (position) {
    case "top-left":
      return `${offset}px`;
    case "top-right":
      return `${offset}px`;
    case "top-center":
      return `${offset}px`;
    default:
      return null;
  }
});
const rightVal = computed(() => {
  switch (position) {
    case "top-right":
      return "10px";
    case "bottom-right":
      return "10px";
    default:
      return null;
  }
});
const bottomVal = computed(() => {
  switch (position) {
    case "bottom-left":
      return `${offset}px`;
    case "bottom-right":
      return `${offset}px`;
    case "bottom-center":
      return `${offset}px`;
    default:
      return null;
  }
});
const durationVal = computed(() =>
  typeof duration === "number" ? `${duration}s` : duration
);
// 控制不同的transitionName来使用不同的<Transition>动画，对应不同位置处展示的Notification
const transitionName = computed(() => {
  switch (position) {
    case "top-left":
      return "left";
    case "bottom-left":
      return "left";
    case "top-right":
      return "right";
    case "bottom-right":
      return "right";
    case "top-center":
      return "top";
    case "bottom-center":
      return "bottom";
    default:
      return null;
  }
});
/* methods */
// 初始展示Notification
onBeforeMount(() => {
  isShow.value = true;
});
// 注意此处对元素高度的动态获取需要获取DOM更新之后的值，且使用nextTick，不能使用onMounted等钩子函数，否则获取到的值为0
nextTick(() => {
  notificationHeight.value = parseFloat(
    // 使用getBoundingClientRect而不是getComputedStyle，后者计算的值更小
    notificationElemRef.value.getBoundingClientRect().height
  );
});
// 关闭Notification
function close() {
  isShow.value = false;
  unRender();
}
// 手动关闭Notification
function closeByClick() {
  close();
}
// 倒计时结束自动关闭Notification
setTimeout(() => {
  close();
}, duration * 1000);
defineExpose({
  isShow,
  notificationHeight,
});
</script>
<template>
  <Transition :name="transitionName">
    <div class="notification" v-if="isShow" ref="notificationElemRef">
      <div class="notification__icon">
        <Icon :icon="iconVal" color="#fff" animate="beat" />
      </div>
      <div class="notification__message">
        <p>{{ message }}</p>
      </div>
      <div class="notification__close" @click="closeByClick">
        <Icon icon="xmark" color="#fff" />
      </div>
      <div class="notification__count-down-line"></div>
    </div>
  </Transition>
</template>
<style scoped lang="scss">
.notification {
  // 子元素垂直居中
  display: flex;
  align-items: center;
  // 宽高自适应
  width: max-content;
  min-width: 100px;
  max-width: 500px;
  height: max-content;
  // 相对于body进行不同位置上的固定定位
  position: fixed;
  left: v-bind(leftVal);
  top: v-bind(topVal);
  right: v-bind(rightVal);
  bottom: v-bind(bottomVal);
  background-color: v-bind(bgColorVal);
  color: #fff;
  border-radius: 5px;
  padding: 10px {
    left: 20px;
  }

  .notification__icon {
    margin : {
      right: 10px;
    }
  }
  .notification__message {
    font-size: 0.9em;
    margin : {
      right: 30px;
    }
  }
  .notification__close {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
  .notification__count-down-line {
    height: 5px;
    background-color: green;
    position: absolute;
    bottom: 0;
    left: 0;
    animation-name: count-down;
    animation-duration: v-bind(durationVal);
    animation-timing-function: linear;
  }
}

.left-enter-active,
.left-leave-active {
  transition: left 0.5s ease;
}
.left-enter-from,
.left-leave-to {
  left: -100px;
}

.right-enter-active,
.right-leave-active {
  transition: right 0.5s ease;
}
.right-enter-from,
.right-leave-to {
  right: -100px;
}

.top-enter-active,
.top-leave-active {
  transition: top 0.5s ease;
}
.top-enter-from,
.top-leave-to {
  top: -100px;
}

.bottom-enter-active,
.bottom-leave-active {
  transition: bottom 0.5s ease;
}
.bottom-enter-from,
.bottom-leave-to {
  bottom: -100px;
}
@keyframes count-down {
  from {
    width: calc(100% - 5px);
  }
  to {
    width: 0;
  }
}
</style>
