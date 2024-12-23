<script setup lang="ts">
import Container from "../containers/Container.vue";
import {IContainerSettingsCreate, ContainerSettings} from "../../container-pattern/container-pattern.ts";
import {
  CHANGE_CONTAINER_SET_BORDER_RADIUS, CHANGE_CONTAINER_SET_BORDER_STYLE,
  CHANGE_CONTAINER_SET_BORDER_WIDTH, CHANGE_CONTAINER_SET_PADDING
} from "../../container-pattern/base-changes.ts";
import Icon from "./Icon.vue";

const CREATE_CONTAINER_MAIN: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c = CHANGE_CONTAINER_SET_BORDER_RADIUS(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_WIDTH(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_STYLE("dashed").change(c);
    c.CONTAINER_TYPE = "ERROR";
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    c.MARGIN_TOP = 1;
    return c;
  }
}

const CREATE_CONTAINER_HORIZONTAL: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.HORIZONTAL_CHILD_LOCATION = true;
    c.MARGIN_BOTTOM = 1;
    return c;
  }
}
</script>

<template>
  <Container :settings="CREATE_CONTAINER_MAIN.create()">
    <Container :settings="CREATE_CONTAINER_HORIZONTAL.create()">
      <Icon name="triangle-exclamation"/>
      <slot name="title"></slot>
    </Container>
    <slot name="content"></slot>
  </Container>
</template>

<style scoped>

</style>