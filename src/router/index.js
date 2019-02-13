import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

import index from '../components/index/index.vue'
import center from '../components/center/center.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/index/index',
          name: '首页',
          component: index
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
