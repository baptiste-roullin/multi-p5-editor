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
		let sin = (Math.sin(Date.now() / 1000) + 1) / 2
		//let coeff = dimension / 2 / 5

		let size = sin * usefulHeight

		/*		arc(
			usefulWidth / 2,
			usefulHeight - size / 2,
			10 + size,
			10 + size,
			0,
			2 * Math.PI,
			"chord"
			)*/

		/*	let computedHeight = usefulHeight + size / 2
			console.log(computedHeight, usefulHeight / 2)
			if (computedHeight > (usefulHeight / 2)) {
				var switchedOrigin = usefulHeight - size / 2
			}
			else {
				var switchedOrigin = usefulHeight + size / 2
			}*/

		let center = -size / 20
		console.log(center)

		arc(
			usefulWidth / 2,
			center,
			size,
			size,
			0,
			2 * Math.PI,
			"chord"
		)

		rect(usefulWidth / 2, usefulHeight / 2, 10, 10)
		rect(usefulWidth / 2, usefulHeight - 5, 10, 10)


	}
	globalInit(draw, true)
})

</script>

<template>
	<main><canvas></canvas></main>
</template>
