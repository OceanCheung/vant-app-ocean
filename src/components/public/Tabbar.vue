<template>
  <div class="tabbar">
    <van-tabbar class="footTabbar" v-model="active">
      <van-tabbar-item @click="change" v-for="(item,index) in tabbarRouter" :key="index" :to="{ name: item.name }" :icon="item.icon">
        {{item.text}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'Tabbar',
    data() {
      return {
        active: 0,
        tabbarRouter: []
      };
    },
    created() {
      let _this = this;
      //console.log(this.$router.options.routes[1].children);
      _this.tabbarRouter = _this.$router.options.routes[1].children;
      // for(let i=0;i<_this.tabbarRouter.length;i++){
      //   console.log(_this.tabbarRouter[i].icon);
      // }
    },
    methods:{
      change(){
        this.$store.commit("setNavType", {
            "type": this.active+1
          });
          console.log(this.$store.state.navType)
      }
    }
  
  
  }
</script>

<style lang="less" scoped>
  .footTabbar {
    height: 100px;
    padding: 10px;
    z-index: 1;
  }
  
  a,
  .van-tabbar-item {
    color: black;
  }
  
  .van-tabbar-item--active,
  .router-link-exact-active {
    color: red;
  }
</style>

