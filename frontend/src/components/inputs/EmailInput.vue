<script setup lang="ts">
import { ref } from 'vue';
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

defineEmits<{
  input: [value: string]
}>();

const input = ref(null);

function getValue(){
  return input.value?.value;
}

defineExpose({
  getValue
})
</script>

<template>
  <BaseInput :label="label" :isNecessary="isNecessary">
    <template #labelIcon>
      <Icon name="at"/>
    </template>
    <template #textInput>
      <input type="text" ref="input" :value="initialValue" :placeholder="placeholder ? placeholder : label" @input="(event) => $emit('input', event.target.value)">
    </template>
  </BaseInput>
</template>

<style scoped>

</style>