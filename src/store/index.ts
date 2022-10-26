import { createStore } from 'vuex';

const SECONDS_IN_MINUTE = 60;
const FIVE_MINUTES_IN_SECONDS = 5 * SECONDS_IN_MINUTE;
const TWENTYFIVE_MINUTES_IN_SECONDS = 25 * SECONDS_IN_MINUTE;

export default createStore({
  state: {
    pause: FIVE_MINUTES_IN_SECONDS,
    work: TWENTYFIVE_MINUTES_IN_SECONDS,
    timer: 0,
    session: 'none',
  },
  getters: {
    pauseInMinutes(state) {
      return state.pause / SECONDS_IN_MINUTE;
    },
    workInMinutes(state) {
      return state.work / SECONDS_IN_MINUTE;
    },
  },
  mutations: {
    setPause(state, payload) {
      state.pause = payload;
    },
    setPauseInMinutes(state, payload) {
      state.pause = payload * SECONDS_IN_MINUTE;
    },
    setWork(state, payload) {
      state.work = payload;
    },
    setWorkInMinutes(state, payload) {
      state.work = payload * SECONDS_IN_MINUTE;
    },
  },
  actions: {
    start() {
      console.log('start');
    },
  },
  modules: {},
});
