<script setup lang="ts">
import NavItem from "./NavItem.vue";
import Switch from "../inputs/Switch.vue";

function changeMode(selected: Boolean): void{
  let body: HTMLElement = document.body;
  if (selected){
    body.setAttribute('themeMode', 'LIGHT');
  } else {
    body.setAttribute('themeMode', 'DARK');
  }
}

function getMode(): string|null{
  return document.body.getAttribute('themeMode');
}

</script>

<template>
  <nav class="nav">
    <NavItem label="Main" name="main"/>
    <NavItem icon="login" label="Login" name="login"/>
    <NavItem icon="login" label="Registration" name="register"/>
    <Switch on-icon="theme" off-icon="theme" off-value="Dark" on-value="Light" @input="changeMode" :init="getMode() == 'LIGHT'"/>
  </nav>
</template>

<style scoped lang="scss">
nav.nav{
  display: flex;
}
</style>