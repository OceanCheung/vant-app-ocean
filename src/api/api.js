import ajax from './libs/ajax';
import ajaxUrl from './libs/url';


//查询头部导航信息
const listNavbar = () => {return ajax.get('/home/listNavbar')};

//查询轮播图信息
const listCarousel = () => { return ajax.get('/home/listCarousel') };

//查询限时热图信息
const listHot = () => {return ajax.get('/home/listHot')};

//查询广告信息
const getAdverData = () => {return ajax.get('/home/getAdverData')};

//查看秒杀信息
const listSeckill = () => {return ajax.get('/home/listSeckill')};


//API集合
const apiList = {
  listNavbar,listCarousel,listHot,getAdverData,listSeckill
};

export default apiList;
