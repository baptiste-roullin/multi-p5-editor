/*

function mandala() {

	p6.background(255)
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

	p6.translate(outerRadius / 2, outerRadius / 2)
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			pointCount = Number(p6.random(5, 15))
			steps = Number(p6.random(3, 20))
			innerRadius = outerRadius * p6.random(.3, .9)
			outerRadiusRatio = outerRadius / steps
			innerRadiusRatio = innerRadius / steps
			const randCol = p6.random(225, 255)
			shadeRatio = randCol / steps
			rotationRatio = p6.random(90, 200) / steps
			//						p6.pushMatrix()
			p6.translate(outerRadius * j, outerRadius * i)
			for (let k = 0; k < steps; k++) {
				p6.fill(shadeRatio * k)
				p6.stroke(randCol - shadeRatio * k, 100)
				//							p6.pushMatrix()
				p6.scale(.4)
				p6.rotate(rotationRatio * k * p6.PI / 180)
				p6.star(0, 0, outerRadius - outerRadiusRatio * k, innerRadius - innerRadiusRatio * k, pointCount,)
				//							p5.popMatrix()
			}
			//						popMatrix()
		}
	}

}*/