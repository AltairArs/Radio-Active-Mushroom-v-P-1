<script setup lang="ts">
defineProps({
  centered: {
    type: Boolean,
    default: false,
    required: false
  }
})
</script>

<template>
  <div :class="centered ? 'container container-centered' : 'container'">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
$backColor: var(--c-bright-medium);
$textColor: var(--c-dark);

.container{
  padding: var(--padding);
  border-style: solid;
  border-color: $textColor;
  border-width: var(--borderWidth);
  border-radius: var(--borderRadius);
  background-color: $backColor;
  width: fit-content;
  min-width: 40%;

  &.container-centered{
    margin: auto;
  }
}
</style>