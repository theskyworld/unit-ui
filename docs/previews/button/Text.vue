<script setup lang="ts">
import Button from "@/components/Button";
import createNotification from "@/components/Notification";
</script>

<template>
  <div class="button-container">
    <Button appearance="text" @click="createNotification({ message: 'click' })"
      >纯文本按钮</Button
    >
    <Button appearance="a" href="https://vitejs.dev/">Vite</Button>
    <Button appearance="a" href="https://vuejs.org/">Vue</Button>
  </div>
</template>

<style scoped lang="scss"></style>
