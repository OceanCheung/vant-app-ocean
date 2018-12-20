<template>
  <div class="order">
   <div class="orderHead">
     <div class="myOrder">我的订单</div>
     <div class="orderAll">查看全部</div>
   </div>
   <div class="orderFooter">
     <div class="imgDiv" v-for="(item,index) in imageList" :key="index">
       <img :src="item.imageUrl">
     </div>
   </div>
  </div>
</template>

<script>
  import orderData from '../../../static/personal/orderData';
  export default {
    name: 'Order',
    data() {
      return {
        imageList:orderData
      }
    }
  }
</script>

<style lang="less" scoped>
  .order{
    .orderHead{
      display: flex;
      justify-content: space-between;//两端对齐
      .myOrder{
        font-size: 32px;
        padding-left: 20px;
      }
      .orderAll{
        font-size: 24px;
        color: #919192;
        padding-right: 20px;
      }
    }
    .orderFooter{
      display: flex;
      .imgDiv{
        img{
          width: 100%;
        }
      }
    }
  }
</style>

