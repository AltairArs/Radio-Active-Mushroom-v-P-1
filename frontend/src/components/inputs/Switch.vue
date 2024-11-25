<script setup lang="ts">
import {ref} from "vue";
import Icon from "../info/Icon.vue";

const props = defineProps({
  onValue: {
    type: String,
    required: true,
    default: ""
  },
  offValue: {
    type: String,
    required: true,
    default: ""
  },
  init: {
    type: Boolean,
    default: false
  },
  onIcon: {
    type: String,
    required: false
  },
  offIcon: {
    type: String,
    required: false
  }
});

const selected = ref(props.init);

defineEmits<{
  input: [selected: boolean]
}>()
</script>

<template>
<div class="switch-main" @click="selected = !selected; $emit('input', selected)">
  <div :class="selected == true ? 'on selected' : 'on'">
    <text>{{ onValue }}</text>
    <Icon :name="selected ? onIcon : ''" v-if="onIcon"/>
  </div>
  <div :class="!selected ? 'off selected' : 'off'">
    <Icon :name="!selected ? offIcon : ''" v-if="offIcon"/>
    <text>{{ offValue }}</text>
  </div>
</div>
</template>

<style scoped lang="scss">
$onBackColor: var(--c-light);
$onTextColor: var(--c-dark);
$unSelectedColor: var(--c-medium);

.switch-main{
  position: relative;
  height: fit-content;
  margin-top: auto;
  margin-bottom: auto;

  & .on{
    border-style: solid;
    border-color: $onTextColor;
    background-color: $onBackColor;
    color: $unSelectedColor;
    border-radius: var(--borderRadius);
    border-width: var(--borderWidth);
    padding: var(--padding);
    text-align: left;
    position: absolute;
    width: 100%;
    display: flex;
    &.selected{
      mask: linear-gradient(45deg, #000 80%, transparent 80%);
      color: $onTextColor;
    }
    &:hover{
      mask: linear-gradient(45deg, #000 50%, transparent 50%);
    }
  }

  & .off{
    border-style: solid;
    border-color: $onTextColor;
    background-color: $onTextColor;
    color: $unSelectedColor;
    border-radius: var(--borderRadius);
    border-width: var(--borderWidth);
    padding: var(--padding);
    text-align: right;
    width: 100%;
    display: flex;
    &.selected{
      mask: linear-gradient(45deg, transparent 20%, #000 20%);
      color: $onBackColor;
    }
    &:hover{
      mask: linear-gradient(45deg, transparent 50%, #000 50%);
    }

    & text{
      width: 100%;
    }
  }
}
</style>