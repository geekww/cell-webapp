<template>
    <div class="center-box">
      <mu-container>
        <mu-row justify-content="center" style="margin-bottom: 20px">
          <mu-avatar :size="size">
            <!--<img src="../../assets/images/uicon.jpg">-->
          </mu-avatar>
        </mu-row>
        <mu-list>
          <mu-list-item button :ripple="false" class="center-item">
            <mu-list-item-action>
              <mu-icon value="inbox"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>修改用户名</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" class="center-item">
            <mu-list-item-action>
              <mu-icon value="inbox"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>修改用户名</mu-list-item-title>
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
        size: 56
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
