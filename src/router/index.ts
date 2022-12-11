import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PomodoroView from '../views/PomodoroView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: PomodoroView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
