import { PomodoroState, Session } from '@/types/store/pomodoro';
import { SECONDS_IN_MINUTE } from '@/utils/time';
import { MutationTree } from 'vuex';

const mutations: MutationTree<PomodoroState> = {
  setRest(state, payload: number) {
    state.rest = payload;
  },
  setRestInMinutes(state, payload: number) {
    state.rest = payload * SECONDS_IN_MINUTE;
  },
  setWork(state, payload: number) {
    state.work = payload;
  },
  setWorkInMinutes(state, payload: number) {
    state.work = payload * SECONDS_IN_MINUTE;
  },
  setSession(state, payload: Session) {
    state.session = payload;
  },
  setTimer(state, payload: number) {
    state.timer = payload;
  },
};

export default mutations;
