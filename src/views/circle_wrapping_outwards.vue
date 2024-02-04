<script setup lang="ts">
import { onMounted } from 'vue'
import { globalInit, usefulHeight, usefulWidth } from '@/globalUtils'
import record from '@/record'


onMounted(() => {

	console.log("mount")

	function draw() {

		background(2, 2, 2)
		const dimension = Math.min(
			usefulHeight,
			usefulWidth,
		)
		fill(255)

		let tan = Math.tan(Date.now() / 1000)
		let factor = tan * 300
		arc(
			//center point
			usefulWidth / 2,
			usefulHeight / 2 - factor / 2,
			//dimensions
			factor,
			factor,
			//degrees of completion
			0,
			2 * Math.PI,
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
