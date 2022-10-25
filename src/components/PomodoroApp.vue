<template>
  <div>
    {{ description }}
    <button></button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'PomodoroApp',
  data() {
    return {
      description: `Pomodoro technique is used to increase productivity by breaking down work into intervals,
      traditionally 25 minutes in length, separated by short breaks.`,
    };
  },
})
export default class PomodoroApp extends Vue {
  description!: string;
}
</script>
