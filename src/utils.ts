import p5 from 'p5'

export const width = window.innerWidth
export const height = window.innerHeight

export function config(p5: p5) {
  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth - 100, window.innerHeight - 100)
  }

  p5.setup = () => {
    p5.createCanvas(width, window.innerHeight, undefined, document.querySelector("canvas")!)
    p5.frameRate(60)
  }

}

export function star(p5: p5 | p5.Graphics, outerRadius, innerRadius, npoints, x = 0, y = 0) {
  let angle = p5.TWO_PI / npoints
  let halfAngle = angle / 2.0

  p5.beginShape()
  for (let a = 0; a < p5.TWO_PI; a += angle) {
    let sx = x + p5.cos(a) * innerRadius
    let sy = y + p5.sin(a) * innerRadius
    p5.vertex(sx, sy)
    sx = x + p5.cos(a + halfAngle) * outerRadius
    sy = y + p5.sin(a + halfAngle) * outerRadius
    p5.vertex(sx, sy)
  }
  p5.endShape("close")
}



export function grid(p5: p5, callback, cols, rows = cols) {

  p5.background(255)
  const itemSize = width / cols


  p5.translate(itemSize / 2, itemSize / 2)

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let buffer = p5.createGraphics(itemSize, itemSize)
      callback(buffer, 300,)
      p5.image(buffer, itemSize * j, itemSize * i)

    }
  }
}
