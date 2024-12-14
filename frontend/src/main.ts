import { router } from '@/lib/router/router'
import { PiniaColada } from '@pinia/colada'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './app.vue'
import './assets/index.css'
import './styles/main.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

PiniaColada(app, {
  pinia,
  refetchOnMount: true,
  refetchOnWindowFocus: false,
  // gcTime: 1000 * 60 * 5,
  // staleTime: 1000 * 60 * 1,
})

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.mount('#app')
