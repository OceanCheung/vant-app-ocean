<template>
  <div class="carousel">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in imageList" :key="item.id">
        <img :src="item.imageUrl">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
//import carouselData from '../../../static/home/carouselData'
  export default {
    name: 'Carousel',
    data() {
      return {
        imageList:{}
      }
    },
    methods:{
      listCarousel(){
        this.$api.listCarousel().then(res => {
            let array = res.data.data;
            this.imageList = array;
          }).catch(err => {
            console.error('错误', err);
          })
      }
    },
    created(){
      this.listCarousel();
    }
  }
</script>

<style lang="less" scoped>
  .van-swipe-item{
    height: 300px !important;
  }
  img{
    width: 100%;
  }
</style>

