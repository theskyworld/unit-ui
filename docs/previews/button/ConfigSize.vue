<script setup lang="ts">
import Button from "@/components/Button";
</script>

<template>
  <div class="button-container">
    <Button content="small" round size="small" />
    <Button content="medium" round size="medium" />
    <Button content="large" round size="large" />
    <Button content="click" round :w="50" :h="20" />
  </div>
</template>

<style scoped lang="scss"></style>
