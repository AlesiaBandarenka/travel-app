import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NoFoundView from '../views/NoFoundView.vue';
import DetailedMovieView from '../views/DetailedMovieView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: HomeView,
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/error',
    name: 'NoFound',
    component: NoFoundView,
  },
  {
    path: '/movie/:id?',
    name: 'DetailedMovie',
    component: DetailedMovieView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: NoFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
