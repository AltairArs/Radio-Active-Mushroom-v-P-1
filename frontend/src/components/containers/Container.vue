<script setup lang="ts">
import { onMounted, ref } from 'vue'
const props = defineProps({
  /**
   * Maybe:
   * PRIMARY,
   * SECONDARY,
   * TERTIARY,
   * NONE,
   * NAVBAR,
   * ERROR,
   * TOOLTIP,
   * MENU
   *
   * @default null
   */
  containerType: {
    type: String,
    required: false,
    default: null
  },
  /**
   * Maybe:
   * LIGHT,
   * DARK
   *
   * @default null
   */
  themeMode: {
    type: String,
    required: false,
    default: null
  },
  /**
   * Maybe:
   * RED,
   * BLUE,
   * YELLOW,
   * GREEN,
   * PURPLE,
   * OLIVE,
   * CORAL,
   * TEAL,
   * HAKI,
   * BISQUE
   *
   * @default null
   */
  themeColor: {
    type: String,
    required: false,
    default: null
  },
  /**
   * Maybe:
   * INPUT,
   * INFO,
   * NONE
   *
   * @default null
   */
  subContainerType: {
    type: String,
    required: false,
    default: null
  }
});

const component = ref<Element | null>(null)

let _themeMode = "";
let _themeColor = "";
let _containerType = "";
let _subContainerType = "";

function getNan(value, _default?){
  if (value == null){
    return _default;
  } else {
    return value;
  }
}

function setParams(): void{
  if (component.value != null){
    let style = getComputedStyle(component.value);
    _themeMode = getNan(props.themeMode, style.getPropertyValue("--themeMode"));
    _themeColor = getNan(props.themeColor, style.getPropertyValue("--themeColor"));
    _containerType = getNan(props.containerType, style.getPropertyValue("--containerType"));
    _subContainerType = getNan(props.subContainerType, style.getPropertyValue("--subContainerType"));
    component.value.setAttribute("themeMode", _themeMode);
    component.value.setAttribute("themeColor", _themeColor);
    component.value.setAttribute("containerType", _containerType);
    component.value.setAttribute("subContainerType", _subContainerType);
  }
}

onMounted(() =>{
  setParams();
});

</script>

<template>
  <div ref="component" :themeMode="_themeMode" :themeColor="_themeColor" :containerType="_containerType" :subContainerType="_subContainerType" :class="'container '">
    <slot></slot>
  </div>
</template>

<style scoped>
div.container{
  color: var(--c-text);
  background-color: var(--c-back-1);
}
</style>