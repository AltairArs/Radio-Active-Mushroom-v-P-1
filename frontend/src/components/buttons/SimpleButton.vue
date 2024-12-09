<script setup lang="ts">
import Container from "../containers/Container.vue";

defineProps({
  marked: {
    type: Boolean,
    default: null,
    required: false
  }
});
defineEmits<{
  click: []
}>();
</script>

<template>
  <Container horizontal sub-container-type="INPUT" padding border-radius border change-theme-on-hover margin-left="1" change-theme-on-click @click="$emit('click')">
    <slot name="icon" v-if="$slots.icon"></slot>
    <slot name="text" v-if="$slots.text"></slot>
  </Container>
</template>

<style scoped>

</style>