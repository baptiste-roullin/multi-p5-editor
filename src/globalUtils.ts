export const usefulWidth = window.innerWidth * .88
export const usefulHeight = window.innerHeight * .90
import p5 from 'p5'

export async function globalInit(draw, isLoop = true) {

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

	window['setup'] = null
	window['setup'] = setup
	window['draw'] = null
	window['draw'] = draw

	//@ts-ignore
	await new p5()



}