<script setup lang="ts">
import Container from "../containers/Container.vue";
import {IContainerSettingsCreate, ContainerSettings} from "../../container-pattern/container-pattern.ts";
import {CHANGE_CONTAINER_SET_MARGIN_VERTICAL} from "../../container-pattern/base-changes.ts";

const CREATE_CONTAINER: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c = CHANGE_CONTAINER_SET_MARGIN_VERTICAL(1).change(c);
    c.BACKGROUND_TYPE = "none";
    return c;
  }
}
</script>

<template>
  <Container :settings="CREATE_CONTAINER.create()" class="divider">

  </Container>
</template>

<style scoped>
.divider{
  height: 5px;
  background-color: var(--c-mark);
}
</style>