<script setup lang="ts">
  import Icon from "../info/Icon.vue";

  defineProps({
    text: {
      type: String,
      default: "DEFAULT",
      required: false
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    marked: {
      type: Boolean,
      default: false,
      required: false
    },
    reset: {
      type: Boolean,
      default: false,
      required: false
    }
  })
  defineEmits(['click'])
</script>

<template>
  <button :type="reset ? 'reset' : 'button'" :class="marked ? 'marked button': 'button'" @click="$emit('click')">
    <Icon v-if="icon" :name="icon"/>
    <text>{{ text }}</text>
  </button>
</template>

<style scoped lang="scss">
$textColor: var(--c-dark);
$backColor: var(--c-light);
$markedColor: var(--c-medium);
button.button{
  padding: var(--padding);
  margin: var(--margin);
  border-radius: var(--borderRadius);
  background-color: $backColor;
  border-color: $textColor;
  color: $textColor;
  border-style: solid;
  border-width: var(--borderWidth);
  display: flex;
  &.marked{
    background: linear-gradient(45deg, $backColor 85%, $markedColor 85%);
  }
  &:hover{
    background-color: $textColor;
    color: $backColor;
    border-color: $backColor;
    &.marked{
      background: linear-gradient(45deg, $textColor 85%, $markedColor 85%);
    }
    &:active{
      background-color: $backColor;
      color: $textColor;
      border-color: $backColor;
      &.marked{
        background: linear-gradient(45deg, $backColor 85%, $markedColor 85%);
      }
    }
  }
}
</style>
