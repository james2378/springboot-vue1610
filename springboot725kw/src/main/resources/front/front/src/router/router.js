import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yezhuList from '../pages/yezhu/list'
import yezhuDetail from '../pages/yezhu/detail'
import yezhuAdd from '../pages/yezhu/add'
import xiaoquxinxiList from '../pages/xiaoquxinxi/list'
import xiaoquxinxiDetail from '../pages/xiaoquxinxi/detail'
import xiaoquxinxiAdd from '../pages/xiaoquxinxi/add'
import wuyerenyuanList from '../pages/wuyerenyuan/list'
import wuyerenyuanDetail from '../pages/wuyerenyuan/detail'
import wuyerenyuanAdd from '../pages/wuyerenyuan/add'
import zichanxinxiList from '../pages/zichanxinxi/list'
import zichanxinxiDetail from '../pages/zichanxinxi/detail'
import zichanxinxiAdd from '../pages/zichanxinxi/add'
import yezhucheliangList from '../pages/yezhucheliang/list'
import yezhucheliangDetail from '../pages/yezhucheliang/detail'
import yezhucheliangAdd from '../pages/yezhucheliang/add'
import yezhuchongwuList from '../pages/yezhuchongwu/list'
import yezhuchongwuDetail from '../pages/yezhuchongwu/detail'
import yezhuchongwuAdd from '../pages/yezhuchongwu/add'
import cheweixinxiList from '../pages/cheweixinxi/list'
import cheweixinxiDetail from '../pages/cheweixinxi/detail'
import cheweixinxiAdd from '../pages/cheweixinxi/add'
import goumaicheweiList from '../pages/goumaichewei/list'
import goumaicheweiDetail from '../pages/goumaichewei/detail'
import goumaicheweiAdd from '../pages/goumaichewei/add'
import jiaofeitongzhiList from '../pages/jiaofeitongzhi/list'
import jiaofeitongzhiDetail from '../pages/jiaofeitongzhi/detail'
import jiaofeitongzhiAdd from '../pages/jiaofeitongzhi/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yezhu',
					component: yezhuList
				},
				{
					path: 'yezhuDetail',
					component: yezhuDetail
				},
				{
					path: 'yezhuAdd',
					component: yezhuAdd
				},
				{
					path: 'xiaoquxinxi',
					component: xiaoquxinxiList
				},
				{
					path: 'xiaoquxinxiDetail',
					component: xiaoquxinxiDetail
				},
				{
					path: 'xiaoquxinxiAdd',
					component: xiaoquxinxiAdd
				},
				{
					path: 'wuyerenyuan',
					component: wuyerenyuanList
				},
				{
					path: 'wuyerenyuanDetail',
					component: wuyerenyuanDetail
				},
				{
					path: 'wuyerenyuanAdd',
					component: wuyerenyuanAdd
				},
				{
					path: 'zichanxinxi',
					component: zichanxinxiList
				},
				{
					path: 'zichanxinxiDetail',
					component: zichanxinxiDetail
				},
				{
					path: 'zichanxinxiAdd',
					component: zichanxinxiAdd
				},
				{
					path: 'yezhucheliang',
					component: yezhucheliangList
				},
				{
					path: 'yezhucheliangDetail',
					component: yezhucheliangDetail
				},
				{
					path: 'yezhucheliangAdd',
					component: yezhucheliangAdd
				},
				{
					path: 'yezhuchongwu',
					component: yezhuchongwuList
				},
				{
					path: 'yezhuchongwuDetail',
					component: yezhuchongwuDetail
				},
				{
					path: 'yezhuchongwuAdd',
					component: yezhuchongwuAdd
				},
				{
					path: 'cheweixinxi',
					component: cheweixinxiList
				},
				{
					path: 'cheweixinxiDetail',
					component: cheweixinxiDetail
				},
				{
					path: 'cheweixinxiAdd',
					component: cheweixinxiAdd
				},
				{
					path: 'goumaichewei',
					component: goumaicheweiList
				},
				{
					path: 'goumaicheweiDetail',
					component: goumaicheweiDetail
				},
				{
					path: 'goumaicheweiAdd',
					component: goumaicheweiAdd
				},
				{
					path: 'jiaofeitongzhi',
					component: jiaofeitongzhiList
				},
				{
					path: 'jiaofeitongzhiDetail',
					component: jiaofeitongzhiDetail
				},
				{
					path: 'jiaofeitongzhiAdd',
					component: jiaofeitongzhiAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
