<template>
  <div id="common">
    <router-link to="/login">login</router-link>
    <router-link to="/board">board</router-link>
  </div>
  <router-view></router-view>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <LoginForm msg="LOGIN"></LoginForm> -->
  <!-- <BoardList msg="BOARD"></BoardList> -->
  <!-- <BoardDetail msg="BOARD"></BoardDetail> -->
</template>

<script>
// import LoginForm from './components/LoginForm.vue'
// import BoardList from "./components/board/BoardList.vue";
// import BoardDetail f d/BoardDetail.vue'
import router from "./router/router.js";

export default {
  router,
  name: "App",
  components: {
  //   LoginForm,
    // BoardList,
  //   BoardDetail,
  },
  // computed: {
  //   r() {
  //     return this.$route.params;
  //   },
  // },
  methods: {
    onclick() {
      console.log("!!!! test");
    },
    
  },
};
</script>

<style>
body {
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>