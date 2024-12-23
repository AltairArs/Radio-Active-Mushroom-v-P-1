<script setup lang="ts">
import BaseForm from "../containers/BaseForm.vue";
import Icon from "../info/Icon.vue";
import TextInput from "../inputs/TextInput.vue";
import SlugInput from "../inputs/SlugInput.vue";
import EmailInput from "../inputs/EmailInput.vue";
import SecretInput from "../inputs/SecretInput.vue";
import { ref } from 'vue';

const inputs = {
  email: ref(null),
  nickname: ref(null),
  password: ref(null),
  confirmPassword: ref(null),
  name: ref(null),
  surname: ref(null)
}

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
      <EmailInput :ref="inputs.email" label="Email" is-necessary/>
      <SlugInput :ref="inputs.nickname" label="Ник" is-necessary/>
      <SecretInput :ref="inputs.password" label="Пароль" is-necessary/>
      <SecretInput :ref="inputs.confirmPassword" label="Повторите пароль" is-necessary/>
      <TextInput :ref="inputs.name" label="Имя"/>
      <TextInput :ref="inputs.surname" label="Фамилия"/>
    </template>
  </BaseForm>
</template>

<style scoped>

</style>