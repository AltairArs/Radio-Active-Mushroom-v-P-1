<script setup lang="ts">
import Container from "../containers/Container.vue";
import {ContainerSettings, IContainerSettingsCreate} from "../../container-pattern/container-pattern.ts";
import Divider from "../info/Divider.vue";
import Icon from "../info/Icon.vue";
import {
  CHANGE_CONTAINER_SET_BORDER_RADIUS, CHANGE_CONTAINER_SET_BORDER_STYLE, CHANGE_CONTAINER_SET_BORDER_WIDTH,
  CHANGE_CONTAINER_SET_PADDING
} from "../../container-pattern/base-changes.ts";

const c1Create: IContainerSettingsCreate = {
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
const c2Create: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.CONTAINER_TYPE = "AUTO";
    c = CHANGE_CONTAINER_SET_PADDING(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_RADIUS(1).change(c);
    c = CHANGE_CONTAINER_SET_BORDER_STYLE("solid").change(c);
    c = CHANGE_CONTAINER_SET_BORDER_WIDTH(1).change(c);
    c.SELF_ALIGNMENT = "top";
    return c;
  }
}
const chCreate: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.HORIZONTAL_CHILD_LOCATION = true;
    return c;
  }
}
const ch2Create: IContainerSettingsCreate = {
  create(): ContainerSettings {
    let c = new ContainerSettings();
    c.HORIZONTAL_CHILD_LOCATION = true;
    c.MARGIN_LEFT = 2;
    return c;
  }
}
</script>

<template>
  <Container :settings="c1Create.create()">
    <Container :settings="c2Create.create()">
      <h1>RadioActive Mushroom</h1>
      <Divider/>
      <h2>We offer a simple and easy-to-use solution for database development!</h2>
    </Container>
  </Container>

  <Container :settings="c1Create.create()">
    <Container :settings="c2Create.create()">
      <Container :settings="chCreate.create()">
        <Icon name="bolt"/>
        <h2>Easy generation code</h2>
      </Container>
      <Divider/>
      <Container :settings="ch2Create.create()">
        <Icon name="book"/>
        <h3>for libraries</h3>
      </Container>
      <Container :settings="ch2Create.create()">
        <Icon name="database"/>
        <h3>for databases</h3>
      </Container>
    </Container>
    <Container :settings="c2Create.create()">
      <Container :settings="chCreate.create()">
        <Icon name="pen"/>
        <h2>Easy editing in 2 clicks</h2>
      </Container>
      <Divider/>
    </Container>
    <Container :settings="c2Create.create()">
      <Container :settings="chCreate.create()">
        <Icon name="droplet"/>
        <h2>Variety of themes</h2>
      </Container>
      <Divider/>
      <h3>11 possible colours in total</h3>
    </Container>
  </Container>
</template>

<style scoped>

</style>