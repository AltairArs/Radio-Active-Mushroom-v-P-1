<script setup lang="ts">
import ErrorBlock from "./ErrorBlock.vue";

defineProps({
  errors: {
    type: Array,
    default: [],
    required: true
  }
})
</script>

<template>
  <ErrorBlock v-for="error in errors">
    <template #content>
      {{ error }}
    </template>
  </ErrorBlock>
</template>

<style scoped>

</style>