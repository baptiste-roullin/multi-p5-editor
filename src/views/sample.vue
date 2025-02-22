<script setup lang="ts">
import { onMounted } from 'vue'
import { globalInit } from '@/globalUtils'

onMounted(() => {

  function draw() {
    background(220)
    ellipse(50, 50, 80, 80)
  }
  globalInit(draw)
})

</script>

<template>
  <main><canvas></canvas></main>
</template>