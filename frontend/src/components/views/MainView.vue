<script setup lang="ts">
import Container from "../containers/Container.vue";
import {ContainerSettings, IContainerSettingsCreate} from "../../container-pattern/container-pattern.ts";
import Divider from "../info/Divider.vue";
import Icon from "../info/Icon.vue";
import {
  CHANGE_CONTAINER_SET_BORDER_RADIUS, CHANGE_CONTAINER_SET_BORDER_STYLE, CHANGE_CONTAINER_SET_BORDER_WIDTH,
  CHANGE_CONTAINER_SET_PADDING
} from "../../container-pattern/base-changes.ts";

const CREATE_CONTAINER_1: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.CONTAINER_TYPE = "AUTO";
    c.HORIZONTAL_CHILD_LOCATION = true;
    c.MARGIN_BOTTOM = 2;
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_RADIUS(1).change(c);
    return c;
  }
}
const CREATE_CONTAINER_2: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.CONTAINER_TYPE = "AUTO";
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_RADIUS(1).change(c);
    c.SELF_ALIGNMENT = "top";
    return c;
  }
}
const CREATE_CONTAINER_HORIZONTAL_1: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.HORIZONTAL_CHILD_LOCATION = true;
    return c;
  }
}
const CREATE_CONTAINER_HORIZONTAL_2: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.HORIZONTAL_CHILD_LOCATION = true;
    c.MARGIN_LEFT = 2;
    return c;
  }
}
</script>

<template>
  <Container :settings="CREATE_CONTAINER_1.create()">
    <Container :settings="CREATE_CONTAINER_2.create()">
      <h1>RadioActive Mushroom</h1>
      <Divider/>
      <h2>Мы предлагаем простое и удобное решение для проектирования баз данных!</h2>
    </Container>
  </Container>

  <Container :settings="CREATE_CONTAINER_1.create()">
    <Container :settings="CREATE_CONTAINER_2.create()">
      <Container :settings="CREATE_CONTAINER_HORIZONTAL_1.create()">
        <Icon name="bolt"/>
        <h2>Простая генерация кода</h2>
      </Container>
      <Divider/>
      <Container :settings="CREATE_CONTAINER_HORIZONTAL_2.create()">
        <Icon name="book"/>
        <h3>для библиотек</h3>
      </Container>
      <Container :settings="CREATE_CONTAINER_HORIZONTAL_2.create()">
        <Icon name="database"/>
        <h3>для баз данных</h3>
      </Container>
    </Container>
    <Container :settings="CREATE_CONTAINER_2.create()">
      <Container :settings="CREATE_CONTAINER_HORIZONTAL_1.create()">
        <Icon name="pen"/>
        <h2>Простое редактирование в 2 клика</h2>
      </Container>
      <Divider/>
    </Container>
    <Container :settings="CREATE_CONTAINER_2.create()">
      <Container :settings="CREATE_CONTAINER_HORIZONTAL_1.create()">
        <Icon name="droplet"/>
        <h2>Разнообразие тем</h2>
      </Container>
      <Divider/>
      <h3>11 возможных цветов</h3>
    </Container>
  </Container>
</template>

<style scoped>

</style>