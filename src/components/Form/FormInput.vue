<template>
  <label :for="id"
    >{{ label }}:
    <input :type="type || 'text'" :id="id" @input="handleInput" :value="value" />
  </label>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  name: 'FormInput',
  props: {
    id: String,
    type: {
      default: 'text',
      type: String,
    },
    label: String,
    value: String || Number,
  },
  methods: {
    handleInput(e: Event) {
      this.$emit('input', e);
    },
  },
})
export default class FormInput extends Vue {
  handleInput!: (event: Event) => void;

  id!: string;

  value!: string | number;

  label?: string;

  fieldId!: string;

  type?: string;
}
</script>

<style scoped>
label {
  font-size: 1.2rem;
}

input {
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: rgb(240, 240, 240);
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
}
</style>
