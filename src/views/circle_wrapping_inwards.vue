<script setup lang="ts">
import p5 from 'p5'
import type global from 'node_modules/@types/p5/global.d.ts'
import { onMounted } from 'vue'
import { globalInit, usefulHeight, usefulWidth } from '@/globalUtils'

onMounted(() => {

	function draw() {
		background(2, 2, 2)
		const dimension = Math.min(
			usefulHeight,
			usefulWidth,
		)
		fill(255)
		//fill(0, 0, 0, 0)
		stroke(255, 255, 255)

		let sin = Math.sin(Date.now() / 5000)
		let factor = sin * 10000
		arc(
			//center point
			usefulWidth / 2,
			(usefulHeight / 2) - (factor / 2),
			//dimensions
			factor,
			factor,
			//border
			0,
			2 * Math.PI,
			//mode

		)


		/*rect(usefulWidth / 2, usefulHeight / 2, 10, 10)
		rect(usefulWidth / 2, usefulHeight - 5, 10, 10)*/


	}
	globalInit(draw, true)
})

</script>

<template>
	<main><canvas></canvas></main>
</template>
