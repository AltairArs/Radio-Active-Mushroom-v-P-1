<script setup lang="ts">
import HeaderContent from "./HeaderContent.vue";
</script>

<template>
<div class="header">
  <HeaderContent/>
</div>
<div>
  <HeaderContent/>
</div>
</template>

<style scoped lang="scss">
$backColor: var(--c-medium);

div.header{
  background-color: $backColor;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 var(--borderRadius) var(--borderRadius);
  z-index: 1;
}
</style>