<template>
  <div class="muse-app">
    <mu-appbar class="header" color="teal">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      医贝单词
    </mu-appbar>
    <router-view></router-view>
    <mu-bottom-nav class="footer">
      <router-link to='/message/index'>
        <mu-bottom-nav-item title="消息" icon="question_answer"></mu-bottom-nav-item>
      </router-link>
      <router-link to='/cell/index'>
        <mu-bottom-nav-item title="背单词" icon="trending_up" ></mu-bottom-nav-item>
      </router-link>
      <router-link to='/discover/index'>
        <mu-bottom-nav-item title="发现" icon="explore"></mu-bottom-nav-item>
      </router-link>
      <router-link to='/center/index'>
        <mu-bottom-nav-item title="我的" icon="face"></mu-bottom-nav-item>
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
    mounted:function(){
      this.$nextTick(function(){
        // 初始化路由
        // this.$router.push({path:'index')};
      });
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
    margin: 0 5px;
  }
</style>
