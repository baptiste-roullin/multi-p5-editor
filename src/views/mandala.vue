<script setup lang="ts">

import { onMounted } from 'vue'
import { config, star, width } from '../utils'


function drawOneCanvas(p5: p5, callback: Function, i, j, itemSize) {
	let buffer = p5.createGraphics(itemSize, itemSize)
	const innerRadius = itemSize * p5.random(.3, .9)
	const steps = Number(p5.random(3, 20))
	const innerRadiusRatio = innerRadius / steps
	const outerRadiusRatio = itemSize / steps
	const randCol = p5.random(225, 255)
	const shadeRatio = randCol / steps
	const rotationRatio = p5.random(90, 200) / steps
	const pointCount = Number(p5.random(5, 15))
	for (let k = 0; k < steps; k++) {
		buffer.fill(shadeRatio * k)
		buffer.stroke(randCol - shadeRatio * k, 100)
		buffer.push()
		buffer.scale(.4)
		buffer.rotate(rotationRatio * k * p5.PI / 180)
		//
		buffer.star(itemSize - outerRadiusRatio * k, innerRadius - innerRadiusRatio * k, pointCount,)
		buffer.pop()
	} p5.image(buffer, itemSize * j, itemSize * i)
}


function mandala(p5: p5, itemSize, buffer) {
	const innerRadius = itemSize * p5.random(.3, .9)
	const steps = Number(p5.random(3, 20))
	const innerRadiusRatio = innerRadius / steps
	const outerRadiusRatio = itemSize / steps
	const randCol = p5.random(225, 255)
	const shadeRatio = randCol / steps
	const rotationRatio = p5.random(90, 200) / steps
	const pointCount = Number(p5.random(5, 15))
	for (let k = 0; k < steps; k++) {
		buffer.fill(shadeRatio * k)
		buffer.stroke(randCol - shadeRatio * k, 100)
		buffer.push()
		buffer.scale(.4)
		buffer.rotate(rotationRatio * k * p5.PI / 180)
		star(itemSize - outerRadiusRatio * k, innerRadius - innerRadiusRatio * k, pointCount,)
		buffer.pop()
	}
}

function grid(p5: p5, callback, cols, rows = cols) {

	p5.background(255)
	const itemSize = width / cols


	p5.translate(itemSize / 2, itemSize / 2)

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			drawOneCanvas(p5, callback, i, j, itemSize)
		}
	}
}


onMounted(() => {
	const sketch = (p5: p5) => {
		config(p5)

		p5.draw = function () {
			grid(p5, (mandala), 4,)
			p5.noLoop()
		}
	}
	new p5(sketch)
})
</script>

<template>
	<main><canvas></canvas></main>
</template>
