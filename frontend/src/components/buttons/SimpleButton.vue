<script setup lang="ts">
import { ref } from 'vue'
import Container from "../containers/Container.vue";
import {
  IContainerSettingsCreate,
  ContainerSettings,
  IContainerSettingsChange
} from "../../container-pattern/container-pattern.ts";
import {
  CHANGE_CONTAINER_SET_BORDER_RADIUS,
  CHANGE_CONTAINER_SET_BORDER_STYLE,
  CHANGE_CONTAINER_SET_BORDER_WIDTH,
  CHANGE_CONTAINER_SET_MARGIN,
  CHANGE_CONTAINER_SET_PADDING
} from "../../container-pattern/base-changes.ts";

const CREATE_CONTAINER: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_RADIUS(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_WIDTH(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_STYLE("dotted").change(c);
    c = CHANGE_CONTAINER_SET_MARGIN(0.5).change(c);
    c.HORIZONTAL_CHILD_LOCATION = true;
    c.SUB_CONTAINER_TYPE = "INPUT";
    return c;
  }
}

const CHANGE_CONTAINER_MOUSE_ENTER: IContainerSettingsChange = {
  change(settings: ContainerSettings): ContainerSettings {
    settings.THEME_MODE = "INVERT";
    return settings;
  }
}

const CHANGE_CONTAINER_MOUSE_LEAVE: IContainerSettingsChange = {
  change(settings: ContainerSettings): ContainerSettings {
    settings.THEME_MODE = "PARENT";
    return settings;
  }
}

const containerRef = ref(null);

</script>

<template>
  <Container :settings="CREATE_CONTAINER.create()"
             ref="containerRef"
             @mouseenter="containerRef.applyChanges(CHANGE_CONTAINER_MOUSE_ENTER)"
             @mouseleave="containerRef.applyChanges(CHANGE_CONTAINER_MOUSE_LEAVE)"
  >
    <slot name="icon" v-if="$slots.icon"></slot>
    <slot name="text" v-if="$slots.text"></slot>
  </Container>
</template>

<style scoped>

</style>