<script setup lang="ts">
import Container from "../containers/Container.vue";
import {IContainerSettingsCreate, ContainerSettings} from "../../container-pattern/container-pattern.ts";
import Divider from "../info/Divider.vue";
import {
  CHANGE_CONTAINER_SET_BORDER_RADIUS,
  CHANGE_CONTAINER_SET_PADDING
} from "../../container-pattern/base-changes.ts";
import SimpleButton from "../buttons/SimpleButton.vue";
import Icon from "../info/Icon.vue";
import { ref } from 'vue'

const CREATE_CONTAINER_MAIN: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.CONTAINER_TYPE = "AUTO";
    c.SELF_ALIGNMENT = "top";
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_RADIUS(1).change(c);
    c.FIT_CONTENT = true;
    return c;
  }
}

const CREATE_CONTAINER_HORIZONTAL: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.HORIZONTAL_CHILD_LOCATION = true;
    return c;
  }
}

const CREATE_CONTAINER_RESET_BUTTON: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.SELF_ALIGNMENT = "top-right";
    return c;
  }
}

const CREATE_CONTAINER_SUBMIT_BUTTON: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.SELF_ALIGNMENT = "top-left";
    return c;
  }
}

const mainContainerRef = ref(null);

</script>

<template>
  <form>
    <Container :settings="CREATE_CONTAINER_MAIN.create()" ref="mainContainerRef">
      <slot name="titleText" v-if="$slots.titleText"></slot>
      <Divider v-if="$slots.titleText"/>
      <slot name="inputs" v-if="$slots.inputs"></slot>
      <Divider/>
      <Container :settings="CREATE_CONTAINER_HORIZONTAL.create()" >
        <Container :settings="CREATE_CONTAINER_RESET_BUTTON.create()">
          <SimpleButton @click="mainContainerRef.updateComponent()">
            <template #icon>
              <Icon name="arrows-rotate"/>
            </template>
            <template #text>
              Очистить
            </template>
          </SimpleButton>
        </Container>
        <Container :settings="CREATE_CONTAINER_SUBMIT_BUTTON.create()">
          <SimpleButton>
            <template #icon v-if="$slots.buttonIcon">
              <slot name="buttonIcon"></slot>
            </template>
            <template #text v-if="$slots.buttonText">
              <slot name="buttonText"></slot>
            </template>
          </SimpleButton>
        </Container>
      </Container>
    </Container>
  </form>
</template>

<style scoped>

</style>