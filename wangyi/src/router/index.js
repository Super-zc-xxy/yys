import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import app1 from '@/components/app1'
import shop from '@/components/shop'
import regist from '@/components/regist'
import login from '@/components/login'
import one from '@/components/one'
import one1 from '@/components/one1'
import two from '@/components/two'
import three from '@/components/three'
import four from '@/components/four'
import five from '@/components/five'
import shishen from '@/components/shishen'
import liandong from '@/components/liandong'
import sp from '@/components/sp'
import ssr from '@/components/ssr'
import sr from '@/components/sr'
import r from '@/components/r'
import n from '@/components/n'
import gt from '@/components/gt'
import mengxin from '@/components/mengxin'
import shishenyuhun from '@/components/shishenyuhun'
import miwenfuben from '@/components/miwenfuben'
import douji from '@/components/douji'
import video from '@/components/video'
import video1 from '@/components/video1'
import bizhi from '@/components/bizhi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app1',
      component: app1,
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      // children:[{
      //   path:'/login',
      //   name:"Login",
      //   component:Login
      // }]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/one/:id',
      name: 'one',
      component: one,
      children: [
        {
          path: '/one1',
          name: 'one1',
          component: one1
        },
        {
          path: '/two',
          name: 'two',
          component: two
        },
        {
          path:'/three',
          name:'three',
          component:three
        },
        {
          path:'/four',
          name:'four',
          component:four
        },
        {
          path:'/five',
          name:'five',
          component:five
        },
        {
          path:'/mengxin',
          name:'mengxin',
          component:mengxin
        },
        {
          path:'/shishenyuhun',
          name:'shishenyuhun',
          component:shishenyuhun
        },
        {
          path:'/miwenfuben',
          nmae:'miwenfuben',
          component:miwenfuben
        },
        {
          path:'/douji',
          nmae:'douji',
          component:douji
        }
      ]
    },
    {
      path:'/shishen/:id',
      name:'shishen',
      component:shishen,
      children:[
        {
          path:'/liandong',
          name:'liandong',
          component:liandong
        },
        {
          path:'/sp',
          name:'sp',
          component:sp
        },
        {
          path:'/ssr',
          name:'ssr',
          component:ssr
        },
        {
          path:'/sr',
          name:'sr',
          component:sr
        },
      {
        path:'/r',
        name:'r',
        component:r
      },{
        path:'/n',
        name:'n',
        component:n
      },
      {
        path:'/gt',
        name:'gt',
        component:gt
      }
      ]
    },
    {
      path:'/video/:id',
      name:'video',
      component:video,
      children:[
        {
          path:'/video1',
          name:'video1',
          component:video1
        },
        {
          path:'/bizhi',
          name:'bizhi',
          component:bizhi
        },
      ]
    }
  ],
  mode: 'history'
})
