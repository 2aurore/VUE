<template>
  <!-- MODAL popup layout -->
  <div class="black-bg" v-if="joinStatus">
    <div class="white-bg">
      <div style="width: 80%;">
        <h2>JOIN US</h2>
        <ul>
          <li>email <input type="email" v-model="email" /></li>
          <li>name <input v-model="name" /></li>
          <li>password <input type="password" /></li>
          <li>password check <input type="password" /></li>
          <li>
            {{ passwordCheck }} <v-btn small @click="onCheck">check</v-btn>
          </li>
          <li>city <input v-model="city" /></li>
          <li>street <input v-model="street" /></li>
          <li>post code <input v-model="zipcode" /></li>
        </ul>
        <v-btn large @click="joinStatus = false" class="vBtn">CANCEL</v-btn>
        <v-btn large @click="onClickJoin" class="vBtn">SUBMIT</v-btn>
      </div>
    </div>
  </div>

  <!-- default login page layout -->
  <div class="login">
    <div>
      <h1>{{ msg }}</h1>
      <div>
        <ul style="text-align: center">
          <li>
            <input type="email" v-model="email" placeholder="ID(E-mail)" />
          </li>
          <li>
            <input type="password" v-model="password" placeholder="Password" />
          </li>
        </ul>
        <v-btn large @click="onClickLogin" class="vBtn">GO</v-btn>
        <v-btn large @click="joinStatus = true" class="vBtn">Join us</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    joinStatus: false,
    passwordCheck: "",
    email: "",
    password: "",
    name: "",
    city: "",
    street: "",
    zipcode: "",
  }),
  methods: {
    // 로그인 api 실행
    onClickLogin() {
      //console.log("onClickLogin press");
      console.log(this.$data);
      // const URL = '/auth/login';
      const URL = "https://jssampletest.herokuapp.com/api/auth/login";

      // let callUrl = apiBaseUrl + URL;
      // console.log(callUrl);
      this.$axios.get(URL, [
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
          data: this.$data,
        },
      ]);
    },
    // 회원가입 data 전달
    onClickJoin() {
      console.log(this.$data);
    },
    // password 중복체크
    onCheck() {},
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  box-sizing: border-box;
  width: 100%;
}

.black-bg {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  background-color: white;
  /* width: 60%; */
  border-radius: 8px;
  padding: 20px;
}

.login {
  position: static;
  height: 100%;
}

.vBtn {
  margin: 20px;
}

ul {
  list-style-type: none;
  margin: auto;
  padding: 0;
  text-align: right;
  width: 50%;
}

li {
  display: block;
  margin: 10px 0;
  list-style: none;
}
</style>
