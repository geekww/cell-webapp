import Vue from 'vue'
import App from './App'
import router from './router'

// 引入muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import 'muse-ui-message/dist/muse-ui-message.css'
import Message from 'muse-ui-message'

import 'lib-flexible/flexible.js'
import './assets/css/my-mint.css'

Vue.use(MuseUI)
Vue.use(Message)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
