// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore } from 'vuex';
import photos from './modules/photos';

export default createStore({
  modules: {
    photos,
  },
  strict: process.env.NODE_ENV !== 'production',
});
