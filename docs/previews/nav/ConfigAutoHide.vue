<script setup lang="ts">
import Nav from "@/components/Nav";
</script>

<template>
  <div class="container">
    <Nav :h="40" :border-radius="10" auto-hide />
    <div class="container__gap"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  overflow-y: auto;
  height: 200px;
  .container__gap {
    width: 100%;
    height: 500px;
  }
}
</style>
