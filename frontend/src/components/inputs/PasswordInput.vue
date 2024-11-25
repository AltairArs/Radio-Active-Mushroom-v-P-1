<script setup lang="ts">
import Icon from "../info/Icon.vue";
import {ref} from "vue";

const props = defineProps({
  init: {
    type: String,
    default: null
  },
  marked: {
    type: Boolean,
    default: false
  },
  labeled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: null
  }
});

const type = ref("password");
const data = ref(props.init);

function changeType(): void{
  if (type.value == "password"){
    type.value = "text";
  } else {
    type.value = "password";
  }
}

function setValue(event: Event): string{
  let value = "";
  if (event.target != null){
    const target = <HTMLInputElement>event.target;
    value = target.value;
  }
  data.value = value;
  return value;
}

defineEmits<{
  input: [value: string]
}>()
</script>

<template>
  <div :class="marked ? labeled ? 'password-input-main marked labeled' : 'password-input-main marked' : labeled ? 'password-input-main labeled' : 'password-input-main'">
    <input :type="type" :value="data" :placeholder="placeholder" @input="(event) => $emit('input', setValue(event))">
    <Icon :name="type == 'password' ? 'eye' : 'hide'" @click="changeType"/>
  </div>
</template>

<style scoped lang="scss">
$backColor: var(--c-light);
$textColor: var(--c-dark);
$inputBackColor: var(--c-dark);
$inputTextColor: var(--c-light);
$markedColor: var(--c-medium);
$placeholderColor: var(--c-light-medium);

.password-input-main{
  border-width: var(--borderWidth);
  border-color: $textColor;
  border-style: solid;
  width: 100%;
  display: flex;
  background-color: $backColor;
  color: $textColor;
  border-radius: var(--borderRadius);
  padding: var(--padding) 0;
  margin-bottom: var(--margin);
  &.marked{
    background: linear-gradient(45deg, $markedColor 10%, $backColor 10%, $backColor 90%, $markedColor 90%);
  }

  &.labeled{
    border-radius: 0 var(--borderRadius) var(--borderRadius) var(--borderRadius);
  }

  & input{
    padding-left: var(--padding);
    width: 100%;
    margin-left: var(--margin);
    margin-right: var(--margin);
    background-color: $inputBackColor;
    border-radius: var(--borderRadius);
    color: $inputTextColor;
    border-color: transparent;

    &::-ms-reveal{
      display: none;
    }

    &::placeholder{
      color: $placeholderColor;
    }
    &::selection{
      background-color: $inputTextColor;
      color: $inputBackColor;
    }
    &:focus{
      outline: none;
    }
  }
}

</style>