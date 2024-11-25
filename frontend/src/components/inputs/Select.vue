<script setup lang="ts">
  import {ref} from "vue";
  import Icon from "../info/Icon.vue";

  const props = defineProps({
    options: {
      type: Map<String, String>,
      marked: true
    },
    init: {
      type: String,
      default: null,
      marked: false
    },
    globalIcon: {
      type: String,
      marked: false,
      default: null
    },
    icons: {
      type: Map<String, String>,
      marked: false,
      default: new Map<String, String>()
    }
  });

  defineEmits<{
    select: [key: String]
  }>()

  const selected = ref(props.init);
  const open = ref(false);
</script>

<template>
  <div class="select" tabindex="0" @blur="open = false">
    <div class="selected" :class="{open : open}" @click="open = !open">
      <Icon :name="globalIcon" v-if="globalIcon"/>
      <Icon :name="props.icons.get(selected) as string"/>
      <text v-if="props.options">
        {{ props.options.get(selected) }}
      </text>
      <div style="width: 30px"><div class="after"></div></div>
    </div>
    <div class="select-items" :class="{ hide: !open }">
      <div :class="selected == key[0] ? 'option option-selected' : 'option'" v-for="key in options" :key="key[0] as string" @click="selected = key[0]; open = false; $emit('select', key[0]);">
        <Icon :name="props.icons.get(key[0]) as string"/>
        <text>{{ key[1] }}</text>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$backColor: var(--c-light);
$textColor: var(--c-dark);
$selectedColor: var(--c-light-medium);

.hide{
  display: none;
}

.select{
  position: relative;
  & .selected{
    background-color: $backColor;
    padding: var(--padding);
    color: $textColor;
    border-radius: var(--borderRadius);
    border-color: $textColor;
    border-width: var(--borderWidth);
    border-style: solid;
    display: flex;
    &:hover{
      color: $backColor;
      background-color: $textColor;
      border-color: $backColor;
      & .after{
        border-color: $backColor transparent transparent transparent;
      }
    }
    &.open{
      border-radius: var(--borderRadius) var(--borderRadius) 0 0;
    }

    & .after{
      position: absolute;
      margin: auto 0 auto auto;
      content: "";
      top: 50%;
      right: 1em;
      width: 0;
      height: 0;
      border: 5px solid;
      border-color: $textColor transparent transparent transparent;
    }
  }
  & .select-items{
    background-color: $selectedColor;
    border-radius: 0 0 var(--borderRadius) var(--borderRadius);
    border-style: solid;
    border-color: $textColor;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    overflow: hidden;

    & .option{

      padding: var(--padding);
      color: $textColor;
      display: flex;

      &:hover{
        background-color: $textColor;
        color: $backColor;
        border-radius: calc(var(--borderRadius) / 2);
      }
      &.option-selected{
        background-color: $backColor;
        &:hover{
          background-color: $textColor;
        }
      }
    }
  }
}
</style>