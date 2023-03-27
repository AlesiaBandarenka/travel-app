import photos from '@/mockedPhoto.json';

const state = {
  all: [],
  sortByValue: 'type1',
};

const getters = {
  getMovies: (state) => state.all,
};

const mutations = {
  setMovies(state, movies) {
    state.all = movies;
  },
  setSortBy(state, str: string) {
    state.sortByValue = str;
  },
};

const actions = {
  fetchPhotos: async ({ commit }) => {
    const res = await photos;
    commit('setMovies', res);
  },
  setSortBy(store) {
    store.commit('setSortBy');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
