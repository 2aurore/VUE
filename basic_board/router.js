import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../basic_board/src/App.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/login",
    name: "LoginForm",
    component: LoginForm,
  },
  {
    path: "/board",
    name: "BoardList",
    component: BoardList,
  },
  {
    path: "/board/{seq}",
    name: "BoardDetail",
    component: BoardDetail,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router