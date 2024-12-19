<script setup lang="ts">
import BaseForm from "../containers/BaseForm.vue";
import Icon from "../info/Icon.vue";
import TextInput from "../inputs/TextInput.vue";
import SlugInput from "../inputs/SlugInput.vue";
import EmailInput from "../inputs/EmailInput.vue";
import SecretInput from "../inputs/SecretInput.vue";
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
      <TextInput label="Text" is-necessary/>
      <TextInput label="Text"/>
      <SlugInput label="Slug" is-necessary/>
      <SlugInput label="Slug"/>
      <EmailInput label="Email" is-necessary/>
      <EmailInput label="Email"/>
      <SecretInput label="Password" is-necessary/>
      <SecretInput label="Password"/>
    </template>
  </BaseForm>
</template>

<style scoped>

</style>