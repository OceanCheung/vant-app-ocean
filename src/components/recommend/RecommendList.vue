<template>
  <div v-waterfall-lower="loadMore" waterfall-disabled="disabled" waterfall-offset="400" class="recommendList">
    <div @click.stop="goToShop(item.goodsId)" class="recommendLists" v-for="(item,index) in recommendList" :key="index">
      <div>
        <img :src="item.imageUrl" @click.stop="goToShop(item.goodsId)">
      </div>
      <div class="collageTip">
        <van-row>
          <van-col class="collageTipLeft" span="24">
            <span class="price">¥{{item.price}}</span>
            <span class="num">已拼{{item.num}}件</span>
          </van-col>
        </van-row>
        <div class="solt"></div>
        {{item.index}}
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Waterfall
  } from 'vant'
  import {
    Toast
  } from 'vant'
  import recommendData from "../../../static/recommend/recommendData"
  export default {
    name: 'RecommendList',
    data() {
      return {
        recommendList: recommendData,
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
          for (let i = 0; i < 4; i++) {
            this.recommendList.push(this.recommendList[i]);
          }
          this.disabled = false;
        }, 200);
      }
    }
  }
</script>

<style lang="less" scoped>
  .recommendList {
    .recommendLists {
      //box-sizing: border-box;
      width: 50%;
      display: inline-block;
      //border-left: 0.25em solid #fff;
      // float: left;
      img {
        width: 100%;
      }
      .collageTip {
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
      }
      .van-row {
        padding: 20px;
      }
      .solt {
        height: 10px;
        background-color: #e7e7e7;
      }
    }
  }
</style>

