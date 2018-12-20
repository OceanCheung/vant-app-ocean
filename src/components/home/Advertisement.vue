<template>
  <div class="advertisement">
    <div class="solt"></div>
    <img :src="image">
    <div class="solt"></div>
  </div>
</template>

<script>
import adverData from '../../../static/home/adverData'
export default {
  name: 'Advertisement',
  data () {
    return {
      image:adverData.imageUrl
    }
  },
  methods:{
      getAdverData(){
        // this.$api.getAdverData().then(res => {
        //     this.image = res.data.data.imageUrl;
        //   }).catch(err => {
        //     console.error('错误', err);
        //   })
      }
    },
    created(){
      this.getAdverData();
    }
}
</script>

<style lang="less" scoped>
  img{
    width: 100%;
  }
  .solt{
    height: 10px;
    background: #e7e7e7;
  }
</style>

