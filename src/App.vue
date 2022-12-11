<template>
  <Header />
  <main class="content">
    <router-view />
  </main>
  <Footer />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';

@Options({
  name: 'App',
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
:root {
  --primary-color: #42b983;
  --secondary-color: #2c3e50;
  --link-color: #fff;
  --black-color: #000;
}

* {
  margin: 0;
  padding: 0;
}

a {
  font-weight: bold;
  color: var(--link-color);

  &.router-link-exact-active {
    color: var(--primary-color);
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--primary-color);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  align-items: center;
  flex: 1;
}
</style>
