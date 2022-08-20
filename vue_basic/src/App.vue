<template>
  <!-- root is app.vue -->
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="props.msg" v-on:show-log="printText" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// app.vue가 create 되기 전에 innerVue 생성
//const innerVue = {
//  components: HelloWorld,
//}
//console.log(innerVue);

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    printText: function() {
      console.log("!!go to parent!!");
    },
  },
  // beforeCreate() {
  //   console.log("before create App.vue");
  // },
  // created() {
  //   console.log("create App.vue");
  // },
  // mounted() {
  //   console.log("mounted App.vue");
  // },
  // updated() {
  //   console.log("updated App.vue");
  // },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
