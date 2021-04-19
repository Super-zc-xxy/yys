<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import app1 from './components/app1.vue'
import home from './components/home.vue'
export default {
  name: 'App',

  components:{
    HelloWorld,
    app1,
    home
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  margin: 0;
  padding: 0;
}
</style>
