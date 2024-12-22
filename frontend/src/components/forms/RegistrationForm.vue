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
      <EmailInput label="Email" is-necessary/>
      <SlugInput label="Ник" is-necessary/>
      <SecretInput label="Пароль" is-necessary/>
      <SecretInput label="Повторите пароль" is-necessary/>
      <TextInput label="Имя"/>
      <TextInput label="Фамилия"/>
    </template>
  </BaseForm>
</template>

<style scoped>

</style>