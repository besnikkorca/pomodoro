<template>
  <article>
    <p>{{ description }}</p>
    <form v-on:submit.prevent="onSubmit">
      <FormInput
        id="rest"
        label="Rest"
        type="number"
        :value="restInMinutes.toString()"
        @input="setRestInMinutes($event.target.value)"
      />
      <FormInput
        id="work"
        label="Work"
        type="number"
        :value="workInMinutes.toString()"
        @input="setWorkInMinutes($event.target.value)"
      />
      <Status />
      <div>
        <Button v-if="isStopped">Start</Button>
        <Button v-else type="button" @click="stop">stop</Button>
      </div>
    </form>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters, mapState, mapActions, mapMutations } from '@/store/modules/pomodoro/helpers';
import { Session } from '@/types/store/pomodoro';
import { pauseSessions, tickSessions } from '@/constants/pomodoro';
import FormInput from './Form/FormInput.vue';
import Button from './Form/Button.vue';
import Status from './Status.vue';

@Options({
  name: 'PomodoroApp',
  components: {
    FormInput,
    Button,
    Status,
  },
  computed: {
    ...mapState(['session']),
    ...mapGetters(['restInMinutes', 'workInMinutes']),
    isStopped() {
      return pauseSessions.includes(this.session);
    },
  },
  data() {
    return {
      timeout: null,
      description: `Pomodoro technique is used to increase productivity by breaking down work into intervals,
      traditionally 25 minutes in length, separated by short breaks.`,
    };
  },
  watch: {
    session(newSession) {
      if (tickSessions.includes(newSession) && !this.timeout) {
        this.timeout = setInterval(() => {
          this.tick();
        }, 10);
      } else if (pauseSessions.includes(newSession) && this.timeout) {
        clearInterval(this.timeout);
        this.timeout = null;
      }
    },
  },
  methods: {
    ...mapActions(['start', 'stop', 'tick']),
    ...mapMutations(['setRestInMinutes', 'setWorkInMinutes']),
    onSubmit() {
      if (this.isStopped) return this.start();
      return this.stop();
    },
  },
})
export default class PomodoroApp extends Vue {
  setWorkInMinutes!: (event: Event) => void;

  setRestInMinutes!: (event: Event) => void;

  start!: () => void;

  stop!: () => void;

  isStopped!: boolean;

  onSubmit!: () => void;

  description!: string;

  session!: Session;

  restInMinutes!: number;

  workInMinutes!: number;
}
</script>

<style scoped lang="scss">
p {
  font-size: 1.2rem;
}

article {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#container {
  display: flex;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
}
</style>
