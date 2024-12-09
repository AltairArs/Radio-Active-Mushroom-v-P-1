<script setup lang="ts">
import Container from "../containers/Container.vue";
import Divider from "../info/Divider.vue";
import Icon from "../info/Icon.vue";
</script>

<template>
  <Container padding container-type="AUTO" border-radius margin-bottom="1">

    <Container container-type="AUTO" padding border-radius border>
      <h1>Radio Active Mushroom</h1>
      <Divider/>
      <h2>
        We offer a simple and easy-to-use solution for database development!
      </h2>
    </Container>

  </Container>

  <Container container-type="AUTO" border-radius padding horizontal>

    <Container container-type="AUTO" padding border-radius border self-align="top">

      <Container horizontal>
        <Icon name="bolt"/>
        <h2>Easy generation code</h2>
      </Container>

      <Divider/>

      <Container horizontal margin-bottom="1">
        <Icon name="book"/>
        <h3>for libraries</h3>
      </Container>

      <Container horizontal>
        <Icon name="database"/>
        <h3>for databases</h3>
      </Container>

    </Container>

    <Container container-type="AUTO" padding border-radius border self-align="top">

      <Container horizontal>
        <Icon name="pen"/>
        <h2>Easy editing in 2 clicks</h2>
      </Container>

      <Divider/>

    </Container>

    <Container container-type="AUTO" padding border-radius border self-align="top">

      <Container horizontal>
        <Icon name="paintbrush"/>
        <h2>Variety of themes</h2>
      </Container>

      <Divider/>

      <h3>11 possible colours in total</h3>
    </Container>

  </Container>
</template>

<style scoped>

</style>