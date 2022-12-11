<template>
  <button :type="type"><slot /></button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  props: {
    type: {
      default: 'submit',
      type: String,
    },
  },
})
export default class Button extends Vue {
  type!: 'button' | 'submit' | 'reset' | undefined;
}
</script>

<style scoped>
button {
  padding: 0.5rem 1.5rem;
  max-width: 9.375rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
