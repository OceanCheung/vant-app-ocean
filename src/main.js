import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//================手机适配开始=================
import 'lib-flexible/flexible'
//================手机适配结束=================

//================Vant主题引入开始=============
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);
//================Vant主题引入结束=============

import api from './api/index'
Vue.use(api);





Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
