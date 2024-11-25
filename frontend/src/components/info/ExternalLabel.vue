<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: false,
    default: "LABEL"
  }
});
</script>

<template>
  <div class="external-label">
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
$backColor1: var(--c-bright);
$backColor2: var(--c-light);
$backColor3: var(--c-bright-medium);
$textColor: var(--c-dark);
$startAngle: 210deg;

.external-label{
  text-align: left;
  color: $textColor;
  background: conic-gradient(from $startAngle at 50% 50%, $backColor1 0deg 120deg, $backColor2 120deg 240deg, $backColor3 240deg 360deg);
  padding: 0 var(--padding) 0 var(--padding);
  border-radius: var(--borderRadius) var(--borderRadius) 0 0;
  border-color: $textColor;
  border-width: var(--borderWidth);
  border-bottom-width: 0;
  border-style: solid;
  width: fit-content;
  margin-top: calc(var(--margin) * 2);
}
</style>