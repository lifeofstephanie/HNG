import { createRouter, createWebHistory } from "vue-router"
import Landing from "./pages/Landing.vue"
import Login from "./pages/Login.vue"
import Signup from "./pages/Signup.vue"
import Dashboard from "./pages/Dashboard.vue"
import Tickets from "./pages/Tickets.vue"

const routes = [
  { path: "/", component: Landing },
  { path: "/auth/login", component: Login },
  { path: "/auth/signup", component: Signup },
  { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
  { path: "/tickets", component: Tickets, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const session = localStorage.getItem("ticketapp_session")
  if (to.meta.requiresAuth && !session) {
    next("/auth/login")
  } else {
    next()
  }
})

export default router
