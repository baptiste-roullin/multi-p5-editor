<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

// important
import type global from 'node_modules/@types/p5/global.d.ts'

import { globalInit } from '@/globalUtils'

const route = useRoute()

async function initInsideComponent(fileName) {
  const name = String(fileName)
  const { draw } = await import(`../p5/${name}.ts`)

  globalInit(draw)
}

const props = defineProps(["fileName"])
watch(
  () => route.name,
  async name => {
    initInsideComponent(name)
  }
)


onMounted(async () => {
  initInsideComponent(props.fileName)
})

</script>

<template>
  <canvas></canvas>
</template>