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
  },
  /**
   * Maybe:
   * top-left,
   * top,
   * top-right,
   * right,
   * bottom-right,
   * bottom,
   * bottom-left,
   * left,
   * center
   *
   * @default top-left
   */
  selfAlign: {
    type: String,
    required: false,
    default: "top-left"
  },
  marginBottom: {
    type: String,
    required: false,
    default: null
  },
  marginLeft: {
    type: String,
    required: false,
    default: null
  },
  marginTop: {
    type: String,
    required: false,
    default: null
  },
  marginRight: {
    type: String,
    required: false,
    default: null
  },
  changeThemeOnHover: {
    type: Boolean,
    required: false,
    default: false
  },
  changeThemeOnClick: {
    type: Boolean,
    required: false,
    default: false
  },
  /**
   * Unselected background
   * Maybe:
   * one-color,
   * one-mark,
   * two-mark,
   * linear,
   * conic
   *
   * @default one-color
   */
  backgroundT: {
    type: String,
    required: false,
    default: "one-color"
  },
  selected: {
    type: Boolean,
    required: false,
    default: null,
  },
  selectedBackgroundT: {
    type: String,
    required: false,
    default: "one-color"
  }
});

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

function getValueOrDefault(value: string | null, _default: string): string{
  if (value == null){
    return _default;
  } else {
    return value;
  }
}

const component = ref<Element | null>(null);

const _themeMode = ref("");
const _themeColor = ref("");
const _containerType = ref("");
const _subContainerType = ref("");

const overrideThemeMode = ref(props.themeMode != null);
const overrideThemeColor = ref(props.themeColor != null);
const overrideContainerType = ref(props.containerType != null);
const overrideSubContainerType = ref(props.subContainerType != null);

function setParams(): void{
  if (component.value != null){
    let style = getComputedStyle(component.value);

    let __themeMode = getValueOrDefault(props.themeMode, style.getPropertyValue("--themeMode"));
    let __themeColor = getValueOrDefault(props.themeColor, style.getPropertyValue("--themeColor"));
    let __containerType = getValueOrDefault(props.containerType, style.getPropertyValue("--containerType"));
    let __subContainerType = getValueOrDefault(props.subContainerType, style.getPropertyValue("--subContainerType"));
    if (__containerType == "AUTO"){
      __containerType = getContainerTypeFromParent(style.getPropertyValue("--containerType"));
    }

    _themeMode.value = __themeMode;
    _themeColor.value = __themeColor;
    _containerType.value = __containerType;
    _subContainerType.value = __subContainerType;

    component.value.setAttribute("themeMode", __themeMode);
    component.value.setAttribute("themeColor", __themeColor);
    component.value.setAttribute("containerType", __containerType);
    component.value.setAttribute("subContainerType", __subContainerType);
  }
}

function onChange(): void{
  let attr = _themeMode.value;
  if (attr == "LIGHT"){
    attr = "DARK";
  } else {
    attr = "LIGHT";
  }
  _themeMode.value = attr;
}

function onHovered(): void{
  if (props.changeThemeOnHover){
    onChange();
  }
}

function onClicked(): void{
  if (props.changeThemeOnClick){
    onChange();
  }
}

nextTick(() =>{
  setParams();
});

</script>

<template>
  <div ref="component" class="container" :padding="padding" :border="border" :borderRadius="borderRadius" :horizontal="horizontal" :selfAlign="selfAlign"
       :marginBottom="marginBottom" :marginLeft="marginLeft" :marginTop="marginTop" :marginRight="marginRight" @mouseenter="onHovered()"
       @mouseleave="onHovered()" :themeMode="_themeMode" :themeColor="_themeColor" :containerType="_containerType" :subContainerType="_subContainerType"
       :overrideThemeMode="overrideThemeMode" :overrideThemeColor="overrideThemeColor" :overrideContainerType="overrideContainerType"
       :overrideSubContainerType="overrideSubContainerType" @mousedown="onClicked()" @mouseup="onClicked()" :backgroundT="backgroundT"
       :selected="selected" :selectedBackgroundT="selectedBackgroundT">
    <slot></slot>
  </div>
</template>

<style scoped>
div.container{
  color: var(--c-text);

  &[backgroundT="one-color"]{
    background-color: var(--c-back-1);
  }

  &[backgroundT="one-mark"]{
    background: linear-gradient(45deg, var(--c-back-1) 85%, var(--c-mark) 85%);
  }

  &[backgroundT="two-mark"]{
    background: linear-gradient(45deg, var(--c-mark) 15%, var(--c-back-1) 15% 85%, var(--c-mark) 85%);
  }

  &[backgroundT="linear"]{
    background: linear-gradient(45deg, var(--c-back-1) 33%, var(--c-back-2) 33% 67%, var(--c-back-3) 67%);
  }

  &[backgroundT="conic"]{
    background: conic-gradient(from 210deg at 50% 50%, var(--c-back-1) 0deg 120deg, var(--c-back-2) 120deg 240deg, var(--c-back-3) 240deg 360deg);
  }

  &[selected=true][selectedBackgroundT="one-color"]{
    background-color: var(--c-back-1);
  }

  &[selected=true][selectedBackgroundT="one-mark"]{
    background: linear-gradient(45deg, var(--c-back-1) 85%, var(--c-mark) 85%);
  }

  &[selected=true][selectedBackgroundT="two-mark"]{
    background: linear-gradient(45deg, var(--c-mark) 15%, var(--c-back-1) 15% 85%, var(--c-mark) 85%);
  }

  &[selected=true][selectedBackgroundT="linear"]{
    background: linear-gradient(45deg, var(--c-back-1) 33%, var(--c-back-2) 33% 67%, var(--c-back-3) 67%);
  }

  &[selected=true][selectedBackgroundT="conic"]{
    background: conic-gradient(from 210deg at 50% 50%, var(--c-back-1) 0deg 120deg, var(--c-back-2) 120deg 240deg, var(--c-back-3) 240deg 360deg);
  }

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

  &[selfAlign="top-left"]{
    margin: 0 auto auto 0;
  }

  &[selfAlign="top"]{
    margin: 0 auto auto auto;
  }

  &[selfAlign="top-right"]{
    margin: 0 0 auto auto;
  }

  &[selfAlign="right"]{
    margin: auto 0 auto auto;
  }

  &[selfAlign="bottom-right"]{
    margin: auto 0 0 auto;
  }

  &[selfAlign="bottom"]{
    margin: auto auto 0 auto;
  }

  &[selfAlign="bottom-left"]{
    margin: auto auto 0 0;
  }

  &[selfAlign="left"]{
    margin: auto auto auto 0;
  }

  &[selfAlign="center"]{
    margin: auto;
  }

  &[marginBottom]{
    margin-bottom: calc(var(--margin) * v-bind(marginBottom));
  }

  &[marginLeft]{
    margin-left: calc(var(--margin) * v-bind(marginLeft));
  }

  &[marginTop]{
    margin-left: calc(var(--margin) * v-bind(marginTop));
  }

  &[marginRight]{
    margin-left: calc(var(--margin) * v-bind(marginRight));
  }
}
</style>