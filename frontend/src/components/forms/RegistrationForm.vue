<script setup lang="ts">

import {ref} from "vue";
import Container from "../containers/Container.vue";
import Required from "../info/Required.vue";
import Divider from "../Divider.vue";
import FormButtons from "../containers/FormButtons.vue";
import SimpleButton from "../buttons/SimpleButton.vue";
import ExternalLabel from "../info/ExternalLabel.vue";
import TextInput from "../inputs/TextInput.vue";
import PasswordInput from "../inputs/PasswordInput.vue";

const componentKey = ref(0);

function update(): void{
  if (componentKey.value == 0){
    componentKey.value = 1;
  } else {
    componentKey.value = 0;
  }
}
</script>

<template>
  <Container :key="componentKey" centered>
    <Required/>
    <Divider/>

    <ExternalLabel text="Email"/>
    <TextInput labeled placeholder="Email" marked/>

    <ExternalLabel text="Nickname"/>
    <TextInput labeled marked placeholder="Nickname"/>

    <ExternalLabel text="Name"/>
    <TextInput labeled placeholder="Name"/>

    <ExternalLabel text="Surname"/>
    <TextInput labeled placeholder="Surname"/>

    <ExternalLabel text="Password"/>
    <PasswordInput labeled marked placeholder="Password"/>

    <ExternalLabel text="Retype password"/>
    <PasswordInput labeled marked placeholder="Retype password"/>

    <Divider/>
    <FormButtons>
      <SimpleButton icon="back" reset text="Reset" @click="update"/>
      <SimpleButton icon="login" text="Register"/>
    </FormButtons>
  </Container>
</template>

<style scoped lang="scss">

</style>