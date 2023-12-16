
import makeRandomGenerator from 'random-seed'
import type global from 'node_modules/@types/p5/global.d.ts'

import p5 from 'p5'
interface Params {
	height: number
	width: number
	twist?: number
	scramble?: number
	saturation?: number
	curve_thickness?: number
	border?: string
	hue_amplitude?: number
	hue_phase?: number
	background?: string
	grid_alpha?: number
	curves_per_circle?: number
	seed?: number
	tile_size?: number
	background_phase?: number
	should_shuffle?: boolean
	light?: number

	//	[key: string]: string | number

}

/*function tableLog(array: (string | number)[]) {
	let obj:{}
	array.forEach(element => {
		obj.
	});
	return console.table(obj)
}
*/
export default async function truchet(params: Params) {
	const d3 = await import("d3-color")

	const rand = makeRandomGenerator.create()

	/*
		const should_shuffle = (rand.intBetween(0, 1) === 1 ? true : false)
		const tile_size = 30; // 32 viewport
		const curve_thickness = rand.intBetween(1, 30)
		const curves_per_circle = rand.intBetween(1, 10)
		const twist = rand.intBetween(0, 50)
		const scramble = rand.intBetween(0, 50)
	*/

	var height = params?.height || 280
	var width = params?.width || 400
	var seed = params?.seed || Math.random()
	var tile_size = params?.tile_size || rand.intBetween(40, 80)
	var saturation = params?.saturation || 30
	var hue_amplitude = params?.hue_amplitude || rand.intBetween(10, 80)
	var hue_phase = params?.hue_phase || 210
	var light = params?.light || (100 - saturation / 2)
	var background = params?.background || '#a18dbf'
	var background_phase = params?.background_phase || 180
	//should be thin border
	var border = params?.border || "#fff"
	var grid_alpha = params?.grid_alpha || 0
	var should_shuffle = params?.should_shuffle || false
	var twist = (params?.twist || 0) / 100
	var scramble = (params?.scramble || 0) / 100
	var curve_thickness = params?.curve_thickness || 1
	var curves_per_circle = params?.curves_per_circle || rand.intBetween(3, 7)


	var segments = curves_per_circle + 1

	fill("#fff")
	rect(0, 0, width, height)


	/*tileCanvas.width = tile_size
	tileCanvas.height = tile_size*/
	const rForm = makeRandomGenerator("form:" + seed)
	const rScramble = makeRandomGenerator("scramble:" + seed)
	const rScramble2 = makeRandomGenerator("scramble2:" + seed)
	const rShuffle = makeRandomGenerator("shuffle:" + seed)
	const rTwist = makeRandomGenerator("twist:" + seed)



	const curveWidth = Math.max(2, tile_size / segments * curve_thickness + 1)


	function randomize_curves(tile_size) {

		// soit 0, soit la fin de la tuile
		// pour définir l'origine du cercle
		const origin_tx = (rForm.random() < 0.5 ? 0 : tile_size)
		const origin_ty = (rForm.random() < 0.5 ? 0 : tile_size)

		//		chaque segment est composé d'une courbe intérieur et d'une courbe extérieure
		const curves: Array<[
			//est-ce qu'on agit sur le segment intérieur ou extérieur de la courbe
			number,
			// x
			number,
			// y
			number]> = []

		// pour chaque segment, ajoute une courbe à un tableau curves
		// scramble, shuffle et twist

		for (let i = 1; i <= Math.floor(segments / 2); i++) {
			console.log(i)

			// We do this outside of the if for more stability.
			const scrambled_X = (rScramble2.random() < 0.5 ? 0 : tile_size)
			const scrambled_Y = (rScramble2.random() < 0.5 ? 0 : tile_size)
			const should_scramble = (i > 1 && rScramble.random() < scramble)
			const tx = should_scramble ? scrambled_X : origin_tx
			const ty = should_scramble ? scrambled_Y : origin_ty

			const should_twist = (rTwist.random() < twist)

			const k = segments - i

			// toujours faux si pas de twist
			const twist_i = (k != i) && (rTwist.random() < 0.5) && should_twist
			const twist_k = (k != i) && (!twist_i) && should_twist

			function do_twist(twist_this, z) {
				return twist_this ? tile_size - z : z
			}

			const curve: [number, number, number] =
				[
					twist_i ? k : i,
					do_twist(twist_i, tx),
					ty
				]
			curves.push(curve)
			if (k != i) {
				curves.push([twist_k ? i : k, do_twist(twist_k, tx), ty])
				curves.unshift([twist_k ? i : k, do_twist(twist_k, tile_size - tx), tile_size - ty])
			}
			curves.unshift([twist_i ? k : i, do_twist(twist_i, tile_size - tx), tile_size - ty])
		}
		if (should_shuffle) { shuffle(curves) }

		return curves

	}

	function shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(rShuffle.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]]
		}
		return a
	}

	// x et y sont soit à 0, soit à tile_size.
	//définit le point d'origine du cercle parmi les quatre coints de la tile
	function circle(i, x, y, flip) {

		// Peut être à 1 ou 5
		// définit les alternances de teinte entre chaque segment
		const hue_flip = ((flip ? (segments - i) : i) / curves_per_circle)
		const hue = hue_flip * hue_amplitude + hue_phase
		const diameter = Math.floor((tile_size * i / segments) * 2)
		tileCanvas.beginShape()
		console.log("diameter", diameter, x, y)

		tileCanvas.noFill()
		tileCanvas.stroke("blue").strokeWeight(2)
		tileCanvas.arc(x, y, diameter, diameter, 0, 2 * Math.PI)
		//tileCanvas.colorMode(HSL)
		//tileCanvas.fill("black")
		//tileCanvas.arc(x, y, diameter, diameter, 0, 2 * Math.PI, PIE)
		/*
				tileCanvas.stroke("red").strokeWeight(2)
				tileCanvas.noFill()

				tileCanvas.arc(x, y, diameter - 10, diameter - 10, 0, 2 * Math.PI, PIE)

		*/


		//tileCanvas.fill(hue, saturation, light)
		tileCanvas.endShape()

	};



	//pour chaque tile
	for (let y = 0; y < height; y += tile_size) {
		for (let x = 0; x < width; x += tile_size) {
			var tileCanvas = createGraphics(tile_size, tile_size)
			tileCanvas.colorMode(HSL)


			// FOND

			tileCanvas.fill(d3.color(background).toString())
			// on remplit une première fois toute la tuile
			tileCanvas.noStroke()
			tileCanvas.rect(0, 0, tile_size, tile_size)

			// Puis on ajoute deux carrés, décalés en position et en teinte.
			const bg = d3.hsl(background)
			bg.h += background_phase
			bg.s = '40%'
			tileCanvas.fill(bg.toString())
			// est-on dans une tuile paire ou impaire ?
			const parity = ((x + y) / tile_size) % 2
			tileCanvas.rect(parity ? 0 : tile_size / 2, 0, tile_size / 2, tile_size / 2)
			tileCanvas.rect(parity ? tile_size / 2 : 0, tile_size / 2, tile_size / 2, tile_size / 2)

			// COURBE
			const curves = randomize_curves(tile_size)

			for (let j = 0; j < curves.length; ++j) {
				let [i, tx, ty] = curves[j]
				const hue_should_flip = ((x + y + tx + ty) / tile_size) % 2

				circle(i, tx, ty, hue_should_flip)
			}

			// GRILLE
			beginShape()
			alpha("000")
			rect(x, y, tile_size, tile_size)
			noFill()
			stroke(border)
			endShape()
			// CANVAS
			image(tileCanvas, x, y)



		}
	}

}


