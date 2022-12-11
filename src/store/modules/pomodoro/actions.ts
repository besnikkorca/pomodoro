import { PomodoroState, Session } from '@/types/store/pomodoro';
import { ActionTree } from 'vuex';

function nextSession(session: Session) {
  switch (session) {
    case 'pre-work':
      return 'work';
    case 'work':
      return 'pre-rest';
    case 'pre-rest':
      return 'rest';
    case 'rest':
    default:
      return 'pre-work';
  }
}

const actions: ActionTree<PomodoroState, PomodoroState> = {
  tick({ state, commit }) {
    if (state.timer > 0) {
      commit('setTimer', state.timer - 1);
    } else {
      const newSession = nextSession(state.session);

      commit('setSession', newSession);
      if (['pre-work', 'pre-rest'].includes(newSession)) {
        const timer = newSession === 'pre-rest' ? state.rest : state.work;
        commit('setTimer', timer);
      }
    }
  },
  start({ state, commit }) {
    if (state.session === 'pre-work') {
      commit('setSession', 'work');
    } else if (state.session === 'pre-rest') {
      commit('setSession', 'rest');
    }
    // if (state.started === false && state.session !== 'none') {
    //   commit('setIsStarted', true);
    // } else if (state.session === 'none') {
    //   commit('setTimer', state.work);
    //   commit('setSession', 'work');
    //   commit('setIsStarted', true);
    // } else if (state.session === 'work') {
    //   if (state.timer === 0) {
    //     commit('setTimer', state.pause);
    //   }
    //   commit('setSession', 'pause');
    //   commit('setIsStarted', true);
    // } else if (state.session === 'pause') {
    //   if (state.timer === 0) {
    //     commit('setTimer', state.work);
    //   }
    //   commit('setSession', 'work');
    //   commit('setIsStarted', true);
    // }
  },
  stop({ state, commit }) {
    if (state.session === 'work') {
      commit('setSession', 'pre-work');
    } else if (state.session === 'rest') {
      commit('setSession', 'pre-rest');
    }
  },
};

export default actions;
