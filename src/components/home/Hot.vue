<template>
  <div class="hot">
    <van-swipe>
      <van-swipe-item v-for="(item,index) in imageList" :key="index">
        <van-row v-for="(item,index) in item['page-'+(index+1)]" :key="index">
          <van-col v-for="(item,index) in item" :key="index" span="6">
            <img :src="item.imageUrl">
          </van-col>
        </van-row>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import hotData from '../../../static/home/hotData'
  export default {
    name: 'Hot',
    data() {
      return {
        imageList: hotData
      }
    },
    created() {
      //三重for循环
      hotData.forEach((item, index) => {
        //console.log(item['page-'+(index+1)])
        item['page-' + (index + 1)].forEach((item, index) => {
          //console.log(item)
          item.forEach((item, index) => {
            //console.log(item)
            //console.log(item.imageUrl)
            //console.log(index)
          })
        });
      });
    }
  }
</script>

<style lang="less" scoped>
  .van-swipe-item {
    height: 300px !important;
  }
  
  .van-row {
    height: 150px;
    padding: 0px;
    text-align: center;
  }
  
  img {
    width: 135px;
  }
  
  .van-swipe__indicators {
    margin-left: 85% !important;
  }
  
  .van-swipe-item .van-swipe__indicator {
    border-radius: none;
    width: 80px;
    height: 1px;
  }
</style>

