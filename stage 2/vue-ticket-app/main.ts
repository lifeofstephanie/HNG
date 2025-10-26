import { createApp } from "vue"
import App from "./app.vue"
import router from "./router"
import "./app/globals.css"

const app = createApp(App)
app.use(router)
app.mount("#app")
