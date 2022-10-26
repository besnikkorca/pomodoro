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
    started: false,
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
    setSession(state, payload) {
      state.session = payload;
    },
    setIsStarted(state, payload) {
      state.started = payload;
    },
    setTimer(state, payload) {
      state.timer = payload;
    },
  },
  actions: {
    tick({ state, commit }) {
      if (state.timer > 0) {
        commit('setTimer', state.timer - 1);
      } else {
        const newSession = state.session === 'pause' ? 'work' : 'pause';
        const timer = newSession === 'pause' ? state.pause : state.work;

        commit('setIsStarted', false);
        commit('setSession', newSession);
        commit('setTimer', timer);
      }
    },
    start({ state, commit }) {
      if (state.session === 'none') {
        commit('setTimer', state.work);
        commit('setSession', 'work');
        commit('setIsStarted', true);
      } else if (state.session === 'work') {
        if (state.timer === 0) {
          commit('setSession', 'pause');
          commit('setTimer', state.pause);
        }
        commit('setIsStarted', true);
      } else if (state.session === 'pause') {
        if (state.timer === 0) {
          commit('setSession', 'work');
          commit('setTimer', state.work);
        }
        commit('setIsStarted', true);
      }
    },
    stop({ state, commit }) {
      if (state.started === false || state.session === 'none') return;
      commit('setIsStarted', false);
    },
  },
  modules: {},
});
