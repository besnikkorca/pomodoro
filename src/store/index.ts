import { createStore } from 'vuex';
import pomodoro from './modules/pomodoro';

export default createStore({
  modules: {
    pomodoro,
  },
});
