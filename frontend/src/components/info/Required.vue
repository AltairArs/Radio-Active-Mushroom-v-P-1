<script setup lang="ts">

</script>

<template>
  <div class="required-main">
    REQUIRED
  </div>
</template>

<style scoped lang="scss">
$backColor: var(--c-light);
$textColor: var(--c-dark);
$markedColor: var(--c-medium);

.required-main{
  border-width: var(--borderWidth);
  border-color: $textColor;
  border-style: solid;
  width: fit-content;
  display: flex;
  background: linear-gradient(45deg, $markedColor 15%, $backColor 15%, $backColor 85%, $markedColor 85%);
  color: $textColor;
  border-radius: var(--borderRadius);
  padding: 0 var(--padding);
}
</style>