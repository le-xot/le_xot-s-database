import { createApp } from 'vue'

import App from './app.vue'
import { router } from './libs/router.ts'

import './styles/style.css'

createApp(App).use(router).mount('#app')
