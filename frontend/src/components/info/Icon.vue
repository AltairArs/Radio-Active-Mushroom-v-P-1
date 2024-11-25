<script setup lang="ts">
  import {iconMap} from "../../icons.ts";

  defineProps({
    name: {
      type: String,
      marked: true,
      default: null,
      required: true
    }
  })
</script>

<template>
  <div class="icon-main" v-if="name">
    <img class="icon" :src="iconMap.get(name)" height="32" width="32" :alt="name">
  </div>
</template>

<style scoped>
.icon-main{
  width: fit-content;
  text-align: center;
  padding: 0 var(--padding) 0 0;
  height: 32px;

  & img.icon{
    mix-blend-mode: difference;
    filter: invert(30%);
  }
}
</style>