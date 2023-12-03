<script setup lang="ts">

import { onMounted } from 'vue'
import { config, grid, star } from '../utils'
import p5 from 'p5'

function mandala(p5: p5 | p5.Graphics, itemSize: number) {
	p5.rect(0, 0, itemSize, itemSize)

	p5.push()
	p5.translate(itemSize / 2, itemSize / 2)

	const innerRadius = itemSize * p5.random(.3, .9)
	const steps = Math.trunc(p5.random(3, 20))
	const innerRadiusRatio = innerRadius / steps
	const outerRadiusRatio = itemSize / steps
	const randCol = Math.trunc(p5.random(225, 255))
	const shadeRatio = randCol / steps
	const rotationRatio = p5.random(90, 200) / steps
	const pointCount = p5.random(5, 15)

	/*const innerRadius = 329.6833086115345
	const steps = 3
	const innerRadiusRatio = 109.89443620384485
	const outerRadiusRatio = 319.5
	const randCol = 251
	const shadeRatio = 83.66666666666667
	const rotationRatio = 47.23244606710108
	const pointCount = 11.051685797033752
*/



	console.table(
		{
			"innerRadius": innerRadius,
			"steps": steps,
			"innerRadiusRatio": innerRadiusRatio,
			"outerRadiusRatio": outerRadiusRatio,
			"randCol": randCol,
			"shadeRatio": shadeRatio,
			"rotationRatio": rotationRatio,
			"pointCount": pointCount
		})
	for (let k = 0; k < steps; k++) {

		p5.fill(shadeRatio * k)
		p5.stroke(randCol - shadeRatio * k, 100)
		p5.push()

		p5.scale(.4)
		p5.rotate(rotationRatio * k * p5.PI / 180)
		star(p5, itemSize - outerRadiusRatio * k, innerRadius - innerRadiusRatio * k, pointCount, 0, 0)
		p5.pop()

	}
	p5.pop()
}

onMounted(() => {
	const sketch = (p5: p5) => {
		config(p5, true)

		p5.draw = () => {
			grid(p5, mandala, 2, undefined)
		}
	}
	new p5(sketch)
})
</script>

<template>
	<main><canvas></canvas></main>
</template>
