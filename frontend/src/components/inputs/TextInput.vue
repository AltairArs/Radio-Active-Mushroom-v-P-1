<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: ""
  },
  suffix: {
    type: String,
    default: ""
  },
  init: {
    type: String,
    default: null
  },
  labeled: {
    type: Boolean,
    default: false
  },
  marked: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: null
  }
})

defineEmits<{
  input: [fullValue: string, value: string]
}>()
</script>

<template>
  <div :class="marked ? labeled ? 'text-input-main marked labeled' : 'text-input-main marked' : labeled ? 'text-input-main labeled' : 'text-input-main'">
    <div class="prefix el" v-if="prefix">{{ prefix }}</div>
    <input type="text" class="el" :value="init" :placeholder="placeholder" @input="
(event) => {
  if (event.target){
    let target = <HTMLInputElement>event.target;
    $emit('input',  prefix + target.value + suffix, target.value)
  }
}
">
    <div class="suffix el" v-if="suffix">{{ suffix }}</div>
  </div>
</template>

<style scoped lang="scss">
$backColor: var(--c-light);
$textColor: var(--c-dark);
$inputBackColor: var(--c-dark);
$inputTextColor: var(--c-light);
$markedColor: var(--c-medium);
$placeholderColor: var(--c-light-medium);

.text-input-main{
  border-width: var(--borderWidth);
  border-color: $textColor;
  border-style: solid;
  display: flex;
  background-color: $backColor;
  color: $textColor;
  width: 100%;
  border-radius: var(--borderRadius);
  padding: var(--padding) 0;
  margin-bottom: var(--margin);
  &.marked{
    background: linear-gradient(45deg, $markedColor 10%, $backColor 10%, $backColor 90%, $markedColor 90%);
  }

  &.labeled{
    border-radius: 0 var(--borderRadius) var(--borderRadius) var(--borderRadius);
  }

  & .el{
    padding: 0 var(--padding);
  }
  & input{
    width: 100%;
    margin-left: var(--margin);
    margin-right: var(--margin);
    background-color: $inputBackColor;
    border-radius: var(--borderRadius);
    color: $inputTextColor;
    border-color: transparent;
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