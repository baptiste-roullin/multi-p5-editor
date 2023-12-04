<script setup lang="ts">
import p5 from 'p5'
import { onMounted, onUnmounted } from 'vue'

let { draw } = new p5(() => { })

import { config, width } from '../utils'




window['draw'] = draw

onMounted(() => {

  //config(p5)
  draw = function draw() {
    const largeur = 400
    const centre = largeur / 2
    background(240)

    p5.stroke(100)
    p5.strokeWeight(1)
    p5.angleMode(p5.DEGREES)

    for (let i = 0; i < 360; i += 10) {
      let x1 = p5.sin(i) * 30
      let y1 = p5.cos(i) * 30
      let x2 = p5.sin(i) * 40
      let y2 = p5.cos(i) * 40
      p5.line(x1 + centre, y1 + centre, x2 + centre, y2 + centre)
    }

  }
}



</script>

<template>
  <main>
    <canvas></canvas>
  </main>
</template>
