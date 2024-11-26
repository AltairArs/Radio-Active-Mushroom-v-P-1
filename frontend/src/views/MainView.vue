<script setup lang="ts">

import Divider from "../components/Divider.vue";
</script>

<template>
  <div class="main-main">
    <div>
      <h1>DB Drawer</h1>
      <Divider/>
      <h2>
        We offer a simple and easy-to-use solution for database development!
      </h2>
    </div>
    <div>
      <img src="/src/assets/img/demo.png" alt="demo">
    </div>
  </div>
  <div class="main-main">
    <div>
      <h2>Easy generation code</h2>
      <ul>
        <li><h3>for libraries</h3></li>
        <li><h3>for databases</h3></li>
      </ul>
    </div>
    <div>
      <h2>Easy editing in 2 clicks</h2>
    </div>
    <div>
      <h2>Variety of themes</h2>
      <h3>11 possible colours in total</h3>
    </div>
  </div>
</template>

<style scoped>
.main-main{
  display: flex;
  margin-top: calc(var(--margin) * 3);
  background-color: var(--c-bright-medium);
  padding: var(--padding);

  & div{
    margin: auto;
    margin-top: 0;
  }
}
</style>