<script setup lang="ts">
import { onMounted } from 'vue'
import { globalInit, usefulHeight, usefulWidth } from '@/globalUtils'
import record from '@/record'
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

		record_circle(tan)
	}
	globalInit(draw, true)
})

const event = new Event("cycled")
var currentTan = 0
var pastTan = 0
var numberOfPhases = 0
var recording: boolean = false

function record_circle(trigFn) {
	if (!currentTan) {
		pastTan = 0
	} {
		pastTan = currentTan
	}
	currentTan = trigFn

	if (currentTan < 0 && pastTan > 0) {
		console.log(numberOfPhases)
		numberOfPhases++

	}
	if (!recording) {
		var mediaRecorder = record()
		recording = true
	}

	if (numberOfPhases > 1) {
		document.dispatchEvent(event)
	}
}
</script>

<template>
	<main><canvas></canvas></main>
</template>
