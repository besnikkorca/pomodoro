import { PomodoroState } from '@/types/store/pomodoro';
import { SECONDS_IN_MINUTE } from '@/utils/time';
import { GetterTree } from 'vuex';

const getters: GetterTree<PomodoroState, PomodoroState> = {
  restInMinutes(state: PomodoroState) {
    return state.rest / SECONDS_IN_MINUTE;
  },
  workInMinutes(state: PomodoroState) {
    return state.work / SECONDS_IN_MINUTE;
  },
};

export default getters;
