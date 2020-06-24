<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
}
</script>

<style>
@import './assets/fonts/iconfont.css';
html,
body {
  min-width: 1000px;
}
@media screen and (max-width: 1200px) {
  .view-body-cnt {
    width: 1000px;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  background: #f3f3f3;
}
</style>
