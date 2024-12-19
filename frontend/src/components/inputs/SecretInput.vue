<script setup lang="ts">
import Container from "../containers/Container.vue";
import Icon from "../info/Icon.vue";
import Addition from "../info/Addition.vue";
import { ref } from 'vue'
import {
  IContainerSettingsCreate,
  ContainerSettings,
  IContainerSettingsChange
} from "../../container-pattern/container-pattern.ts";
import {
  CHANGE_CONTAINER_SET_BORDER_RADIUS,
  CHANGE_CONTAINER_SET_BORDER_RADIUS_TOP, CHANGE_CONTAINER_SET_BORDER_STYLE, CHANGE_CONTAINER_SET_BORDER_WIDTH,
  CHANGE_CONTAINER_SET_PADDING
} from "../../container-pattern/base-changes.ts";

defineProps({
  initialValue: {
    type: String,
    required: false,
    default: ""
  },
  label: {
    type: String,
    required: false,
    default: ""
  },
  isNecessary: {
    type: Boolean,
    required: false,
    default: false
  },
  placeholder: {
    type: String,
    required: false,
    default: ""
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
    c.FIT_CONTENT = true;
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    return c;
  }
}

const CREATE_CONTAINER_INPUT: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.SUB_CONTAINER_TYPE = "INPUT";
    c.MARGIN_BOTTOM = 2;
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_STYLE("solid").change(c);
    c = CHANGE_CONTAINER_SET_BORDER_WIDTH(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_RADIUS(1).change(c);
    c.BORDER_RADIUS_TOP_LEFT_ANGLE = 0;
    c.HORIZONTAL_CHILD_LOCATION = true;
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

const CREATE_CONTAINER_EYE: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.SELF_ALIGNMENT = "center";
    return c;
  }
}

const CHANGE_CONTAINER_NOT_LABEL: IContainerSettingsChange = {
  change(settings: ContainerSettings): ContainerSettings {
    settings.BORDER_RADIUS_TOP_LEFT_ANGLE = 1;
    return settings;
  }
}

const show = ref(false);
const input = ref(null);

function changeShow(){
  show.value = !show.value;
  if (input.value != null){
    const v = input.value.value;
    if (show.value){
      input.value.setAttribute("type", "text");
    } else {
      input.value.setAttribute("type", "password");
    }
    input.value.value = v;
  }
}

</script>

<template>
  <Container :settings="CREATE_CONTAINER_LABEL.create()" v-if="label" class="input-label">
    <Icon name="lock"/>
    <text>{{ label }}</text>
    <Container :settings="CREATE_CONTAINER_UNNECESSARY.create()">
      <Icon name="asterisk" size="xs" v-if="isNecessary"/>
      <Addition text="Не обязательно" v-if="!isNecessary"/>
    </Container>
  </Container>
  <Container :settings="label ? CREATE_CONTAINER_INPUT.create() : CHANGE_CONTAINER_NOT_LABEL.change(CREATE_CONTAINER_INPUT.create())">
    <Container :settings="CREATE_CONTAINER_EYE.create()">
      <Icon name="eye" _style="regular" v-if="!show" @click="changeShow()"/>
      <Icon name="eye-slash" _style="regular" v-if="show" @click="changeShow()"/>
    </Container>
    <input ref="input" type="password" :value="initialValue" class="text-input" :placeholder="placeholder ? placeholder : label">
  </Container>
</template>

<style scoped>
.input-label{
  transform: translateY(var(--border-width));
}
input.text-input{
  width: 100%;
  border-radius: var(--border-radius);
  padding: var(--padding);
  background-color: var(--c-text);
  color: var(--c-back-1);
  border-color: transparent;
  &::placeholder{
    color: var(--c-back-2);
  }
  &::-ms-reveal{
    display: none;
  }
  &::selection{
    background-color: var(--c-back-1);
    color: var(--c-text);
  }
  &:focus{
    outline: none;
  }
}
</style>