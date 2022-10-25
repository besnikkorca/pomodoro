<template>
  <article>
    {{ description }}
    <div>
      <label for="pause"
        >Pause
        <input id="pause" type="number" v-bind:value="pause" v-on:input="setPause" />
      </label>
      <label for="work">
        <input id="work" type="number" v-bind:value="work" v-on:input="setWork" />
      </label>
      <button>Test 123</button>
    </div>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState } from 'vuex';

@Options({
  name: 'PomodoroApp',
  computed: mapState(['work', 'pause']),
  methods: {
    setWork(event: Event) {
      this.$store.commit('setWork', (event.target as HTMLInputElement).value);
    },
    setPause(event: Event) {
      this.$store.commit('setPause', (event.target as HTMLInputElement).value);
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
  setWork!: (event: InputEvent) => void;

  setPause!: () => void;

  description!: string;

  pause!: number;

  work!: number;
}
</script>

<style lang="scss">
article {
  display: flex;
  flex-direction: column;
  background-color: rgb(30, 225, 25);
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 5px;
}

div {
}
</style>
