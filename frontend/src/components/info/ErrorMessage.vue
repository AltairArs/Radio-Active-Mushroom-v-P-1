<script setup lang="ts">
import Icon from "./Icon.vue";

defineProps({
  message: {
    type: String,
    default: "ERROR",
    required: true
  }
});
</script>

<template>
  <div class="error-message-main">
    <Icon name="error"/>
    <text class="error-message">
      {{ message }}
    </text>
  </div>
</template>

<style scoped lang="scss">
$backColor: var(--c-light);
$textColor: var(--c-dark);
$errorBackColor: var(--c-bright-medium);

.error-message-main{
  background-color: $backColor;
  color: $textColor;
  padding: var(--padding);
  border-style: solid;
  border-color: $textColor;
  border-width: var(--borderWidth);
  border-radius: var(--borderRadius);
  display: grid;

  & .error-message{
    background-color: $errorBackColor;
    padding: var(--padding);
    text-align: left;
    width: calc(100% - var(--padding) * 3);
    border-style: solid;
    border-width: var(--borderWidth);
    border-radius: var(--borderRadius);
  }
}
</style>