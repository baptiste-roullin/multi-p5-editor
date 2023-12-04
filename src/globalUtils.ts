import p5 from 'p5'
import type global from '/Users/baptiste/dev/p5-vue/node_modules/@types/p5/global.d.ts'
export const width = window.innerWidth
export const height = window.innerHeight
const usefulWidth = window.innerWidth * .88
const userfulHeight = window.innerHeight * .90


export default function globalInit(draw, isLoop = true) {

	function windowResized() {
		resizeCanvas(usefulWidth, userfulHeight)
	}

	function setup() {
		createCanvas(usefulWidth, userfulHeight, undefined, document.querySelector("canvas")!)
		frameRate(60)
		console.log(isLoop)

		if (!isLoop) {
			noLoop()
		}
	}

	//window['windowResized'] = null
	//window['windowResized'] = windowResized
	window['draw'] = null
	window['draw'] = draw
	window['setup'] = null
	window['setup'] = setup
	//@ts-ignore
	new p5()
}