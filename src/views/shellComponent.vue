<script setup lang="ts">
import { onMounted } from 'vue'
import { globalInit } from '@/globalUtils'
import { defineProps, useAttrs } from 'vue'

// important
import type global from 'node_modules/@types/p5/global.d.ts'
import p5 from 'p5'

const props = defineProps(["fileName"])


const a = "sample"
const path = `../p5/${a}.ts`
const usefulWidth = window.innerWidth * .88
const usefulHeight = window.innerHeight * .90

onMounted(async () => {

  const draw = await import("../p5/sample.js")
  function setup() {
    createCanvas(usefulWidth, usefulHeight, undefined, document.querySelector("canvas")!)
    frameRate(60)

    //saveCanvas(cnv, 'myCanvas.jpg');

    const setLoop = (true ? loop : noLoop)
    //must be the last line
    setLoop()
  }

  window['setup'] = null
  window['setup'] = setup
  window['draw'] = null
  window['draw'] = draw
  console.log("start")

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
  delay(1000).then(() => {
    console.log("p5")

    new p5()

    console.log("End")
  })
})

</script>

<template>
  <main><canvas></canvas></main>
</template>