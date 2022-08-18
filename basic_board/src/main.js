import { createApp } from 'vue'
import Vuex from 'vuex'
// import router from './router'
// import Vuetiy from 'vuetify'
import axios from 'axios'
import App from './App.vue'


createApp(App).mount('#app')
createApp(App).use(Vuex)
createApp.prototype.$axios = axios



