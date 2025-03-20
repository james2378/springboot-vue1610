import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import yezhu from '@/views/modules/yezhu/list'
    import zichanxinxi from '@/views/modules/zichanxinxi/list'
    import jiaofeitongzhi from '@/views/modules/jiaofeitongzhi/list'
    import wuyerenyuan from '@/views/modules/wuyerenyuan/list'
    import yezhucheliang from '@/views/modules/yezhucheliang/list'
    import cheweixinxi from '@/views/modules/cheweixinxi/list'
    import goumaichewei from '@/views/modules/goumaichewei/list'
    import systemintro from '@/views/modules/systemintro/list'
    import messages from '@/views/modules/messages/list'
    import xiaoquxinxi from '@/views/modules/xiaoquxinxi/list'
    import config from '@/views/modules/config/list'
    import yezhuchongwu from '@/views/modules/yezhuchongwu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '小区公告',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/yezhu',
        name: '业主',
        component: yezhu
      }
      ,{
	path: '/zichanxinxi',
        name: '资产信息',
        component: zichanxinxi
      }
      ,{
	path: '/jiaofeitongzhi',
        name: '缴费通知',
        component: jiaofeitongzhi
      }
      ,{
	path: '/wuyerenyuan',
        name: '物业人员',
        component: wuyerenyuan
      }
      ,{
	path: '/yezhucheliang',
        name: '业主车辆',
        component: yezhucheliang
      }
      ,{
	path: '/cheweixinxi',
        name: '车位信息',
        component: cheweixinxi
      }
      ,{
	path: '/goumaichewei',
        name: '购买车位',
        component: goumaichewei
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/xiaoquxinxi',
        name: '小区信息',
        component: xiaoquxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/yezhuchongwu',
        name: '业主宠物',
        component: yezhuchongwu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
