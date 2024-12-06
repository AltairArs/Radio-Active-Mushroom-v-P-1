<script setup lang="ts">
defineProps({
  /**
   * Maybe:
   * top,
   * top-right,
   * right,
   * bottom-right,
   * bottom,
   * bottom-left,
   * left,
   * top-left,
   * center
   *
   * @default top-left
   */
  align: {
    type: String,
    required: false,
    default: "top-left"
  },
  /**
   * Maybe:
   * PRIMARY
   * SECONDARY
   * TERTIARY
   * NONE
   * NAVBAR
   * ERROR
   * TOOLTIP
   * MENU
   *
   * @default null
   */
  cType: {
    type: String,
    required: false,
    default: null
  },
  horizontal: {
    type: Boolean,
    required: false,
    default: false
  },
  padding: {
    type: Boolean,
    required: false,
    default: false
  },
  border: {
    type: Boolean,
    required: false,
    default: false
  },
  borderRadius: {
    type: Boolean,
    required: false,
    default: false
  },
  /**
   * Maybe:
   * margin,
   * margin-top,
   * margin-left,
   * margin-bottom,
   * margin-right
   *
   * can be more than one with a space
   *
   * @example margin-left margin-top
   *
   * @default <Empty>
   */
  margin: {
    type: String,
    required: false,
    default: ''
  }
});
</script>

<template>
  <div v-if="cType" :containerType="cType" :class="'container ' + align + (horizontal ? ' horizontal': '') + (padding ? ' padding': '') + (border ? ' border': '') + (borderRadius ? ' border-radius': '') + ' ' + margin">
    <slot></slot>
  </div>
  <div v-if="!cType" :class="'container ' + align + (horizontal ? ' horizontal': '') + (padding ? ' padding': '') + (border ? ' border': '') + (borderRadius ? ' border-radius': '') + ' ' + margin">
    <slot></slot>
  </div>
</template>

<style scoped>
div.container{
  color: var(--c-text);
  background-color: var(--c-back-1);
  &.center{
    margin: auto;
  }
  &.top{
    margin: 0 auto auto auto;
  }
  &.top-right{
    margin: 0 0 auto auto;
  }
  &.right{
    margin: auto 0 auto auto;
  }
  &.bottom-right{
    margin: auto 0 0 auto;
  }
  &.bottom{
    margin: auto auto 0 auto;
  }
  &.bottom-left{
    margin: auto auto 0 0;
  }
  &.top-left{
    margin: 0 auto auto 0;
  }
  &.left{
    margin: auto auto auto 0;
  }
  &.border{
    border-color: var(--c-border);
    border-style: solid;
    border-width: var(--border-width);
  }
  &.padding{
    padding: var(--padding);
  }
  &.border-radius{
    border-radius: var(--border-radius);
  }
  &.horizontal{
    display: flex;
  }
  &.margin{
    margin: var(--margin);
  }
  &.margin-top{
    margin-top: var(--margin);
  }
  &.margin-bottom{
    margin-bottom: var(--margin);
  }
  &.margin-left{
    margin-left: var(--margin);
  }
  &.margin-right{
    margin-right: var(--margin);
  }
}
</style>