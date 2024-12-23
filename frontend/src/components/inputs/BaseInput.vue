<script setup lang="ts">
import InputLabel from "../info/InputLabel.vue";
import Container from "../containers/Container.vue";
import {
  ContainerSettings,
  IContainerSettingsChange,
  IContainerSettingsCreate
} from "../../container-pattern/container-pattern.ts";
import {
  CHANGE_CONTAINER_SET_BORDER_RADIUS,
  CHANGE_CONTAINER_SET_BORDER_STYLE,
  CHANGE_CONTAINER_SET_BORDER_WIDTH,
  CHANGE_CONTAINER_SET_PADDING
} from "../../container-pattern/base-changes.ts";

defineProps({
  label: {
    type: String,
    required: false,
    default: ""
  },
  isNecessary: {
    type: Boolean,
    required: false,
    default: false
  }
});

const CREATE_CONTAINER_INPUT: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.SUB_CONTAINER_TYPE = "INPUT";
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_STYLE("solid").change(c);
    c = CHANGE_CONTAINER_SET_BORDER_WIDTH(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_RADIUS(1).change(c);
    c.BORDER_RADIUS_TOP_LEFT_ANGLE = 0;
    c.HORIZONTAL_CHILD_LOCATION = true;
    return c;
  }
}

const CHANGE_CONTAINER_NOT_LABEL: IContainerSettingsChange = {
  change(settings: ContainerSettings): ContainerSettings {
    settings.BORDER_RADIUS_TOP_LEFT_ANGLE = 1;
    return settings;
  }
}
</script>

<template>
  <InputLabel :text="label" v-if="label" :isNecessary="isNecessary">
    <template #icon>
      <slot name="labelIcon"></slot>
    </template>
  </InputLabel>
  <Container :settings="label ? CREATE_CONTAINER_INPUT.create() : CHANGE_CONTAINER_NOT_LABEL.change(CREATE_CONTAINER_INPUT.create())" v-if="$slots.textInput">
    <slot name="textInput"></slot>
  </Container>
  <slot name="customInput" v-if="$slots.customInput" :labelExists="!!label"></slot>
</template>

<style scoped lang="scss">
:slotted(input){
  width: 100%;
  border-radius: var(--border-radius);
  padding: var(--padding);
  background-color: var(--c-text);
  color: var(--c-back-1);
  border-color: transparent;
  &::placeholder{
    color: var(--c-back-2);
  }
  &::-ms-reveal{
    display: none;
  }
  &::selection{
    background-color: var(--c-back-1);
    color: var(--c-text);
  }
  &:focus{
    outline: none;
  }
}
</style>