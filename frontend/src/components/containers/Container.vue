<script setup lang="ts">
import { nextTick, ref } from 'vue'
import {ContainerSettings, IContainerSettingsChange} from "../../container-pattern/container-pattern.ts";

const props = defineProps({
  settings: {
    type: ContainerSettings,
    required: true,
    default: {}
  }
});

const component = ref<Element | null>(null);

const _settings = ref<ContainerSettings>(props.settings);

function setParams(): void{
  if (component.value != null){
    component.value.setAttribute("overrideThemeMode", false.toString());
    component.value.setAttribute("overrideThemeColor", false.toString());
    component.value.setAttribute("overrideContainerType", false.toString());
    component.value.setAttribute("overrideSubContainerType", false.toString());

    let style = getComputedStyle(component.value);

    let __themeMode = style.getPropertyValue("--themeMode");
    let __themeColor = style.getPropertyValue("--themeColor");
    let __containerType = style.getPropertyValue("--containerType");
    let __subContainerType = style.getPropertyValue("--subContainerType");

    component.value.setAttribute("themeMode", _settings.value.GEN__THEME_MODE(__themeMode));
    component.value.setAttribute("themeColor", _settings.value.GEN__THEME_COLOR(__themeColor));
    component.value.setAttribute("containerType", _settings.value.GEN__CONTAINER_TYPE(__containerType));
    component.value.setAttribute("subContainerType", _settings.value.GEN__SUB_CONTAINER_TYPE(__subContainerType));

    component.value.setAttribute("overrideThemeMode", (_settings.value.GEN__OVERRIDE_THEME_MODE()).toString());
    component.value.setAttribute("overrideThemeColor", (_settings.value.GEN__OVERRIDE_THEME_COLOR()).toString());
    component.value.setAttribute("overrideContainerType", (_settings.value.GEN__OVERRIDE_CONTAINER_TYPE()).toString());
    component.value.setAttribute("overrideSubContainerType", (_settings.value.GEN__OVERRIDE_SUB_CONTAINER_TYPE()).toString());
  }
}

function applyChanges(changes: IContainerSettingsChange): void{
  _settings.value = changes.change(_settings.value);
  setParams();
}

nextTick(() =>{
  setParams();
});

defineExpose({
  applyChanges
})

</script>

<template>
  <div class="container" ref="component"
       :horizontal="_settings.HORIZONTAL_CHILD_LOCATION"
       :backgroundType="_settings.BACKGROUND_TYPE"
       :unselectableV="_settings.UNSELECTABLE"
       :selfAlign="_settings.SELF_ALIGNMENT"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
div.container{

  margin: calc(var(--margin) * v-bind(_settings.MARGIN_TOP))
      calc(var(--margin) * v-bind(_settings.MARGIN_RIGHT))
      calc(var(--margin) * v-bind(_settings.MARGIN_BOTTOM))
      calc(var(--margin) * v-bind(_settings.MARGIN_LEFT));

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

  color: var(--c-text);

  border-radius: calc(var(--border-radius) * v-bind(_settings.BORDER_RADIUS_TOP_LEFT_ANGLE))
  calc(var(--border-radius) * v-bind(_settings.BORDER_RADIUS_TOP_RIGHT_ANGLE))
  calc(var(--border-radius) * v-bind(_settings.BORDER_RADIUS_BOTTOM_RIGHT_ANGLE))
  calc(var(--border-radius) * v-bind(_settings.BORDER_RADIUS_BOTTOM_LEFT_ANGLE));

  border-width: calc(var(--border-width) * v-bind(_settings.BORDER_TOP_WIDTH))
  calc(var(--border-width) * v-bind(_settings.BORDER_RIGHT_WIDTH))
  calc(var(--border-width) * v-bind(_settings.BORDER_BOTTOM_WIDTH))
  calc(var(--border-width) * v-bind(_settings.BORDER_LEFT_WIDTH));

  border-style: v-bind(_settings.BORDER_TOP_STYLE)
  v-bind(_settings.BORDER_RIGHT_STYLE)
  v-bind(_settings.BORDER_BOTTOM_STYLE)
  v-bind(_settings.BORDER_LEFT_STYLE);

  padding: calc(var(--padding) * v-bind(_settings.PADDING_TOP))
  calc(var(--padding) * v-bind(_settings.PADDING_RIGHT))
  calc(var(--padding) * v-bind(_settings.PADDING_BOTTOM))
  calc(var(--padding) * v-bind(_settings.PADDING_LEFT));

  box-shadow: calc(1px * v-bind(_settings.SHADOW_HORIZONTAL_OFFSET))
  calc(1px * v-bind(_settings.SHADOW_VERTICAL_OFFSET))
  calc(1px * v-bind(_settings.SHADOW_BLUR))
  calc(1px * v-bind(_settings.SHADOW_STRETCH)) var(--c-shadow);

  &[horizontal=true]{
    display: flex;
  }

  &[backgroundType="one-color"]{
    background-color: var(--c-back-1);
  }

  &[backgroundType="one-mark"]{
    background: linear-gradient(45deg, var(--c-back-1) 85%, var(--c-mark) 85%);
  }

  &[backgroundType="two-mark"]{
    background: linear-gradient(45deg, var(--c-mark) 15%, var(--c-back-1) 15% 85%, var(--c-mark) 85%);
  }

  &[backgroundType="linear"]{
    background: linear-gradient(45deg, var(--c-back-1) 33%, var(--c-back-2) 33% 67%, var(--c-back-3) 67%);
  }

  &[backgroundType="conic"]{
    background: conic-gradient(from 210deg at 50% 50%, var(--c-back-1) 0deg 120deg, var(--c-back-2) 120deg 240deg, var(--c-back-3) 240deg 360deg);
  }

  &[unselectableV=true]{
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }
}
</style>