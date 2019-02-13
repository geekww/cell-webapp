<template>
  <div class="muse-app">
    <mu-appbar class="header" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      丸子记忆大师
    </mu-appbar>
    <router-view></router-view>
    <mu-bottom-nav class="footer">
      <router-link to='index'>
        <mu-bottom-nav-item title="首页" icon="home" ></mu-bottom-nav-item>
      </router-link>
      <router-link to='favo'>
        <mu-bottom-nav-item title="我的收藏" icon="favorite"></mu-bottom-nav-item>
      </router-link>
      <router-link to='center'>
        <mu-bottom-nav-item title="个人中心" icon="verified_user"></mu-bottom-nav-item>
      </router-link>
    </mu-bottom-nav>
  </div>
</template>

<script>

  import Header from './Header'
  import Footer from './Footer'

  export default {
    name: 'Main',
    components:{Header,Footer},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{

    }
  }
</script>
<style scoped>
  .header{
    width: 100%;
  }
  .footer{
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  .footer a{
    color: rgba(0,0,0,.54);
    margin: 0 20px;
  }
</style>
