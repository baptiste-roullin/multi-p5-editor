<script setup lang="ts">
import p6 from '../p6'
import { onMounted } from 'vue'

import { config } from '../utils'

onMounted(() => {
  const sketch = (p6: p6) => {
    config(p6)

    p6.draw = function () {
      p6.background('red')
      const dimension = Math.min(
        window.innerWidth,
        window.innerHeight,
      )
      p6.ellipse(
        window.innerWidth / 2,
        window.innerHeight / 2,
        (Math.sin(Date.now() / 1000) + dimension / 2 / 5) *
        10,
        (Math.sin(Date.now() / 200) + dimension / 2 / 5) * 10,
      )
    }

  }
  new p6(sketch)
})


</script>

<template>
  <main>
    <canvas></canvas>
  </main>
</template>
