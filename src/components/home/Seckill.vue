<template>
  <div v-waterfall-lower="loadMore" waterfall-disabled="disabled" waterfall-offset="400" class="seckill">
    <div @click.stop="goToShop(item.goodsId)" class="seckillList" v-for="(item,index) in seckillDataList" :key="index">
      <div>
        <img :src="item.imageUrl" @click.stop="goToShop(item.goodsId)">
      </div>
      <div class="collageTip">
        <van-row>
          <van-col class="collageTipLeft" span="12">
            <span class="price">¥{{item.price}}</span>
            <span class="num">已拼{{item.num}}件</span>
          </van-col>
          <van-col offset="6" span="6">
            <van-button @click.stop="goToShop(item.goodsId)" type="danger">去拼单</van-button>
          </van-col>
        </van-row>
        <div class="solt"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Waterfall} from 'vant'
  import { Toast } from 'vant'
  import seckillData from "../../../static/home/seckillData"
  export default {
    name: 'Seckill',
    data() {
      return {
        seckillDataList: seckillData,
        disabled: false
      }
    },
    directives: {
      WaterfallLower: Waterfall('lower')
    },
    methods: {
      goToShop() {
        Toast('拼单功能正在研发，敬请期待~');
      },
      loadMore() {
        this.disabled = true;
        setTimeout(() => {
          for (let i = 0; i < 3; i++) {
            this.seckillDataList.push(this.seckillDataList[i]);
          }
          this.disabled = false;
        }, 200);
      }
    }
  }
</script>

<style lang="less" scoped>
  img {
    width: 100%;
  }
  
  .seckill {
    margin-top: 10px;
  }
  
  .solt {
    height: 10px;
    background-color: #e7e7e7;
  }
  
  .seckillList {
    padding-top: 10px;
  }
  
  .collageTip {
    height: 200px;
    .collageTipLeft {
      top: 30px;
      .price {
        color: red;
        font-size: 36px;
      }
      .num {
        color: #adaaaa;
        font-size: 20px;
      }
    }
    .van-button {
      height: 60px;
      width: 160px;
      font-size: 30px;
    }
  }
  
  .van-row {
    padding: 20px;
  }
</style>

