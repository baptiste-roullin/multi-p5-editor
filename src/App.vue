<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { cleanedList } from './utils'
import shellComponent from "@/shellComponent.vue"
</script>

<template>
  <header>
    <nav>
      <div v-for="(fileName, index) in cleanedList" :key="index" :id="String(fileName)">
        <RouterLink :to="fileName">{{ fileName }}</RouterLink>
      </div>
    </nav>
  </header>

  <main>
    <shellComponent :fileName="cleanedList[0]" />
  </main>
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


nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 2rem;
  height: 100%;
  overflow-y: scroll;
}

nav a.router-link-exact-active {
  color: var(--color-slate-50);
  font-weight: 700;
  background-color: var(--color-slate-800);
}

nav a:hover {
  background-color: var(--color-slate-300);
  color: var(--color-slate-800);
}


nav a {
  text-decoration: none;
  color: var(--color-slate-800);
  transition: 0.4s;
  width: 100%;
  font-weight: 500;
  display: inline-block;
  padding: 1rem 1.5rem;
  word-wrap: anywhere;
  border-bottom: var(--color-slate-500) 1px solid;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: start;
    //padding-right: calc(var(--section-gap) / 2);
    width: 12vw;

  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    text-align: left;
    font-size: 1rem;
    margin-top: 0rem;
  }
}
</style>