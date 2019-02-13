import Vue from 'vue'
import App from './App'
import router from './router'

// 引入muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import 'lib-flexible/flexible.js'

Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
