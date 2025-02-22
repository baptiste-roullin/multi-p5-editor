import p5 from 'p5'
export const usefulWidth = window.innerWidth * .88
export const usefulHeight = window.innerHeight * .90

export async function globalInit(draw: () => void, isLoop = true) {

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

	const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
	delay(5000).then(() => {
		console.log("Waited for 5 seconds")
		console.log("End")
	})
	await new p5()


}