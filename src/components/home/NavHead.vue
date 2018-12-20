<template>
  <div class="navHead">
    <!-- 导航组件 -->
    <van-tabs @click="setCenterType">
      <van-tab v-for="(item,index) in navbarData" :key="index" :title="item.name">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import navbarData from '../../../static/home/navbarData'
  export default {
    name: "NavHead",
    data() {
      return {
        _this: this,
        navbarData: [],
      };
    },
    methods: {
      //改变store的centerType类型 
      setCenterType(index, name) {
        //console.log(this.$store.state.centerType);
        if (name == "热门") {
          this.$store.commit("setCenterType", {
            "type": 1
          });
        } else {
          this.$store.commit("setCenterType", {
            "type": 2
          });
        }
        console.log(this.$store.state.centerType);
      }
    },
    created() {
      this.navbarData = navbarData;
    }
  };
</script>

<style lang="less" scoped>
  //navbar直接在vue里面写css没有效果 直接改源码 看html引入的css路径
  .van-tabs--line .van-tabs__wrap{
    position:fixed !important;
  }
</style>

