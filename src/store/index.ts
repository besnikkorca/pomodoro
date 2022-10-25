import { createStore } from 'vuex';

export default createStore({
  state: {
    pause: 5,
    work: 25,
  },
  getters: {},
  mutations: {
    setPause(state, payload) {
      state.pause = payload;
    },
    setWork(state, payload) {
      state.work = payload;
    },
  },
  actions: {},
  modules: {},
});
