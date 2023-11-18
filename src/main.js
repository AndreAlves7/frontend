import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import config from './utils/config'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

const apiDomain = config.baseAPI
// const apiDomain = import.meta.env.VITE_API_DOMAIN
// const wsConnection = import.meta.env.VITE_WS_CONNECTION

// app.provide('socket', io(wsConnection))

app.provide(
  'axios',
  axios.create({
    baseURL: apiDomain,
    headers: {
      'Content-type': 'application/json'
    }
  })
)
app.provide('serverBaseUrl', apiDomain)

app.mount('#app')