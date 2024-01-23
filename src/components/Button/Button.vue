<script setup lang="ts">
import { computed } from "vue";
import Icon from "@/components/Icon";
import type { Animate } from "@components/Icon";
/*********************************导包分界线***************************************/
/* types */
export type ButtonType = "default" | "info" | "warn" | "success" | "error";
export type ButtonSize = "small" | "medium" | "large";
export type targetType = "_blank" | "_self" | "_parent" | "_top";
export type appearanceType = "button" | "a" | "icon" | "text";
export interface ButtonProps {
  content?: string;
  type?: ButtonType;
  round?: boolean;
  circle?: boolean;
  bgColor?: string;
  size?: ButtonSize;
  w?: number | string;
  h?: number | string;
  color?: string;
  icon?: string;
  iconBefore?: string;
  iconSize?: number | string;
  appearance?: appearanceType;
  href?: string;
  target?: targetType;
  animate?: Animate;
}
export interface ButtonEmits {
  (e: "click", ...args: unknown): void;
  (e: "click", ...args: unknown): unknown;
}
/* macros */
/* props */
const {
  type,
  content,
  round,
  circle,
  bgColor,
  size,
  w,
  h,
  color,
  appearance,
  href,
  target,
  icon,
  iconBefore,
  animate,
} = withDefaults(defineProps<ButtonProps>(), {
  type: "default",
  round: false,
  circle: false,
  size: "medium",
  w: 70,
  h: 30,
  color: "#fff",
  target: "_self",
  appearance: "button",
});
/* emits */
const emit = defineEmits<ButtonEmits>();
/* datas */
/* computed */
const borderColorVal = computed(() => (bgColor ? bgColor : "gray"));
const borderHoverColorVal = computed(() => (bgColor ? bgColor : "green"));
const wVal = computed(() => (typeof w === "number" ? `${w}px` : w));
const hVal = computed(() => (typeof h === "number" ? `${h}px` : h));
</script>
<template>
  <div class="button-container" @click="emit('click')">
    <div
      v-if="appearance === 'button'"
      role="button"
      class="button-container__button"
      :class="[
        type,
        {
          round,
          circle,
          small: size === 'small',
          medium: size === 'medium',
          large: size === 'large',
        },
      ]"
    >
      <span v-if="iconBefore" class="button-container__button__icon">
        <Icon
          :icon="iconBefore"
          :color="color"
          :size="iconSize"
          :animate="animate"
        />
        <div v-if="content" class="afterIcon">{{ content }}</div>
      </span>
      <span v-else-if="icon" class="button-container__button__icon">
        <div v-if="content" class="beforeIcon">{{ content }}</div>
        <Icon :icon="icon" :color="color" :size="iconSize" :animate="animate" />
      </span>
      <p v-else>{{ content }}</p>
    </div>
    <span v-else-if="appearance === 'a'" class="button-container__text">
      <a v-if="appearance === 'a'" :href="href" :target="target">
        <slot />
      </a>
    </span>
    <span v-else-if="appearance === 'text'" class="button-container__text">
      <p><slot /></p>
    </span>
    <Icon
      v-else-if="appearance === 'icon'"
      :icon="icon"
      :color="color"
      :size="iconSize"
      :animate="animate"
      class="button-container__icon"
    />
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/styles/vars.scss";
// TODO 实现传入不同的bgColor值时，使用lighten函数对bgColor进行处理
.button-container {
  .button-container__button {
    color: v-bind(color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 3px;
    transition: background-color, border-color 0.3s;
    padding: 5px;
    &.small {
      width: 50px;
      height: 25px;
    }
    &.medium {
      width: v-bind(wVal);
      height: v-bind(hVal);
    }
    &.large {
      width: 90px;
      height: 40px;
    }
    &.round {
      // 椭圆形按钮
      border-radius: 20%/50%;
    }
    &.circle {
      // 圆形按钮
      border-radius: 50%;
    }
    &.default {
      background-color: v-bind(bgColor);
      border: solid 2px;
      border-color: v-bind(borderColorVal);
      &:hover {
        border-color: v-bind(borderHoverColorVal);
      }
    }
    &.info {
      background-color: $info-bg-color;
      &:hover {
        background-color: lighten($info-bg-color, 10%);
      }
    }
    &.success {
      background-color: $success-bg-color;
      &:hover {
        background-color: lighten($success-bg-color, 10%);
      }
    }
    &.warn {
      background-color: $warn-bg-color;
      &:hover {
        background-color: lighten($warn-bg-color, 10%);
      }
    }
    &.error {
      background-color: $error-bg-color;
      &:hover {
        background-color: lighten($error-bg-color, 10%);
      }
    }
    .button-container__button__icon {
      display: flex;
      align-items: center;
      justify-self: center;

      .afterIcon {
        margin-left: 5px;
      }
      .beforeIcon {
        margin-right: 5px;
      }
    }
  }
  .button-container__text {
    color: v-bind(color);
    cursor: pointer;
    &:hover {
      color: green;
    }
    a {
      text-decoration: none;
      color: v-bind(color);
      &:hover {
        color: green;
      }
    }
  }
  .button-container__icon {
    cursor: pointer;
    &:hover {
      color: green;
    }
  }
}
</style>
