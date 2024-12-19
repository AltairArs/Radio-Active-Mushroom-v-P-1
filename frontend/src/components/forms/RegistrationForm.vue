<script setup lang="ts">
import BaseForm from "../containers/BaseForm.vue";
import Icon from "../info/Icon.vue";
import TextInput from "../inputs/TextInput.vue";
import SlugInput from "../inputs/SlugInput.vue";
import EmailInput from "../inputs/EmailInput.vue";
import SecretInput from "../inputs/SecretInput.vue";
import { ref, nextTick } from 'vue';
import FormInput from "../inputs/form/FormInput.vue";

const ti = ref(null);
const si = ref(null);
const ei = ref(null);
const pi = ref(null);

function initForm(): void{
  ti.value.setDependents([pi]);
  si.value.setDependents([pi]);

  pi.value.setDependencies(new Map([[si, new RegExp('[0-9]')], [ti, new RegExp('[a-z]+')]]));

  pi.value.notifyFromDependency();
}

nextTick(() => {
  initForm();
})
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
      <FormInput ref="ti">
        <TextInput label="Text" @input="(value) => ti.notifyDependents(value)"/>
      </FormInput>
      <FormInput ref="si">
        <SlugInput label="Slug" @input="(value) => si.notifyDependents(value)"/>
      </FormInput>
      <FormInput ref="ei">
        <EmailInput label="Email"/>
      </FormInput>
      <FormInput ref="pi">
        <SecretInput label="Password"/>
      </FormInput>
    </template>
  </BaseForm>
</template>

<style scoped>

</style>