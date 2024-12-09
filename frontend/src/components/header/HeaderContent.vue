<script setup lang="ts">
import Container from "../containers/Container.vue";
import SimpleButton from "../buttons/SimpleButton.vue";
import Icon from "../info/Icon.vue";
import UnSelectable from "../containers/UnSelectable.vue";

</script>

<template>
  <Container container-type="NAVBAR" padding border-radius horizontal>
    <h1>RAM</h1>
    <SimpleButton>
      <template #icon>
        <Icon name="r"/>
      </template>
      <template #text>
        <UnSelectable>
          Registration
        </UnSelectable>
      </template>
    </SimpleButton>
  </Container>
</template>

<style scoped>

</style>