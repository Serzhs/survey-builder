import { createApp } from 'vue'
import router from './router'
import './styles/colors.css'
import './styles/reset.css'
import './styles/base.css'
import App from './App.vue'

createApp(App).use(router).mount('#app')
