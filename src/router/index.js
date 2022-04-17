import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
  },
  {
    path: '/dashboard/add-expend',
    name: 'dashboard-add-expend',
    component: () => import('@/views/dashboard/Add.vue'),
  },
  {
    path: '/dashboard/edit-expend',
    name: 'dashboard-edit-expend',
    component: () => import('@/views/dashboard/Edit.vue'),
  },
  {
    path: '/staff-management',
    name: 'staff-management',
    component: () => import('@/views/staff/Dashboard.vue'),
  },
  {
    path: '/staff-management/add-staff',
    name: 'add-staff',
    component: () => import('@/views/staff/Add.vue'),
  },
  {
    path: '/staff-management/edit-staff',
    name: 'edit-staff',
    component: () => import('@/views/staff/Edit.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
