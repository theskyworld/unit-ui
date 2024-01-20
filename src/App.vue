<script setup lang="ts">
import Nav from "@/components/Nav";
</script>

<template>
  <div class="container" ref="testElemRef">
    <Nav w="100%" :h="50" bgColor="#ece" auto-hide :border-radius="5">
      <template #left> left </template>
      <template #center> center </template>
      <template #right> right </template>
    </Nav>
    <div class="test" style="height: 1500px"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 900px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
