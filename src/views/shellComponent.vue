<script setup lang="ts">
import { onMounted } from 'vue'
import { globalInit } from '@/globalUtils'
import { useSlots, useAttrs } from 'vue'

const { fileName } = useAttrs()
const { draw } = await import(`@/p5/${fileName}.js`)

// important
import type global from 'node_modules/@types/p5/global.d.ts'

onMounted(() => {
  globalInit(draw)
})

</script>

<template>
  <main><canvas></canvas></main>
</template>