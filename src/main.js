import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
<<<<<<< HEAD
import '@mdi/font/css/materialdesignicons.css'
=======

>>>>>>> dcf2e9c7ad968f06dd67d05b2bce6108ba486ed1

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
    icons: {
      iconfont: 'mdi', 
    },
  })
  app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
