<script setup lang="ts">
import BaseForm from "../containers/BaseForm.vue";
import Icon from "../info/Icon.vue";
import TextInput from "../inputs/TextInput.vue";
import SlugInput from "../inputs/SlugInput.vue";
import EmailInput from "../inputs/EmailInput.vue";
import SecretInput from "../inputs/SecretInput.vue";
import { ref } from 'vue';
import ListSimpleErrorBlocks from "../info/ListSimpleErrorBlocks.vue";

const inputs = {
  email: {
    ref: ref(null),
    errors: []
  },
  nickname: {
    ref: ref(null),
    errors: []
  },
  password: {
    ref: ref(null),
    errors: []
  },
  confirmPassword: {
    ref: ref(null),
    errors: []
  },
  name: {
    ref: ref(null),
    errors: []
  },
  surname: {
    ref: ref(null),
    errors: []
  }
}

function submit(){
  console.log(inputs);
  if (inputs.password.ref.value.getValue() != inputs.confirmPassword.ref.value.getValue()){
    inputs.confirmPassword.errors = ["Пароли должны совпадать"];
  } else {
    inputs.confirmPassword.errors = [];
  }
}

</script>

<template>
  <BaseForm @submit="submit">
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
      <ListSimpleErrorBlocks :errors="inputs.email.errors"/>

      <SlugInput label="Ник" is-necessary/>
      <ListSimpleErrorBlocks :errors="inputs.nickname.errors"/>

      <SecretInput label="Пароль" is-necessary/>
      <ListSimpleErrorBlocks :errors="inputs.password.errors"/>

      <SecretInput label="Повторите пароль" is-necessary/>
      <ListSimpleErrorBlocks :errors="inputs.confirmPassword.errors"/>

      <TextInput label="Имя"/>
      <ListSimpleErrorBlocks :errors="inputs.name.errors"/>

      <TextInput label="Фамилия"/>
      <ListSimpleErrorBlocks :errors="inputs.surname.errors"/>
    </template>
  </BaseForm>
</template>

<style scoped>

</style>