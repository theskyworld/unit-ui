<script setup lang="ts">
import Logo from "@/components/Logo";
function logHello() {
  alert("hello");
}
</script>
<template>
  <Logo img="https://t.mwm.moe/pc/" :h="50" @click="logHello" />
</template>
<style scoped lang="scss"></style>
