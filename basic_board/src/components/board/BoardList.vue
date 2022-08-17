<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-for="(title, boardId) in boardlist" :key="boardId">
      <a @click="openBoardDetail">{{title}}</a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'BoardList',
  data() {
    return{
      boardlist: [1,2,3,]
    }
  },
  methods: {
    openBoardDetail(){}
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
