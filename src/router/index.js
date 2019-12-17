import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入三个要跳转的页面组件
import Movies from "../views/Movies/Movies.vue"
import Cinema from "../views/Cinema/Cinema.vue"
import Mine from "../views/Mine/Mine.vue"

// 引入跳转到正在热映的组件
import myShowing from "../views/Movies/components/my-showing.vue";
import myTobeshow from "../views/Movies/components/my-tobeshow.vue";
// import myShowbtn from "../views/Movies/components/my-showbtn.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    component: Movies,
    children: [
      {
        path: 'tobeshow',
        component: myTobeshow
      },
      // {
      //     path: '/movies',
      //     component: Movies
      //   },

    ]

  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/mine',
    component: Mine
  },
  {
   path:'/',
   component:Movies
    
  },


]

const router = new VueRouter({
  routes
})

export default router
