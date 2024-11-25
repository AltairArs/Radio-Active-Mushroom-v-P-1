<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
  label: {
    type: String,
    default: null
  },
  init: {
    type: Boolean,
    default: false
  }
});

defineEmits<{
  input: [selected: boolean]
}>();

const selected = ref(props.init);
</script>

<template>
<div class="checkbox-main">
  <div :class="selected ? 'checkbox selected' : 'checkbox'" @click="selected = !selected; $emit('input', selected)"></div>
  <div class="checkbox-label" v-if="label">
    {{ label }}
  </div>
</div>
</template>

<style scoped lang="scss">
$backColor: var(--c-light);
$textColor: var(--c-dark);
$inputBorderColor: var(--c-medium);

.checkbox{
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border-style: solid;
  border-width: calc(var(--borderWidth) * 3);
  border-color: $inputBorderColor;
  rotate: 45deg;
  background-color: $backColor;
  aspect-ratio: 1 / 1;
  height: 100%;
  &.selected{
    background-color: $textColor;
  }
}

.checkbox-label{
  margin-left: var(--margin);
}

.checkbox-main{
  background-color: $backColor;
  color: $textColor;
  width: fit-content;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border-style: solid;
  border-width: var(--borderWidth);
  border-color: $textColor;
  display: flex;
}
</style>