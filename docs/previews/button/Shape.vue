<script setup lang="ts">
import Button from "@/components/Button";
</script>

<template>
  <div class="button-container">
    <Button content="方形" />
    <Button content="椭圆形" round />
    <Button content="圆形" circle :w="50" :h="50" />
  </div>
</template>

<style scoped lang="scss"></style>
