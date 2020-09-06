import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../components/Header.vue'
import User from '../components/User/User'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: "home",
    components:{
      default:Home,
      "topView":Header
    }
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path:"/user",
    components:{
      default:User,
      "bottomView": () => import('../components/Header')
    },
    children: [
      {path:'', component:() => import('../components/User/UserStart'), name: "userStart"},
      {path:':id', component:() => import('../components/User/UserDetail'), name:"userDetail"},
      {path:':id/edit', component:() => import('../components/User/UserEdit'), name:"userEdit"},
    ]
  },
  {
    path:'*',
    redirect:'/'
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to){
    // return {x:0, y:1000}
    if(to.hash){
      return {selector:to.hash}
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
