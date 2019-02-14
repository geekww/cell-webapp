import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

import message from '../components/message/index.vue'
import cell from '../components/cell/index.vue'
import discover from '../components/discover/index.vue'
import center from '../components/center/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/message/index',
          name: '消息',
          component: message
        },
        {
          path: '/cell/index',
          name: '背单词',
          component: cell
        },
        {
          path: '/discover/index',
          name: '发现',
          component: discover
        },
        {
          path: '/center/index',
          name: '个人中心',
          component: center
        },
      ]
    }
  ]
})
