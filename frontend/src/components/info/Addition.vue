<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <text class="addition">
    {{ text }}
  </text>
</template>

<style scoped>
text.addition{
  color: var(--c-mark);
  font-size: small;
}
</style>