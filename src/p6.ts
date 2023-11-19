import p5 from 'p5'
export default class p6 extends p5 {
	vertices(vertices, settings) {

		this.beginShape()
		vertices.forEach(element => {
			const [x, y] = element
			super.vertex(x, y)
		})
		this.endShape()
	}
}
