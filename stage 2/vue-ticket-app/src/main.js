import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import Home from "./views/Home.vue"
import Login from "./views/Login.vue"
import Signup from "./views/Signup.vue"
import Dashboard from "./views/Dashboard.vue"
import "./style.css"

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/dashboard", component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount("#app")
