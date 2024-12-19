<script setup lang="ts">

import BaseInput from "./BaseInput.vue";
import Icon from "../info/Icon.vue";

defineProps({
  initialValue: {
    type: String,
    required: false,
    default: ""
  },
  label: {
    type: String,
    required: false,
    default: ""
  },
  isNecessary: {
    type: Boolean,
    required: false,
    default: false
  },
  placeholder: {
    type: String,
    required: false,
    default: ""
  }
});

</script>

<template>
  <BaseInput :label="label" :isNecessary="isNecessary">
    <template #labelIcon>
      <Icon name="t"/>
    </template>
    <template #textInput>
      <input type="text" :value="initialValue" :placeholder="placeholder ? placeholder : label">
    </template>
  </BaseInput>
</template>

<style scoped>

</style>