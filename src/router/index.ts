import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home/main'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {path: 'main', component: () => import('../views/main/Main.vue')},
      {path: 'article', component: () => import('../views/article/Article.vue')},
      {path: 'tag', component: () => import('../views/tag/Tag.vue')},
      {path: 'sort', component: () => import('../views/sort/Sort.vue')},
      {path: 'course', component: () => import('../views/course/Course.vue')},
      {path: 'mboard', component: () => import('../views/mboard/MBoard.vue')},
      {path: 'about', component: () => import('../views/about/About.vue')},
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
