<script setup lang="ts">
import {ContainerSettings, IContainerSettingsCreate} from "../../container-pattern/container-pattern.ts";
import {
  CHANGE_CONTAINER_SET_BORDER_RADIUS_TOP,
  CHANGE_CONTAINER_SET_PADDING
} from "../../container-pattern/base-changes.ts";
import Icon from "./Icon.vue";
import Addition from "./Addition.vue";
import Container from "../containers/Container.vue";

defineProps({
  text: {
    type: String,
    required: true
  },
  isNecessary: {
    type: Boolean,
    required: false,
    default: false
  }
});

const CREATE_CONTAINER_LABEL: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.HORIZONTAL_CHILD_LOCATION = true;
    c = CHANGE_CONTAINER_SET_BORDER_RADIUS_TOP(1).change(c);
    c.SUB_CONTAINER_TYPE = "INPUT";
    c.BORDER_RIGHT_STYLE = "solid";
    c.BORDER_TOP_STYLE = "solid";
    c.BORDER_LEFT_STYLE = "solid";
    c.BORDER_TOP_WIDTH = 1;
    c.BORDER_LEFT_WIDTH = 1;
    c.BORDER_RIGHT_WIDTH = 1;
    c.MARGIN_TOP = 2;
    c.FIT_CONTENT = true;
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    return c;
  }
}

const CREATE_CONTAINER_UNNECESSARY: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.MARGIN_LEFT = 1;
    return c;
  }
}
</script>

<template>
  <Container :settings="CREATE_CONTAINER_LABEL.create()" class="input-label">
    <slot name="icon"></slot>
    <text>{{ text }}</text>
    <Container :settings="CREATE_CONTAINER_UNNECESSARY.create()">
      <Icon name="asterisk" size="xs" v-if="isNecessary"/>
      <Addition text="Не обязательно" v-if="!isNecessary"/>
    </Container>
  </Container>
</template>

<style scoped>
.input-label{
  transform: translateY(var(--border-width));
}
</style>