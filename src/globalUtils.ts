import p5 from 'p5'
import type global from 'node_modules/@types/p5/global.d.ts'
<<<<<<< Updated upstream
export const usefulWidth = window.innerWidth * .88
export const usefulHeight = window.innerHeight * .90
=======
export const viewWidth = window.innerWidth * .88
export const viewHeight = window.innerHeight * .90
>>>>>>> Stashed changes

export function globalInit(draw: () => void, isLoop = true) {

	function windowResized() {

		resizeCanvas(usefulWidth, usefulHeight)
	}

	function setup() {
		createCanvas(usefulWidth, usefulHeight, undefined, document.querySelector("canvas")!)
		frameRate(60)

		//saveCanvas(cnv, 'myCanvas.jpg');

		const setLoop = (isLoop ? loop : noLoop)
		//must be the last line
		setLoop()

	}

	window['windowResized'] = windowResized
	window['draw'] = null
	window['draw'] = draw
	window['setup'] = null
	window['setup'] = setup
	//@ts-ignore
	new p5()
}