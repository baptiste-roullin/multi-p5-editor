import p5 from 'p5'
export const usefulWidth = window.innerWidth * .88
export const usefulHeight = window.innerHeight * .90

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