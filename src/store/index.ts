// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore } from 'vuex';
import movies from './modules/movies';

export default createStore({
  modules: {
    movies,
  },
  strict: process.env.NODE_ENV !== 'production',
});
