<script setup lang="ts">
import { computed } from "vue";
/*********************************导包分界线***************************************/
/* types */
export interface LogoProps {
  img: string;
  alt?: string;
  w?: number | string;
  h?: number | string;
}
export interface LogoEmits {
  (e: "click"): void;
  (e: "click"): unknown;
}
/* macros */
/* props */
const { img, alt, w, h } = withDefaults(defineProps<LogoProps>(), {
  alt: "Logo",
  w: 100,
  h: 50,
});
/* emits */
const emit = defineEmits<LogoEmits>();
/* datas */
/* computed */
const wVal = computed(() => (typeof w === "number" ? `${w}px` : w));
const hVal = computed(() => (typeof h === "number" ? `${h}px` : h));
/* methods */
</script>
<template>
  <div class="logo" @click="emit('click')">
    <h1>
      <img :src="img" :alt="alt" :title="alt" class="logo__img" />
    </h1>
  </div>
</template>
<style scoped lang="scss">
.logo {
  width: v-bind(wVal);
  height: v-bind(hVal);
  cursor: pointer;
  h1 {
    width: 100%;
    height: 100%;
    .logo__img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
