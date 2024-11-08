import { PiniaColada } from '@pinia/colada'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './app.vue'
import { router } from './libs/router/router'
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

app.mount('#app')
