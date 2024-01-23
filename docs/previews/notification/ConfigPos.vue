<script setup lang="ts">
import createNotification from "@/components/Notification";
</script>

<template>
  <button @click="createNotification({ position: 'top-left' })">左上</button>
  <button @click="createNotification({ position: 'bottom-left' })">左下</button>
  <button @click="createNotification({ position: 'top-right' })">右上</button>
  <button @click="createNotification({ position: 'bottom-right' })">
    右下
  </button>
  <button @click="createNotification({ position: 'top-center' })">上中</button>
  <button @click="createNotification({ position: 'bottom-center' })">
    下中
  </button>
</template>

<style scoped lang="scss"></style>
