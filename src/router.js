import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import payCard from './components/payCard.vue'
import creditdata from './components/creditdata.vue'
import endpage from './components/endpage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[{
        path:'',
        component:payCard
      },{
        path:'/data',
        component:creditdata
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path:'/endpage',
      component:endpage
    }
  ]
})
