<script lang="ts">

import { reactive } from 'vue'
export const store = reactive<Record<string, any>>({})

store.count = 0

</script>


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { cleanedList } from './utils'
import log from './components/log.vue'


</script>

<template>
  <header>

    <nav>
      <div v-for="(item, index) in cleanedList" :key="index" :id="String(item)">
        <RouterLink :to="item">{{ item }}</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
  <log :foo="1"></log>
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
  height: 100%;
  overflow-y: scroll;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  font-weight: normal;
  background: var(--vt-c-indigo);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  width: 100%;
  font-weight: 600;
  display: inline-block;
  padding: 2rem 2.5rem;
  ;
  border-left: 1px solid var(--color-border);
  word-wrap: anywhere;
  border: var(--vt-c-divider-dark-1) 1px solid;
}

nav div:first-of-type a {
  border: 0;
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
    font-size: 1.4rem;
    margin-top: 0rem;


  }
}
</style>
