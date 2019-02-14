<template>
  <div class="center-box">
    <mu-container>
      <mu-row justify-content="center" style="margin-bottom: 20px;padding-top: 20px">
        <mu-avatar :size="size">
          <img src="../../assets/port.jpg">
        </mu-avatar>
      </mu-row>
      <mu-list>
        <mu-list-item button :ripple="false" class="center-item" @click="updateName()">
          <mu-list-item-action>
            <mu-icon value="create"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>修改用户名</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" class="center-item" @click="updatePassword()">
          <mu-list-item-action>
            <mu-icon value="widgets"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>修改密码</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" class="center-item" @click="updatePassword()">
          <mu-list-item-action>
            <mu-icon value="settings"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>设置</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" class="center-item" @click="logout()">
          <mu-list-item-action>
            <mu-icon value="power_settings_new"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>退出登录</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-container>
  </div>
</template>

<script>
  export default {
    name: 'center',
    data () {
      return {
        size: 75
      }
    },
    methods:{
      updateName:function () {
        this.$prompt('请输入新的用户名', '提示', {
          validator (value) {
            return {
              valid: /^[a-zA-Z][a-zA-Z0-9]{3,15}$/.test(value),
              message: '请输入用户名'
            }
          }
        }).then(({ result, value }) => {
          if (result) {
            this.$toast.message('你输入的邮箱：' + value);
          } else {
            this.$toast.message('点击了取消');
          }
        });
      },
      updatePassword:function () {
        this.$prompt('请输入新的密码', '提示', {
          validator (value) {
            return {
              valid: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(value),
              message: '请输入8-16位数字和字母密码'
            }
          }
        }).then(({ result, value }) => {
          if (result) {
            this.$toast.message('你输入的邮箱：' + value);
          } else {
            this.$toast.message('点击了取消');
          }
        });
      },
      logout:function () {
        this.$confirm('确定要退出？', '提示', {
          type: 'warning'
        }).then(({ result }) => {
          if (result) {
            this.$toast.message('点击了确定');
          } else {
            this.$toast.message('点击了取消');
          }
        });
      }
    }
  }
</script>

<style scoped>
  .center-box{
    background: #ededed;
  }
  .center-item{
    background: #fff;
    margin-bottom: 15px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 5px;
    transition: .5s;
  }
  .center-item:hover{
    background: #e5e5e5;
  }
</style>
