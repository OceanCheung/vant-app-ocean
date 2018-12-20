import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //控制中间组件的类型状态
    centerType: 1, //1 表示组件类型1 2 表示组件类型2
    //控制加载navbar
    navType: 1
  },
  mutations: { //一般处理一种状态
    setCenterType(state, {
      type
    }) {
      state.centerType = type;
    },
    setNavType(state, {
      type
    }) {
      state.navType = type;
    }
  },
  actions: { //触发多种状态 commit很多

  },
  getters: { //对数据进行处理
    // getCenterType(state){
    //     return state.centerType
    // }
  }
});
