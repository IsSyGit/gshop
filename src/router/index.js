/*
定义路由器
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

//引入路由组件
import MSite from '../views/MSite/MSite';
import Order from '../views/Order/Order'
import Profile from '../views/Profile/Profile'
import Search from '../views/Search/Search'
import Login from '../views/Login/Login'



//声明使用VueRouter路由插件

Vue.use(VueRouter);


export default new VueRouter({
  //所有路由

  routes:[
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },

    {
      path:'/order',
      component:Order
      ,
      meta:{
        showFooter:true
      }
    },

    {
      path:'/profile',
      component:Profile
      ,
      meta:{
        showFooter:true
      }
    },

    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect: '/msite'
    }
  ]

});
