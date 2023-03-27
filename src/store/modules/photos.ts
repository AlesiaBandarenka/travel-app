import photos from '@/mockedPhoto.json';

const state = {
  all: [],
  sortByValue: 'type1',
};

const getters = {
  getPhotos: (state) => state.all,
};

const mutations = {
  setPhotos(state) {
    state.all = photos;
  },
  setSortBy(state, str: string) {
    state.sortByValue = str;
  },
};

const actions = {
  fetchPhotos: async ({ commit }) => {
    const res = await photos;
    commit('setPhotos', res);
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
