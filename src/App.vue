<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import files from './files.json'

const cleanedList = files.filter(el => el !== "")
</script>

<template>
  <header>

    <nav>
      <div v-for="(item, index) in cleanedList" :key="index">
        <RouterLink :to="item">{{ item }}</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

body {
  margin: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    width: 10vw;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
    font-size: 1.2rem;

    padding: 1rem 0;
  }
}
</style>
