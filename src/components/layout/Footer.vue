<template>
  <footer class="foot">
    <p>Copyright © {{ year }} {{ company }} {{ companyType }}. All rights reserved</p>
  </footer>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  computed: {
    company() {
      return 'BICODE';
    },
    companyType() {
      return 'LLC';
    },
    year() {
      return new Date().getFullYear();
    },
  },
})
export default class Footer extends Vue {
  companyType!: string;

  company!: string;

  year!: number;
}
</script>

<style lang="scss" scoped>
.foot {
  background-color: var(--secondary-color);
  color: #ffffff;
  padding: 2rem;
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);

  &__list {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style: none;
  }
}
</style>
