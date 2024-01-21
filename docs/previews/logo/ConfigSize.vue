<script setup lang="ts">
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
</script>
<template>
  <Nav>
    <template #left>
      <Logo img="https://t.mwm.moe/pc/" :h="50" />
    </template>
  </Nav>
</template>
<style scoped lang="scss"></style>
