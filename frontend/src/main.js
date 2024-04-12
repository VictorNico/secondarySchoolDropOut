import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/styles.scss'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
