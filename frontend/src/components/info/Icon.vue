<script setup lang="ts">
defineProps({
  /**
   * Maybe:
   * classic,
   * duotone,
   * sharp,
   * sharp-duotone
   *
   * @default classic
   */
  pack: {
    type: String,
    default: "classic",
    required: false
  },
  /**
   * Maybe:
   * solid,
   * regular,
   * light,
   * thin
   *
   * @default solid
   */
  style: {
    type: String,
    default: "solid",
    required: false
  },
  /**
   * Name of icon
   *
   * @example user
   */
  name: {
    type: String,
    required: true
  },
  /**
   * Maybe:
   * xs,
   * sm,
   * lg,
   * 2x,
   * 3x,
   * 5x,
   * 7x,
   * 10x
   *
   * @default lg
   */
  size: {
    type: String,
    required: false,
    default: "lg"
  }
})
</script>

<template>
  <div class="icon">
    <i :class="'fa-' + pack + ' fa-' + style + ' fa-' + name + ' fa-' + size"></i>
  </div>
</template>

<style scoped>
div.icon i{
  color: var(--c-icon);
  display: inline-flex;
  margin: calc(var(--margin) / 2);
}
</style>