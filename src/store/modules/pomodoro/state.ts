import { PomodoroState } from '@/types/store/pomodoro';
import { FIVE_MINUTES_IN_SECONDS, TWENTYFIVE_MINUTES_IN_SECONDS } from '@/utils/time';

const state: PomodoroState = {
  rest: FIVE_MINUTES_IN_SECONDS,
  work: TWENTYFIVE_MINUTES_IN_SECONDS,
  timer: TWENTYFIVE_MINUTES_IN_SECONDS,
  session: 'pre-work',
};

export default state;
