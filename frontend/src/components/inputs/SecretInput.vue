<script setup lang="ts">
import Container from "../containers/Container.vue";
import Icon from "../info/Icon.vue";
import { ref } from 'vue'
import {
  IContainerSettingsCreate,
  ContainerSettings
} from "../../container-pattern/container-pattern.ts";
import BaseInput from "./BaseInput.vue";

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

const CREATE_CONTAINER_EYE: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.SELF_ALIGNMENT = "center";
    return c;
  }
}

const show = ref(false);
const input = ref(null);

function changeShow(){
  show.value = !show.value;
  if (input.value != null){
    const v = input.value.value;
    if (show.value){
      input.value.setAttribute("type", "text");
    } else {
      input.value.setAttribute("type", "password");
    }
    input.value.value = v;
  }
}

defineEmits<{
  input: [value: string]
}>();

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
      <Icon name="lock"/>
    </template>
    <template #textInput>
      <Container :settings="CREATE_CONTAINER_EYE.create()">
        <Icon name="eye" _style="regular" v-if="!show" @click="changeShow()"/>
        <Icon name="eye-slash" _style="regular" v-if="show" @click="changeShow()"/>
      </Container>
      <input ref="input" type="password" :value="initialValue" :placeholder="placeholder ? placeholder : label" @input="(event) => $emit('input', event.target.value)">
    </template>
  </BaseInput>
</template>

<style scoped>

</style>