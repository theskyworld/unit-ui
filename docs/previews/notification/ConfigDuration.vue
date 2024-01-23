<script setup lang="ts">
import createNotification from "@/components/Notification";
</script>

<template>
  <button @click="createNotification({ duration: 10 })">10s</button>
</template>

<style scoped lang="scss"></style>
