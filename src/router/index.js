import Vue from "vue";
import Router from "vue-router";

//路由配置
import Index from "../pages/Index";
import Home from "../pages/Home";
import Personal from "../pages/Personal";
import Recommend from "../pages/Recommend";
import Search from "../pages/Search";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      redirect: "/Home"
    },
    {
      path: "/",
      name: "Index",
      component: Index,
      children: [{
          path: "/Home",
          name: "Home",
          icon: "wap-home",
          text: "主页",
          component: Home
        },
        {
          path: "/Recommend",
          name: "Recommend",
          icon: "like-o",
          text: "推荐",
          component: Recommend
        },
        {
          path: "/Search",
          name: "Search",
          icon: "search",
          text: "搜索",
          component: Search
        },
        {
          path: "/Personal",
          name: "Personal",
          icon: "contact",
          text: "个人中心",
          component: Personal
        },
      ]
    }
  ]
});
