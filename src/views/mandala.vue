<script setup lang="ts">

import { onMounted } from 'vue'
import { config, grid, star, width } from '../utils'
import p5 from 'p5'

function mandala(p5: p5 | p5.Graphics, itemSize: number) {

	p5.push()
	p5.translate(itemSize / 2, itemSize / 2)

	const innerRadius = itemSize * p5.random(.3, .9)
	const steps = p5.random(3, 20)
	const innerRadiusRatio = innerRadius / steps
	const outerRadiusRatio = itemSize / steps
	const randCol = p5.random(225, 255)
	const shadeRatio = randCol / steps
	const rotationRatio = p5.random(90, 200) / steps
	const pointCount = p5.random(5, 15)
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
		config(p5)

		p5.draw = () => {
			//mandala(p5, 400,)

			grid(p5, mandala, 4,)
			p5.noLoop()
		}
	}
	new p5(sketch)
})
</script>

<template>
	<main><canvas></canvas></main>
</template>
