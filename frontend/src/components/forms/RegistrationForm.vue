<script setup lang="ts">
import BaseForm from "../containers/BaseForm.vue";
import Icon from "../info/Icon.vue";
import TextInput from "../inputs/form/TextInput.vue";
</script>

<template>
  <BaseForm>
    <template #buttonIcon>
      <Icon name="arrow-right-to-bracket"/>
    </template>
    <template #titleText>
      <h2>Регистрация</h2>
    </template>
    <template #buttonText>
      Зарегистрироваться
    </template>
    <template #inputs>
      <TextInput/>
      <TextInput initial-value="initial"/>
      <TextInput label="Text" is-necessary/>
      <TextInput label="Text"/>
    </template>
  </BaseForm>
</template>

<style scoped>

</style>