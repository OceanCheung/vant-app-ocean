<template>
  <div class="searchInput">
    <van-search placeholder="请输入商品名称" v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data () {
    return {
      value:""
    }
  }
}
</script>

<style lang="less" scoped>
  .van-search{
    height: 80px;
    background:#ffffff !important;
  }

</style>

