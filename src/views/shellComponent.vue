<script setup lang="ts">
import { onMounted } from 'vue'
import { globalInit } from '@/globalUtils'
import { defineProps } from 'vue'
import p5 from 'p5'

import type global from 'node_modules/@types/p5/global.d.ts'

// important


import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()


async function initInsideComponent(name) {
  const path = `../p5/${String(name)}.ts`
  const { draw } = await import(path)
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