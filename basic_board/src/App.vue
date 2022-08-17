<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <LoginForm msg="LOGIN"></LoginForm>
  <!-- <JoinForm msg="JOIN US"></JoinForm> -->
  <BoardList msg="BOARD"></BoardList>
</template>

<script>
// import LoginForm from './components/LoginForm.vue'
import BoardList from './components/board/BoardList.vue'

export default {
  name: 'App',
  components: {
  //   LoginForm
    BoardList
}
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
