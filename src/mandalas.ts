
import { onMounted } from 'vue'
import { config, grid, star, width } from '../utils'
import p5 from 'p5'

function mandala(p5) {

	p5.background(255)
	//presets
	const rows = 4
	const cols = 4
	const outerRadius = width / cols

	// randomly generated
	let pointCount = 0
	let steps = 0
	let innerRadius = 0
	let outerRadiusRatio = 0
	let innerRadiusRatio = 0
	let shadeRatio = 0
	let rotationRatio = 0

	p5.translate(outerRadius / 2, outerRadius / 2)
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			pointCount = Number(p5.random(5, 15))
			steps = Number(p5.random(3, 20))
			innerRadius = outerRadius * p5.random(.3, .9)
			outerRadiusRatio = outerRadius / steps
			innerRadiusRatio = innerRadius / steps
			const randCol = p5.random(225, 255)
			shadeRatio = randCol / steps
			rotationRatio = p5.random(90, 200) / steps
			//						p5.pushMatrix()
			p5.translate(outerRadius * j, outerRadius * i)
			for (let k = 0; k < steps; k++) {
				p5.fill(shadeRatio * k)
				p5.stroke(randCol - shadeRatio * k, 100)
				//							p5.pushMatrix()
				p5.scale(.4)
				p5.rotate(rotationRatio * k * p5.PI / 180)
				star(0, 0, outerRadius - outerRadiusRatio * k, innerRadius - innerRadiusRatio * k, pointCount,)
				//							p5.popMatrix()
			}
			//						popMatrix()
		}
	}

}
