<template>
  <article>
    {{ description }}
    <form v-on:submit.prevent="start">
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
      <button>Start</button>
    </form>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState, mapGetters } from 'vuex';

@Options({
  name: 'PomodoroApp',
  computed: {
    ...mapState(['work', 'pause']),
    ...mapGetters(['pauseInMinutes', 'workInMinutes']),
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
    start() {
      this.$store.dispatch('start');
    },
  },
  data() {
    return {
      description: `Pomodoro technique is used to increase productivity by breaking down work into intervals,
      traditionally 25 minutes in length, separated by short breaks.`,
    };
  },
})
export default class PomodoroApp extends Vue {
  setWork!: (event: Event) => void;

  setPause!: (event: Event) => void;

  setWorkInMinutes!: (event: Event) => void;

  setPauseInMinutes!: (event: Event) => void;

  start!: () => void;

  description!: string;

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
