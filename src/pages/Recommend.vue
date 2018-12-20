<template>
  <div class="recommend">
    <recommendNew></recommendNew>
    <recommendForYou></recommendForYou>
    <recommendList></recommendList>
  </div>
</template>

<script>
  import RecommendNew from '../components/recommend/RecommendNew'
  import RecommendForYou from '../components/recommend/RecommendForYou'
  import RecommendList from '../components/recommend/RecommendList'
  export default {
    name: 'Recommend',
    data() {
      return {
        
      }
    },
    components:{
      RecommendNew,RecommendList,RecommendForYou
    }
  }
</script>

<style lang="less" scoped>
  
</style>

