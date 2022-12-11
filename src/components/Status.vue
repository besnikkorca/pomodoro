<template>
  <div class="status">
    <p>{{ description }}</p>
    <p v-if="timer">Time left: {{ timeLeft }}</p>
    <p v-else>Stoped</p>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { mapState } from '@/store/modules/pomodoro/helpers';
import { Session } from '@/types/store/pomodoro';

@Options({
  computed: {
    ...mapState(['session', 'timer']),
    startedText() {
      return this.session === 'work' ? 'Focus...' : 'Relax...';
    },
    description() {
      switch (this.session as Session) {
        case 'work':
          return 'Focus...';
        case 'pre-rest':
          return 'Get ready to relax';
        case 'rest':
          return 'Relax...';
        case 'pre-work':
        default:
          return 'Get ready to work';
      }
    },
    timeLeft() {
      const minutes = Math.floor(this.timer / 60);
      const seconds = this.timer % 60;
      return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    },
  },
})
export default class Status extends Vue {
  timer!: number;

  timeLeft!: string;

  description!: string;

  session!: Session;
}
</script>

<style scoped>
.status {
  margin: 1rem auto;
}

p {
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
}
</style>
