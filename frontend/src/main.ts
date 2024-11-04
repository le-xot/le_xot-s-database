import { createApp } from 'vue'

import App from './app.vue'
import { router } from './libs/router/router'

import './styles/main.css'

createApp(App).use(router).mount('#app')
