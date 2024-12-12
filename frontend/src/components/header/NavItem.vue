<script setup lang="ts">
import {RouterLink, useRouter} from "vue-router";

defineProps({
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

const router = useRouter();

function cur(): string{
  return router.currentRoute.value.name as string;
}
cur();
</script>

<template>
  <RouterLink :to="{name: name, params: params}">
  </RouterLink>
</template>

<style scoped>

</style>