<template>
  <section>
    <h1>Pomodoro App</h1>

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
