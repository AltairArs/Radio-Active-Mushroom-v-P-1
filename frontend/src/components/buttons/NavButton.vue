<script setup lang="ts">
import Container from "../containers/Container.vue";
import { ref } from 'vue'
import {RouterLink, useRouter} from "vue-router";
import {
  IContainerSettingsCreate,
  ContainerSettings,
  IContainerSettingsChange
} from "../../container-pattern/container-pattern.ts";
import {
  CHANGE_CONTAINER_SET_BORDER_RADIUS, CHANGE_CONTAINER_SET_BORDER_STYLE, CHANGE_CONTAINER_SET_BORDER_WIDTH,
  CHANGE_CONTAINER_SET_PADDING
} from "../../container-pattern/base-changes.ts";

defineProps({
  name: {
    type: String,
    required: true,
    default: ""
  },
  params: {
    type: Object,
    required: false,
    default: {}
  }
});

const CREATE_CONTAINER: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.HORIZONTAL_CHILD_LOCATION = true;
    c.SUB_CONTAINER_TYPE = "INPUT";
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_RADIUS(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_WIDTH(1).change(c);
    return c;
  }
}

const CHANGE_CONTAINER_SELECTED: IContainerSettingsChange = {
  change(settings: ContainerSettings): ContainerSettings {
    settings.BACKGROUND_TYPE = "linear";
    settings = CHANGE_CONTAINER_SET_BORDER_STYLE("dashed").change(settings);
    return settings;
  }
}

const CHANGE_CONTAINER_UNSELECTED: IContainerSettingsChange = {
  change(settings: ContainerSettings): ContainerSettings {
    settings = CHANGE_CONTAINER_SET_BORDER_STYLE("solid").change(settings);
    settings.BACKGROUND_TYPE = "two-mark";
    settings.MARGIN_LEFT = 1;
    return settings;
  }
}

const router = useRouter();

function curPathName(): string{
  return router.currentRoute.value.name as string;
}
const containerRef = ref(null);
</script>

<template>
  <RouterLink :to="{name: name, params: params}">
    <Container :settings="curPathName() == name ? CHANGE_CONTAINER_SELECTED.change(CREATE_CONTAINER.create()) : CHANGE_CONTAINER_UNSELECTED.change(CREATE_CONTAINER.create())" ref="containerRef">
      <slot name="icon" v-if="$slots.icon"></slot>
      <slot name="text" v-if="$slots.text"></slot>
    </Container>
  </RouterLink>
</template>

<style scoped>

</style>