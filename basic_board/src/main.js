// Vue 3 은 New Vue() 생성자 대신 createApp로 Vue를 생성한다. 
import { createApp } from 'vue'
import Vuex from 'vuex'
// import Vuetiy from 'vuetify'
// import axios from 'axios'
import router from './router/router.js'
import App from './App.vue'


const app = createApp(App)
app.use(Vuex)
app.use(router)
// app.use(axios)
app.mount('#app')
// app.prototype.$axios = axios



