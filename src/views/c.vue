<script setup lang="ts">
import p5 from 'p5'
import type P5 from 'p5'

import { onMounted, onUnmounted } from 'vue'



onMounted(() => {
  const sketch = (p5: P5) => {
    p5.windowResized = () => {
      p5.resizeCanvas(window.innerWidth - 100, window.innerHeight - 100)
    }

    p5.setup = () => {
      p5.createCanvas(window.innerWidth, window.innerHeight, undefined, document.querySelector("canvas")!)
      p5.frameRate(60)
    }

    p5.draw = function () {
      p5.background('yellow')
      const dimension = Math.min(
        window.innerWidth,
        window.innerHeight,
      )
      p5.ellipse(
        window.innerWidth / 2,
        window.innerHeight / 2,
        (Math.sin(Date.now() / 1000) + dimension / 2 / 5) *
        10,
        (Math.sin(Date.now() / 200) + dimension / 2 / 5) * 10,
      )
      p5.noLoop()

    }

  }
  new p5(sketch)
})


</script>

<template>
  <main>
    <canvas></canvas>
  </main>
</template>
