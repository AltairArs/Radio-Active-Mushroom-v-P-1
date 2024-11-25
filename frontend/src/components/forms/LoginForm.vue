<script setup lang="ts">
import Container from "../containers/Container.vue";
import TextInput from "../inputs/TextInput.vue";
import ExternalLabel from "../info/ExternalLabel.vue";
import Required from "../info/Required.vue";
import Divider from "../Divider.vue";
import PasswordInput from "../inputs/PasswordInput.vue";
import SimpleButton from "../buttons/SimpleButton.vue";
import FormButtons from "../containers/FormButtons.vue";
import {ref} from "vue";

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
  <Container centered :key="componentKey">
    <Required/>
    <Divider/>

    <ExternalLabel text="Email or Nickname"/>
    <TextInput labeled placeholder="Email or Nickname" marked/>

    <ExternalLabel text="Password"/>
    <PasswordInput labeled placeholder="Password" marked/>

    <Divider/>
    <FormButtons>
      <SimpleButton icon="back" reset text="Reset" @click="update"/>
      <SimpleButton icon="login" text="Login"/>
    </FormButtons>
  </Container>
</template>

<style scoped lang="scss">



</style>