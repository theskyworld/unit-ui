<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";
/*********************************导包分界线***************************************/
/* types */
export type Animate =
  | "beat"
  | "beat-fade"
  | "bounce"
  | "fade"
  | "flip"
  | "shake"
  | "spin"
  | "spin-reverse"
  | "spin-pulse";
export interface IconProps {
  size?: number | string;
  icon: string;
  color?: string;
  hColor?: string;
  fixWidth?: boolean;
  rotation?: number;
  animate?: Animate;
  border?: boolean;
  bColor?: string;
}
/* macros */
/* props */
const {
  icon,
  size,
  color,
  hColor,
  fixWidth,
  rotation,
  animate,
  border,
  bColor,
} = withDefaults(defineProps<IconProps>(), {
  size: "16px",
  color: "#000",
  hColor: "red",
  fixWidth: false,
  rotation: 0,
  border: false,
  bColor: "#ccc",
});
/* emits */
/* datas */
/* computed */
const iconVal = computed(() => `fa-solid fa-${icon}`);
const sizeVal = computed(() => (typeof size === "number" ? `${size}px` : size));
const rotationVal = computed(() => `rotate(${rotation}deg)`);

/* methods */
defineExpose({
  iconVal,
  sizeVal,
  color,
  hColor,
  fixWidth,
  rotationVal,
  animate,
  border,
  bColor,
});
</script>
<template>
  <div class="icon">
    <font-awesome-icon
      :icon="iconVal"
      class="icon_com"
      :fixWidth="fixWidth"
      v-bind:[animate]="true"
      :border="border"
    />
  </div>
</template>
<style scoped lang="scss">
.icon {
  .icon_com {
    font-size: v-bind(sizeVal);
    color: v-bind(color);
    transform: v-bind(rotationVal);
    border-color: v-bind(bColor);
    &:hover {
      color: v-bind(hColor);
    }
  }
}
</style>
