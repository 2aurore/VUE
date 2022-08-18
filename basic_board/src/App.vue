<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <LoginForm msg="LOGIN"></LoginForm> -->
  <BoardList msg="BOARD"></BoardList>
  <!-- <BoardDetail msg="BOARD"></BoardDetail> -->
</template>

<script>
// import LoginForm from './components/LoginForm.vue'
import BoardList from './components/board/BoardList.vue'
// import BoardDetail from './components/board/BoardDetail.vue'

export default {
  name: 'App',
  components: {
    // LoginForm
    BoardList
    // BoardDetail
}
}
</script>

<style>
body{
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
