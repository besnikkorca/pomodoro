import { PomodoroState } from '@/types/store/pomodoro';
import { Module } from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const pomodoroModule: Module<PomodoroState, PomodoroState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default pomodoroModule;
