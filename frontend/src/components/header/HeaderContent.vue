<script setup lang="ts">
import Container from "../containers/Container.vue";
import SimpleButton from "../buttons/SimpleButton.vue";
import Icon from "../info/Icon.vue";

</script>

<template>
  <Container container-type="NAVBAR" padding border-radius horizontal>
    <h1>RAM</h1>
    <SimpleButton>
      <template #icon>
        <Icon name="person"/>
      </template>
      <template #text>
        Registration
      </template>
    </SimpleButton>
    <SimpleButton>
      <template #icon>
        <Icon name="person"/>
      </template>
      <template #text>
        Registration
      </template>
    </SimpleButton>
  </Container>
</template>

<style scoped>

</style>