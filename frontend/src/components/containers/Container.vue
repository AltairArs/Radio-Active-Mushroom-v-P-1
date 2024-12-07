<script setup lang="ts">
import { nextTick, ref } from 'vue'
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
   * AUTO - type of container is determined on the basis of the parent:
   *
   * [PARENT] => [CURRENT]
   *
   * PRIMARY => SECONDARY
   *
   * SECONDARY => TERTIARY
   *
   * TERTIARY => PRIMARY
   *
   * ERROR => ERROR
   *
   * NONE => PRIMARY
   *
   * NAVBAR => PRIMARY
   *
   * TOOLTIP => TOOLTIP
   *
   * MENU => MENU
   *
   * @default null (inherit from parent)
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
   * @default null (inherit from parent)
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
   * @default null (inherit from parent)
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
   * @default null (inherit from parent)
   */
  subContainerType: {
    type: String,
    required: false,
    default: null
  },
  padding: {
    type: Boolean,
    required: false,
    default: null
  },
  border: {
    type: Boolean,
    required: false,
    default: null
  },
  borderRadius: {
    type: Boolean,
    required: false,
    default: null
  },
  horizontal: {
    type: Boolean,
    required: false,
    default: null
  }
});

const component = ref<Element | null>(null)

let _themeMode = "";
let _themeColor = "";
let _containerType = "";
let _subContainerType = "";

function getValueOrDefault(value: string, _default: string): string{
  if (value == null){
    return _default;
  } else {
    return value;
  }
}

function getContainerTypeFromParent(parentValue: string): string{
  switch (parentValue){
    case "PRIMARY":
      return "SECONDARY";
    case "SECONDARY":
      return "TERTIARY";
    case "TERTIARY":
      return "PRIMARY";
    case "NONE":
      return "PRIMARY";
    case "NAVBAR":
      return "PRIMARY";
    default:
      return parentValue;
  }
}

function setParams(): void{
  if (component.value != null){
    let style = getComputedStyle(component.value);
    _themeMode = getValueOrDefault(props.themeMode, style.getPropertyValue("--themeMode"));
    _themeColor = getValueOrDefault(props.themeColor, style.getPropertyValue("--themeColor"));
    _containerType = getValueOrDefault(props.containerType, style.getPropertyValue("--containerType"));
    _subContainerType = getValueOrDefault(props.subContainerType, style.getPropertyValue("--subContainerType"));
    if (_containerType == "AUTO"){
      _containerType = getContainerTypeFromParent(style.getPropertyValue("--containerType"));
    }
    component.value.setAttribute("themeMode", _themeMode);
    component.value.setAttribute("themeColor", _themeColor);
    component.value.setAttribute("containerType", _containerType);
    component.value.setAttribute("subContainerType", _subContainerType);
  }
}

nextTick(() =>{
  setParams();
});

</script>

<template>
  <div ref="component" class="container" :padding="padding" :border="border" :borderRadius="borderRadius" :horizontal="horizontal">
    <slot></slot>
  </div>
</template>

<style scoped>
div.container{
  color: var(--c-text);
  background-color: var(--c-back-1);

  &[padding]{
    padding: var(--padding);
  }

  &[border]{
    border: var(--border-width) solid var(--c-border);
  }

  &[borderRadius]{
    border-radius: var(--border-radius);
  }

  &[horizontal]{
    display: flex;
  }
}
</style>