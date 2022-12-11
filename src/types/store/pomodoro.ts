export type Session = 'pre-work' | 'work' | 'rest' | 'pre-rest';

export interface PomodoroState {
  rest: number;
  work: number;
  timer: number;
  session: Session;
}
