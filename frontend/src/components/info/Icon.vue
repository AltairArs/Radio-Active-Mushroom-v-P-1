<script setup lang="ts">
import Container from "../containers/Container.vue";
import {ContainerSettings, IContainerSettingsCreate} from "../../container-pattern/container-pattern.ts";
import {CHANGE_CONTAINER_SET_PADDING} from "../../container-pattern/base-changes.ts";

defineProps({
  /**
   * Maybe:
   * classic,
   * duotone,
   * sharp,
   * sharp-duotone
   *
   * @default classic
   */
  pack: {
    type: String,
    default: "classic",
    required: false
  },
  /**
   * Maybe:
   * solid,
   * regular,
   * light,
   * thin
   *
   * @default solid
   */
  style: {
    type: String,
    default: "solid",
    required: false
  },
  /**
   * Name of icon
   *
   * @example user
   */
  name: {
    type: String,
    required: true
  },
  /**
   * Maybe:
   * xs,
   * sm,
   * lg,
   * 2x,
   * 3x,
   * 5x,
   * 7x,
   * 10x
   *
   * @default lg
   */
  size: {
    type: String,
    required: false,
    default: "lg"
  }
})

const CREATE_CONTAINER: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    return c;
  }
}

</script>

<template>
  <Container :settings="CREATE_CONTAINER.create()" class="icon">
    <i :class="'fa-' + pack + ' fa-' + style + ' fa-' + name + ' fa-' + size"></i>
  </Container>
</template>

<style scoped>
.icon i{
  color: var(--c-icon);
}
</style>