<script setup lang="ts">
import Icon from "@/components/Icon";
import { ref } from "vue";

const iconNames = ref<string[]>([
  "address-book",
  "adjust",
  "air-freshener",
  "ambulance",
  "anchor",
  "archive",
  "atom",
  "baby",
  "backspace",
  "balance-scale",
  "barcode",
  "bath",
  "battery-full",
  "bed",
  "bell",
  "bicycle",
  "binoculars",
  "bomb",
  "book",
  "bookmark",
  "box",
  "briefcase",
  "bug",
  "building",
  "bus",
  "calculator",
  "calendar",
  "camera",
  "car",
  "caret-up",
  "certificate",
  "chart-bar",
  "check",
  "chess-knight",
  "circle",
  "clipboard",
  "cloud",
  "code",
  "coffee",
  "cog",
  "compass",
  "crown",
  "cut",
  "database",
  "desktop",
  "dice",
  "dog",
  "dollar-sign",
  "donate",
  "door-open",
  "dragon",
  "drum",
  "envelope",
  "eye",
  "fan",
  "file",
  "fire",
  "flag",
  "flask",
  "football-ball",
  "gamepad",
  "gift",
  "globe",
  "graduation-cap",
  "hammer",
  "handshake",
  "heart",
  "home",
  "hourglass",
  "id-card",
  "inbox",
  "key",
  "laptop",
  "lightbulb",
  "map",
  "microphone",
  "moon",
  "music",
  "paint-brush",
  "paper-plane",
  "paw",
  "phone",
  "plane",
  "puzzle-piece",
  "rocket",
  "search",
  "shield",
  "snowflake",
  "star",
  "sun",
  "thumbtack",
  "umbrella",
  "user",
  "wallet",
  "wheelchair",
  "wifi",
  "yin-yang",
]);

function copyIconName(iconName: string) {
  /* 复制内容到文本域 */
  navigator.clipboard.writeText(iconName);

  /* 弹出已复制的内容 */
  alert("复制的文本为: " + iconName);
}
</script>
<template>
  <div class="icon">
    <div
      @click="copyIconName(iconName)"
      v-for="iconName in iconNames"
      :key="iconName"
      class="icon_item"
    >
      <Icon class="icon_item_com" :icon="iconName" color="#fff" :size="20" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon {
  display: grid;
  height: max-content;
  grid-template-columns: repeat(10, 1fr);
  .icon_item {
    border: solid 1px gray;
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: rgb(224, 223, 223, 0.2);
    }
    .icon_item_com {
      transform: translate(25%, 50%);
    }
  }
}
</style>
