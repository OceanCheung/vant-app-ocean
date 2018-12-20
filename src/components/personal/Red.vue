<template>
  <div class="red">
    <div class="line"></div>
    <div class="redFooter">
      <div class="imgDiv" v-for="(item,index) in imageList" :key="index">
        <img :src="item.imageUrl">
      </div>
    </div>
  </div>
</template>

<script>
  import redData from '../../../static/personal/redData';
  export default {
    name: 'Red',
    data() {
      return {
        imageList: redData
      }
    }
  }
</script>

<style lang="less" scoped>
  .red {
    .redFooter {
      display: flex;
      .imgDiv {
        img {
          width: 100%;
        }
      }
    }
    .line {
      margin-top: 30px;
      width: 100%;
      height: 2px;
      background: #e6e6e6
    }
  }
</style>

