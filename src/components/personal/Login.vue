<template>
  <div class="login">
    <div class="loginChild">
      <img :src="image">
    </div>
    <div class="loginChildTwo">
      <van-button class="btn" type="default">点击登录</van-button>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
  import headData from '../../../static/personal/headData'
  export default {
    name: 'Login',
    data() {
      return {
        image:headData.imageUrl
      }
    }
  }
</script>

<style lang="less" scoped>
  .login{
    display: flex;
    flex-direction: row;
    padding: 20px;
    flex-wrap: wrap;
    .loginChild{
        width: 20%;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .loginChildTwo{
      padding-left: 30px;
      padding-top: 50px;
      justify-content: center;
       align-items: center;
    }
    .line{
      margin-top: 30px;
      width:100%;
      height: 2px;
      background: #e6e6e6
    }
  }
</style>

