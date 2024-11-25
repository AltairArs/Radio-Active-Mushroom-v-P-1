<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: false,
    default: ""
  }
});
</script>

<template>
  <div class="loading-main">
    <div class="loading-square-1 loading-square"></div>
    <div class="loading-square-2 loading-square"></div>
    <div class="loading-label" v-if="label">
      {{ label }}
    </div>
  </div>
</template>

<style scoped lang="scss">
$borderColor1: var(--c-light-medium);
$borderColor2: var(--c-dark-medium);
$textColor: var(--c-dark);
$backColor: var(--c-bright);

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading-main{
  display: flex;
  padding: var(--padding);
  background-color: $backColor;
  color: $textColor;
  border-radius: var(--borderRadius);
  border-width: var(--borderWidth);
  border-style: solid;
  border-color: $textColor;
  width: fit-content;

  & .loading-label{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: var(--margin);
  }

  & .loading-square{
    width: 40px;
    border-width: calc(var(--borderWidth) * 3);
    border-style: solid;
    aspect-ratio: 1 / 1;
    margin: var(--margin);
    animation: rotation 3s linear infinite;
  }

  & .loading-square-1{
    border-color: $borderColor1;
    rotate: 90deg;
    position: absolute;
  }

  & .loading-square-2{
    border-color: $borderColor2;
    animation-direction: reverse;
  }
}
</style>