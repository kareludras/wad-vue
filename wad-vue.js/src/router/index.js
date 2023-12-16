import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import auth from "../auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: async(to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: () => import('../views/AddpostView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
