<template>
  <!-- MODAL popup layout -->
  <div class="black-bg" v-if="joinStatus">
    <div class="white-bg">
      <div style="width: 75%">
        <h2>JOIN US</h2>
        <ul>
          <li>email <input type="email" v-model="email" /></li>
          <li>name <input v-model="name" /></li>
          <li>password <input type="password" v-model="password" /></li>
          <li><input type="password" v-model="passwordCheck" /></li>
          <li>
            <span style="font-size: small">{{ pwCheckAlert }}</span>
            <v-btn small @click="onPwSecurityCheck" class="ckBtn">check</v-btn>
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
            <input type="email" v-model="email" placeholder="ID: example@email.com" />
          </li>
          <li>
            <input type="password" v-model="password" placeholder="Password" />
          </li>
        </ul>
        <v-btn large @click="joinStatus = true" class="vBtn">SIGN UP</v-btn>
        <v-btn large @click="onClickLogin" class="vBtn">SIGN IN</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    joinStatus: false,
    email: "",
    password: "",
    passwordCheck: "",
    pwSecurityStatus: false,
    pwCheckAlert: "",
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
      const URL = "https://jssampletest.herokuapp.com/api";

      // let callUrl = apiBaseUrl + URL;
      // console.log(callUrl);
      this.$axios.get(URL, [
        { 
          path: "/auth/login",
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
      // console.log(this.$data);
      if (!this.pwSecurityStatus) {
        alert("비밀번호 중복체크를 확인해주세요.");
      } else {
        //회원가입 API 호출
      }
    },
    // password 중복체크
    onPwSecurityCheck() {
      let pw_1 = this.$data.password;
      let pw_2 = this.$data.passwordCheck;
      if (pw_1 == "" && pw_2 == "") {
        this.$data.pwCheckAlert = "비밀번호를 입력하세요.";
      } else {
        if (pw_1 == pw_2) {
          this.$data.pwCheckAlert = "비밀번호가 일치합니다.";
          this.pwSecurityStatus = true;
          console.log("일치:", this.pwSecurityStatus);
        } else {
          this.$data.pwCheckAlert = "비밀번호가 일치하지 않습니다.";
          this.pwSecurityStatus = false;
          console.log("불일치:", this.pwSecurityStatus);
        }
      }
    },
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

.ckBtn {
  margin-left: 5px;
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
