<template>
  <div id="app">
    <app-home></app-home>
  </div>
</template>
<script>
import AppHome from "./components/pages/Home/Home";
export default {
  name: "App",
  components: {
    AppHome: AppHome
  }
};
</script>

<style>
</style>