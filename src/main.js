import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router/router.js'


const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
