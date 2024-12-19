<script setup lang="ts">
import { ref } from 'vue';
import FormInput from "./FormInput.vue";

let dependencies: Map<Ref<FormInput>, RegExp> = new Map<Ref<FormInput>, RegExp>();
let dependents: Array<Ref<FormInput>> = new Array<Ref<FormInput>>();

const emit = defineEmits<{
  input: [value: string]
}>();

const visible = ref(true);

function notifyFromDependency(): void{
  visible.value = true;
  for(let key of dependencies.keys()){
    if (!dependencies.get(key).test(key.value.getData())){
      visible.value = false;
      break;
    }
  }
}

let data: string = "";

function getData(): string{
  return data;
}

function notifyDependents(value): void{
  emit('input', value);
  data = value.toString();
  dependents.forEach((dependent: Ref<FormInput>) => dependent.value.notifyFromDependency());
}

function setDependencies(d: Map<Ref<FormInput>, RegExp>): void{
  dependencies = d;
}

function setDependents(d: Array<Ref<FormInput>>): void{
  dependents = d;
}

defineExpose({
  notifyFromDependency,
  data,
  setDependencies,
  setDependents,
  notifyDependents,
  getData
});
</script>

<template>
  <slot v-if="visible"></slot>
</template>

<style scoped>

</style>