<script setup lang="ts">
import createNotification from "@/components/Notification";
</script>

<template>
  <button @click="createNotification({ type: 'info', animate: true })">
    info
  </button>
  <button @click="createNotification({ type: 'warn', animate: true })">
    warn
  </button>
  <button @click="createNotification({ type: 'error', animate: true })">
    error
  </button>
  <button @click="createNotification({ type: 'success', animate: true })">
    success
  </button>
</template>

<style scoped lang="scss"></style>
