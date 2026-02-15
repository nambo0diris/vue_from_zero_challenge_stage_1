import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/login/LoginPage.vue'
import DashboardPage from '../pages/dashboard/DashboardPage.vue'
import HomePage from '../pages/home/HomePage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', name: "login", component: LoginPage },
    { path: '/dashboard', component: DashboardPage },
  ],
})
