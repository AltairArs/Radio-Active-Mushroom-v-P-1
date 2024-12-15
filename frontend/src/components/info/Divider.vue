<script setup lang="ts">
import Container from "../containers/Container.vue";
import {IContainerSettingsCreate, ContainerSettings} from "../../container-pattern/container-pattern.ts";
import {CHANGE_CONTAINER_SET_MARGIN_VERTICAL} from "../../container-pattern/base-changes.ts";

const cCreate: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c = CHANGE_CONTAINER_SET_MARGIN_VERTICAL(1).change(c);
    return c;
  }
}
</script>

<template>
  <Container :settings="cCreate.create()" class="divider">

  </Container>
</template>

<style scoped>
.divider{
  height: 5px;
  background-color: var(--c-mark);
}
</style>