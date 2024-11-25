<script setup lang="ts">
import {RouterLink, useRouter} from "vue-router";
import SimpleButton from "../buttons/SimpleButton.vue";

defineProps({
  name: {
    type: String,
    required: true,
    default: ""
  },
  label: {
    type: String,
    required: true,
    default: ""
  },
  icon: {
    type: String,
    required: false,
    default: null
  },
  params: {
    type: Object,
    required: false,
    default: null
  }
})

const router = useRouter();

function cur(): string{
  return router.currentRoute.value.name as string;
}
</script>

<template>
  <RouterLink v-if="params" :to="{name: name, params: params}">
    <SimpleButton :icon="icon" :text="label" :marked="cur() == name"/>
  </RouterLink>
  <RouterLink v-if="!params" :to="{name: name}">
    <SimpleButton :icon="icon" :text="label" :marked="cur() == name"/>
  </RouterLink>
</template>

<style scoped lang="scss">

</style>