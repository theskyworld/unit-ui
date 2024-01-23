<script setup lang="ts">
import Button from "@/components/Button";
</script>

<template>
  <div class="button-container">
    <Button content="user" round icon="user" />
    <Button content="user" round icon-before="user" />
    <Button content="user" round icon="user" color="red" />
    <Button content="user" round icon="user" iconSize=".9em" />
    <Button content="user" round icon="user" animate="beat" />
    <Button content="user" appearance="icon" icon="user" />
    <Button content="user" round icon="user" animate="beat" hColor="red" />
  </div>
</template>

<style scoped lang="scss"></style>
