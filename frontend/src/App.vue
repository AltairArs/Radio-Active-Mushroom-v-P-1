<script setup lang="ts">
import {RouterView} from "vue-router";
import Header from "./components/header/Header.vue";
import UnSelectable from "./components/containers/UnSelectable.vue";

</script>

<template>
  <UnSelectable>
    <Header/>
    <RouterView/>
  </UnSelectable>
</template>

<style scoped>

</style>
