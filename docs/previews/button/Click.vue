<script setup lang="ts">
import Button from "@/components/Button";
import createNotification from "@/components/Notification";
</script>

<template>
  <Button content="click" @click="createNotification({ message: 'click' })" />
</template>

<style scoped lang="scss"></style>
