# vant-app-ocean

技术选型
    前台：vue+vuex+axios+vant+less+flex+es6
    后台：nodejs+express+es6 暂时先用json代替 后期修改
环境搭建
    1、css使用less
    2、移动端适配 px->rem
    3、vant-ui的主题
核心组件
    1、Home  主页
        1.1 Navbar 顶部导航栏
        1.2 Carousel 轮播
        1.3 Hot 热销
        1.4 Seckill 秒杀
    2、Recommend 推荐
        2.1 RecommendHead 推荐头
        2.2 RecommendNew 新品
        2.3 RecommendList 为你推荐集合
    3、Search 搜索
        3.1 SearchHead 搜索头
        3.2 SearchInput 搜索框
        3.3 ScrollTab 滚动选项卡
    4、 Personal 个人中心
        4.1 Login 登录
        4.2 Order 订单
公共组件 父级组件
    Tabbar 底部标签栏
    CenterTypeOne 中间的大组件 类型1
    CenterTypeTwo 中间的大组件 类型2
    NavBar  头部导航栏
    Tabbar  底部tab栏

路由
    Index 入口路由 重定向到Home
    Home 主页路由
    Recommend 推荐路由 
    Personal 个人中心路由
    Search 搜索路由
    ......

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
