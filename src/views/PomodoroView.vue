<template>
  <section>
    <h1>Pomodoro Technique</h1>
    <PomodoroApp />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PomodoroApp from '@/components/PomodoroApp.vue';

@Options({
  components: { PomodoroApp },
})
export default class PomodoroView extends Vue {}
</script>

<style scoped>
section {
  border: 3px dashed var(--secondary-color);
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem 3rem 3rem;
  border-radius: 5px;
}

h1 {
  text-align: center;
  color: var(--secondary-color);
  font-size: 2.5rem;
  font-weight: 700;
  margin: 2rem;
}
</style>
