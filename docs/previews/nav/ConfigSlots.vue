<script setup lang="ts">
import Nav from "@/components/Nav";
</script>

<template>
  <Nav :h="40" :border-radius="10" auto-hide>
    <template #left>Left</template>
    <template #center>Center</template>
    <template #right>Right</template>
  </Nav>
</template>

<style scoped lang="scss"></style>
