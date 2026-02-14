import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/login/LoginPage.vue'
import DashboardPage from '../pages/dashboard/DashboardPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/login', component: LoginPage },
    { path: '/dashboard', component: DashboardPage },
  ],
})
