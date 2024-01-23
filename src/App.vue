<script setup lang="ts">
import Button from "@/components/Button";

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
  <div class="container">
    <Button content="click" />
    <Button content="click" type="info" />
    <Button content="click" type="warn" />
    <Button content="click" type="error" />
    <Button content="click" type="success" />
    <Button content="click" type="success" round />
    <Button content="click" type="success" :w="30" :h="30" circle />
    <Button content="click" bgColor="green" />
    <Button content="click" size="small" bgColor="green" />
    <Button content="click" size="medium" bgColor="green" />
    <Button content="click" size="large" bgColor="green" />
    <Button :w="100" :h="50" content="click" bgColor="green" />
    <Button content="click" size="medium" bgColor="green" color="red" />
  </div>
</template>
<style lang="scss">
body {
  background-color: #000;
}
.container {
  div {
    margin : {
      top: 10px;
    }
  }
}
</style>
