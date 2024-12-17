<script setup lang="ts">
import Container from "../containers/Container.vue";
import { ref, watch } from 'vue'
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

const props = defineProps({
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
    c.MARGIN_LEFT = 1;
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
    return settings;
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

const router = useRouter();

const containerRef = ref(null);

watch(() => router.currentRoute.value.name, (newName) => {
  if (newName == props.name){
    containerRef.value.applyChanges(CHANGE_CONTAINER_SELECTED);
  } else {
    containerRef.value.applyChanges(CHANGE_CONTAINER_UNSELECTED);
  }
});
</script>

<template>
  <RouterLink :to="{name: name, params: params}">
    <Container :settings="CREATE_CONTAINER.create()"
               ref="containerRef"
               @mouseenter="containerRef.applyChanges(CHANGE_CONTAINER_MOUSE_ENTER)"
               @mouseleave="containerRef.applyChanges(CHANGE_CONTAINER_MOUSE_LEAVE)"
    >
      <slot name="icon" v-if="$slots.icon"></slot>
      <slot name="text" v-if="$slots.text"></slot>
    </Container>
  </RouterLink>
</template>

<style scoped>

</style>