<template>
  <div id="app">
    <MainComponent />
  </div>
</template>

<script>
import MainComponent from "./components/MainComponent";
import "./styles/global.css";

export default {
  name: 'App',
  components: {
    MainComponent
  }
}
</script>

<style>
#app {
  height: 100vh;
  /* background-color: red; */
}
</style>
