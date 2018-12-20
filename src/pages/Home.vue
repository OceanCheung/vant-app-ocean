<template>
  <div class="home">
    <!-- 通过state来控制两种组件的切换 -->
    <centerTypeOne v-if="this.$store.state.centerType==1"></centerTypeOne>
    <centerTypeTwo v-if="this.$store.state.centerType==2"></centerTypeTwo>
  </div>
</template>

<script>
//导入首页的相关组件
import CenterTypeOne from "../components/public/home/CenterTypeOne";
import CenterTypeTwo from "../components/public/home/CenterTypeTwo";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    CenterTypeOne,
    CenterTypeTwo
  }
};
</script>

<style lang="less" scoped>
</style>

