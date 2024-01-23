<script setup lang="ts">
import createNotification from "@/components/Notification";
</script>

<template>
  <button @click="createNotification({ type: 'info' })">info</button>
  <button @click="createNotification({ type: 'warn' })">warn</button>
  <button @click="createNotification({ type: 'error' })">error</button>
  <button @click="createNotification({ type: 'success' })">success</button>
</template>

<style scoped lang="scss"></style>
