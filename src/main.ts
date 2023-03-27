// import type { Directive } from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import '@/assets/style.scss';
import LazyLoadDirective from './directives/lazy-load';

const app = createApp(App);

app.directive('lazy', LazyLoadDirective);

app.use(store).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
