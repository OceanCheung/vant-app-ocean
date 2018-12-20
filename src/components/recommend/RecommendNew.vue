<template>
  <div class="recommendNew">
    <van-cell-group>
      <van-row>
        <van-col span="3"><img id="imgNew" :src="imageUrl_1"></van-col>
        <van-col span="21"><van-cell title="新品" is-link /></van-col>
      </van-row>
    </van-cell-group>
  </div>
</template>

<script>
  import recoLogoData from "../../../static/recommend/recoLogoData";
  export default {
    name: 'RecommendNew',
    data() {
      return {
        "imageUrl_1": recoLogoData.imageUrl_1
      }
    }
  }
</script>

<style lang="less" scoped>
  .van-cell {
    padding: 40px;
    font-size: 32px;
    margin-left: -15px;
     vertical-align: middle;
    // color: yellow;
  }
  
  .van-icon {
    color: red;
    font-size: 80px;
  }
  
  #imgNew {
    width: 60px !important;
    // padding: 20px !important;
    margin-top: 16px;
    margin-left: 20px;
    vertical-align: middle;
  }
</style>

