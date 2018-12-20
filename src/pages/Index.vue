<template>
  <div class="index">
    <navBar></navBar>
    <router-view />
    <tabbar></tabbar>
  </div>
</template>

<script>
import NavBar from '../components/public/NavBar'
import Tabbar from '../components/public/Tabbar'
export default {
  name: "Index",
  data() {
    return {

    };
  },
  components:{
    Tabbar,NavBar
  }
};
</script>

<style lang="less" scoped>
</style>

