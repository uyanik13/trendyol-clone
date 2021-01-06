import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'


import './assets/scss/main.scss'


import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab,fas,far)




//Vue.config.productionTip = false

var app = createApp(App).use(router,store)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')