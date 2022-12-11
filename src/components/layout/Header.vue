<template>
  <header class="head">
    <nav>
      <ul class="head__list">
        <li class="head__list__item" v-for="route in routes" :key="route.name">
          <router-link :to="route.path">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  data() {
    return {
      routes: [{ name: 'Pomodoro', path: '/' }],
    };
  },
})
export default class Header extends Vue {
  routes!: { name: string; path: string }[];
}
</script>

<style lang="scss" scoped>
.head {
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
