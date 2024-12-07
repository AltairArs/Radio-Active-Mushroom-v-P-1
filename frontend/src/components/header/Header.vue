<script setup lang="ts">

import HeaderContent from "./HeaderContent.vue";
</script>

<template>
  <div class="header-content-fixed">
    <HeaderContent/>
  </div>
  <div class="header-content">
    <HeaderContent/>
  </div>
</template>

<style scoped>
div.header-content-fixed{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}
div.header-content{
  opacity: 0;
}
</style>