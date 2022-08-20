<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-btn @click="pushEvent" >goooooo</v-btn>
    <v-btn @click="getData" >get data</v-btn>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    pushEvent: function () {
      this.$emit('show-log');
    },
    getData: function() {
      this.$http.get('https://raw.githunusercontent.com/joshua1988/doit-vuejs/master/data/demo.json').then(function(response) {
        console.log(response);
        console.log(JSON.parse(response));
      })
    },
    // beforeCreate() {
    //   console.log("before create HelloWorld.vue");
    // },
    // created() {
    //   console.log("create HelloWorld.vue");
    // },
    // mounted() {
    //   console.log("mounted HelloWorld.vue");
    // },
    // updated() {
    //   console.log("updated HelloWorld.vue");
    // },
  },
};
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
