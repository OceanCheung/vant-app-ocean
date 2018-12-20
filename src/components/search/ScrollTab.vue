<template>
  <div class="scrollTab">
    <yd-scrolltab>
  
      <yd-scrolltab-panel v-for="(item,index) in searchList" :key="index" :label="item.name" icon="demo-icons-category">
        <div class="shops">
          <div v-for="(item,index) in item.data" :key="index" class="shop">
            <img :src="item.imageUrl">
          </div>
        </div>
      </yd-scrolltab-panel>
  
      <!-- <yd-scrolltab-panel label="男装" icon="demo-icons-category">
          <div style="height: 350px;background-color: yellow;"></div>
        </yd-scrolltab-panel>
  
        <yd-scrolltab-panel label="母婴" icon="demo-icons-category">
          <div style="height: 350px;background-color: yellow;"></div>
        </yd-scrolltab-panel>
  
        <yd-scrolltab-panel label="内衣" icon="demo-icons-category">
          <div style="height: 350px;background-color: yellow;"></div>
        </yd-scrolltab-panel>
  
        <yd-scrolltab-panel label="食品" icon="demo-icons-category">
          <div style="height: 350px;background-color: yellow;"></div>
        </yd-scrolltab-panel>
  
        <yd-scrolltab-panel label="百货" icon="demo-icons-category">
          <div style="height: 350px;background-color: yellow;"></div>
        </yd-scrolltab-panel>
  
        <yd-scrolltab-panel label="手机" icon="demo-icons-category">
          <div style="height: 350px;background-color: yellow;"></div>
        </yd-scrolltab-panel>
  
        <yd-scrolltab-panel label="美妆" icon="demo-icons-category">
          <div style="height: 350px;background-color: yellow;"></div>
        </yd-scrolltab-panel>
  
        <yd-scrolltab-panel label="家纺" icon="demo-icons-category">
          <div style="height: 350px;background-color: yellow;"></div>
        </yd-scrolltab-panel>
  
        <yd-scrolltab-panel label="电器" icon="demo-icons-category">
          <div style="height: 350px;background-color: yellow;"></div>
        </yd-scrolltab-panel> -->
  
      <!-- ... -->
    </yd-scrolltab>
  </div>
</template>

<script>
  import Vue from 'vue';
  import searchList from '../../../static/search/searchList';
  import {
    ScrollTab,
    ScrollTabPanel
  } from 'vue-ydui/dist/lib.px/scrolltab';
  
  Vue.component(ScrollTab.name, ScrollTab);
  Vue.component(ScrollTabPanel.name, ScrollTabPanel);
  export default {
    name: 'ScrollTab',
    data() {
      return {
        searchList: searchList
      }
    }
  }
</script>

<style lang="less" scoped>
  input::-ms-input-placeholder {
    text-align: center;
  }
  
  input::-webkit-input-placeholder {
    text-align: center;
  }
  
  .shops {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    // align-items: center;
    // justify-content:center;
    .shop {
      flex-grow: 1;
      //width: 40px;
      //width: 40%;
      width: 33%;
      img {
        width: 100%;
      }
    }
  }
  
  .yd-scrolltab {
    position: absolute;
    top: 180px;
    left: 0;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
  }
  
  .yd-scrolltab-nav {
    height: 90% !important;
    background-color: #f5f5f5;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    z-index: 1
  }
  
  .yd-scrolltab-nav:after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    height: 100%;
    border-right: 1px solid #dfdfdf;
    -webkit-transform: scaleX(.5);
    transform: scaleX(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
  }
  
  .yd-scrolltab-item {
    padding: 0 15px;
    height: 50px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    z-index: 1
  }
  
  .yd-scrolltab-item:after {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #dfdfdf;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
  }
  
  .yd-scrolltab-item:before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    height: 100%;
    border-right: 1px solid #dfdfdf;
    -webkit-transform: scaleX(.5);
    transform: scaleX(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
  }
  
  .yd-scrolltab-item:active {
    background: none
  }
  
  .yd-scrolltab-active {
    background-color: #fff
  }
  
  .yd-scrolltab-active:before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    height: 100%;
    border-right: 1px solid #fff;
    -webkit-transform: scaleX(.5);
    transform: scaleX(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
  }
  
  .yd-scrolltab-active:active {
    background-color: #fff
  }
  
  .yd-scrolltab-icon {
    margin-right: 10px;
    font-size: 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  
  .yd-scrolltab-icon>img {
    height: 20px;
    display: inline-block
  }
  
  .yd-scrolltab-title {
    font-size: 15px;
    color: #666;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 80px
  }
  
  .yd-scrolltab-content {
    height: 100%;
    background-color: #fff;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0 12px 12px;
    position: relative
  }
  
  .yd-scrolltab-content-title {
    font-size: 15px;
    font-weight: 400;
    color: #555;
    display: block;
    padding-bottom: 5px;
    padding-top: 16px;
    margin-bottom: 10px;
    position: relative;
    z-index: 1
  }
  
  .yd-scrolltab-content-title:after {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #b2b2b2;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
  }
</style>

