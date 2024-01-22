<script setup lang="ts">
import { createNotification } from "@/components/Notification";
/*********************************导包分界线***************************************/
/* types */
/* macros */
/* props */
/* emits */
/* datas */
/* computed */
/* methods */
</script>
<template>
  <button
    @click="
      createNotification({
        type: 'error',
        message: 'error message',
        position: 'top-right',
      })
    "
    style="margin: 300px"
  >
    notification
  </button>
</template>
<style lang="scss">
body {
  background-color: #000;
}
</style>
