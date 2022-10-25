<template>
  <nav>
    <router-link v-for="(route, index) in routes" :key="route.name" v-bind:to="route.path"
      >{{ route.name }}{{ index < routes.length - 1 ? ' | ' : '' }}</router-link
    >
  </nav>
  <router-view />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  name: 'App',
  data() {
    return {
      routes: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Pomodoro', path: '/pomodoro' },
      ],
    };
  },
})
export default class App extends Vue {
  routes!: { name: string; path: string }[];
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
