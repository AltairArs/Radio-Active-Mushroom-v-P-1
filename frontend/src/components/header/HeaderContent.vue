<script setup lang="ts">
import Container from "../containers/Container.vue";
import {IContainerSettingsCreate, ContainerSettings} from "../../container-pattern/container-pattern.ts";
import {
  CHANGE_CONTAINER_SET_BORDER_RADIUS_BOTTOM,
  CHANGE_CONTAINER_SET_PADDING
} from "../../container-pattern/base-changes.ts";

const cCreate: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c = CHANGE_CONTAINER_SET_BORDER_RADIUS_BOTTOM(1).change(c);
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    c.HORIZONTAL_CHILD_LOCATION = true;
    c.CONTAINER_TYPE = "NAVBAR";
    return c;
  }
}
</script>

<template>
 <Container :settings="cCreate.create()">
   <h1>RAM</h1>
 </Container>
</template>

<style scoped>

</style>