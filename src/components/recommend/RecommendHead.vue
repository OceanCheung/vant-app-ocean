<template>
  <div class="recommendHead">
    <van-nav-bar title="推荐" />
  </div>
</template>

<script>
  export default {
    name: 'RecommendHead',
    data() {
      return {
  
      }
    }
  }
</script>

<style lang="less" scoped>
  .title {
    text-align: center;
    font-size: 36px;
    height: 80px;
    padding-top: 20px;
  }
  
  .line {
    height: 2px;
    background: #e6e6e6;
  }
  
  .van-nav-bar {
    height: 80px;
    padding-top: 20px;
  }
  
  .van-nav-bar__title {
    font-size: 36px;
  }
</style>

