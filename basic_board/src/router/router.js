// import { createApp } from 'vue'
// import VueRouter from 'vue-router'

import { createWebHistory, createRouter } from "vue-router";
import App from '../App.vue'
import login from '../components/LoginForm.vue'
import board from '../components/board/BoardList.vue'
import boardDetail from '../components/board/BoardDetail.vue'


// createApp(App).use(VueRouter)

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/login",
    msg: "Login",
    component: login,
  },
  {
    path: "/board",
    name: "Board",
    component: board,
  },
  {
    // path: `/board/${seq}`,
    path: `/board/seq`,
    name: "BoardDetail",
    component: boardDetail,
    props: true,
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
