<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
  units: {
    type: String,
    default: "",
    required: false
  },
  init: {
    type: Number,
    default: null,
    required: false
  },
  min: {
    type: Number,
    default: null,
    required: false
  },
  max: {
    type: Number,
    default: null,
    required: false
  },
  marked: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: null
  }
});

const data = ref(props.init);

function claim(value: number, min: number, max: number): number{
  if (value == null && min == null && max == null){
    return 0;
  }
  if (value != null && min == null && max == null){
    return value;
  }
  if (value == null && min != null && max == null){
    return min;
  }
  if (value == null && min == null && max != null){
    return max;
  }
  if (value == null && min != null && max != null){
    return min;
  }
  if (value != null && min == null && max != null){
    return Math.min(value, max);
  }
  if (value != null && min != null && max == null){
    return Math.max(value, min);
  }
  return Math.max(Math.min(value, max), min);
}

function input(event: Event): Number|null{
  let target = <HTMLInputElement>event.target;
  if (target.value != null){
    data.value = claim(target.value as unknown as number, props.min, props.max);
    target.value = data.value as unknown as string;
    return data.value;
  } else {
    return null;
  }
}

function add(): Number{
  if (!data.value) data.value = 0;
  data.value = claim(data.value + 1, props.min, props.max);
  return data.value;
}

function sub(): Number{
  if (!data.value) data.value = 0;
  data.value = claim(data.value - 1, props.min, props.max);
  return data.value;
}

defineEmits<{
  input: [value: Number|null, withUnits: string]
}>();

</script>

<template>
  <div :class="marked ? 'number-input-main marked' : 'number-input-main'">
    <input type="number" :value="data" :placeholder="placeholder" @input="(event) => $emit('input', input(event), data + units)">
    <div class="buttons">
      <div class="up btn" @click="$emit('input', add(), data + units)">
        <div class="arrow arrow-up"></div>
      </div>
      <div class="down btn" @click="$emit('input', sub(), data + units)">
        <div class="arrow arrow-down"></div>
      </div>
    </div>
    <div class="units" v-if="units">
      {{ units }}
    </div>
  </div>
</template>

<style scoped lang="scss">
$backColor: var(--c-light);
$textColor: var(--c-dark);
$inputBackColor: var(--c-dark);
$inputTextColor: var(--c-light);
$markedColor: var(--c-medium);
$placeholderColor: var(--c-light-medium);
$buttonsBackColor: var(--c-bright);
$buttonsWidth: 20px;

.number-input-main{
  display: flex;
  border-width: var(--borderWidth);
  border-color: $textColor;
  border-style: solid;
  background-color: $backColor;
  color: $textColor;
  width: fit-content;
  border-radius: var(--borderRadius);
  padding: var(--padding) 0;
  &.marked{
    background: linear-gradient(45deg, $markedColor 10%, $backColor 10%, $backColor 90%, $markedColor 90%);
  }

  & .buttons{
    height: 100%;
    padding-right: var(--padding);

    & .btn{
      height: 100%;
      width: $buttonsWidth;
      border-radius: var(--borderRadius) var(--borderRadius) 0 0;
      padding: calc(var(--padding) / 2);
      background-color: $textColor;
      position: relative;

      &:hover .arrow{
        border-color: $textColor transparent transparent transparent;
      }

      & .arrow{
        margin: auto;
        content: "";
        display: flex;
        width: 0;
        height: 0;
        border: 5px solid;
        border-color: $backColor transparent transparent transparent;

        &.arrow-up{
          rotate: 180deg;
          border-radius: 0;
        }
      }

      &:hover{
        background-color: $buttonsBackColor;
      }
    }

    & .up{
      border-radius: var(--borderRadius) var(--borderRadius) 0 0;
    }

    & .down{
      border-radius: 0 0 var(--borderRadius) var(--borderRadius);
    }
  }

  & input{
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
    &::-webkit-inner-spin-button{
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }

  & .units{
    color: $textColor;
    padding-right: var(--padding);
  }
}
</style>