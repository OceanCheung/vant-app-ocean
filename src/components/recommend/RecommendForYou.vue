<template>
  <div class="recommendForYou">
    <van-cell-group>
      <van-row>
        <van-col span="24">
          <img :src="imageUrl_2">
          <div class="title">为你推荐</div>
          </van-col>
      </van-row>
    </van-cell-group>
  </div>
</template>

<script>
  import recoLogoData from "../../../static/recommend/recoLogoData";
  export default {
    name: 'RecommendForYou',
    data() {
      return {
        "imageUrl_2": recoLogoData.imageUrl_2
      }
    }
  }
</script>

<style lang="less" scoped>  
  img {
    width: 60px;
    vertical-align:middle;
  }

  .title{
    display: inline-block;
    font-size: 30px;
    vertical-align: middle;
  }

  .van-col{
    text-align: center;
    padding: 5px;
  }

</style>

