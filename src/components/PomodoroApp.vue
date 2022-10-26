<template>
  <article>
    {{ description }}
    <form v-on:submit.prevent="handleStart">
      <label for="pause"
        >Pause:
        <input
          id="pause"
          type="number"
          v-bind:value="pauseInMinutes"
          v-on:input="setPauseInMinutes"
        />
      </label>
      <label for="work">
        Work:
        <input id="work" type="number" v-bind:value="workInMinutes" v-on:input="setWorkInMinutes" />
      </label>
      <div v-if="started">{{ session === 'work' ? 'Focus...' : 'Relax...' }}</div>
      <div>{{ session === 'pause' ? 'Enjoy the couple minutes' : 'Get things done' }}</div>
      <div v-if="timer">Time left: {{ Math.floor(timer / 60) }}:{{ timer % 60 }}</div>
      <div v-else>Stoped</div>
      <button>Start</button>
      <button type="button" v-on:click="handleStop">stop</button>
    </form>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState, mapGetters } from 'vuex';

@Options({
  name: 'PomodoroApp',
  computed: {
    ...mapState(['session', 'work', 'pause', 'started', 'timer']),
    ...mapGetters(['pauseInMinutes', 'workInMinutes']),
  },
  data() {
    return {
      timeout: null,
      description: `Pomodoro technique is used to increase productivity by breaking down work into intervals,
      traditionally 25 minutes in length, separated by short breaks.`,
    };
  },
  watch: {
    started(isStarted) {
      if (isStarted && !this.timeout) {
        this.timeout = setInterval(() => {
          this.$store.dispatch('tick');
        }, 100);
      } else if (!isStarted && this.timeout) {
        clearInterval(this.timeout);
        this.timeout = null;
      }
    },
  },
  methods: {
    setWork(event: Event) {
      this.$store.commit('setWork', (event.target as HTMLInputElement).value);
    },
    setWorkInMinutes(event: Event) {
      this.$store.commit('setWorkInMinutes', (event.target as HTMLInputElement).value);
    },
    setPause(event: Event) {
      this.$store.commit('setPause', (event.target as HTMLInputElement).value);
    },
    setPauseInMinutes(event: Event) {
      this.$store.commit('setPauseInMinutes', (event.target as HTMLInputElement).value);
    },
    handleStart() {
      this.$store.dispatch('start');
    },
    handleStop() {
      this.$store.dispatch('stop');
    },
  },
})
export default class PomodoroApp extends Vue {
  setWork!: (event: Event) => void;

  setPause!: (event: Event) => void;

  setWorkInMinutes!: (event: Event) => void;

  setPauseInMinutes!: (event: Event) => void;

  handleStart!: () => void;

  handleStop!: () => void;

  description!: string;

  started!: boolean;

  session!: 'none' | 'pause' | 'work';

  timer!: number;

  pause!: number;

  work!: number;

  pauseInMinutes!: number;

  workInMinutes!: number;
}
</script>

<style scoped lang="scss">
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(30, 225, 25);
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 5px;
}

#container {
  display: flex;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
}
</style>
