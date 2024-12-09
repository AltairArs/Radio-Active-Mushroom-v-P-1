<script setup lang="ts">

</script>

<template>
  <text class="unselectable-text">
    <slot></slot>
  </text>
</template>

<style scoped>
text.unselectable-text{
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
</style>