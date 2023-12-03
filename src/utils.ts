import p5 from 'p5'

import files from './files.json'

export const cleanedList = files.filter(el => el !== "")

export const width = window.innerWidth
export const height = window.innerHeight
const usefulWidth = window.innerWidth * .85
const userfulHeight = window.innerHeight * .90

export function config(p5: p5, noLoop = false) {
  p5.windowResized = () => {
    p5.resizeCanvas(usefulWidth, userfulHeight)
  }

  p5.setup = () => {
    p5.createCanvas(usefulWidth, userfulHeight, undefined, document.querySelector("canvas")!)
    p5.frameRate(60)
    if (noLoop) {
      p5.noLoop()
    }
  }

}

export function star(p5: p5 | p5.Graphics, outerRadius, innerRadius, pointCount, x = 0, y = 0) {
  let angle = p5.TWO_PI / pointCount
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


export function grid(p5: p5, callback: (p5: p5 | p5.Graphics, itemSize: number) => void, cols, itemSize) {

  p5.background(255)
  if (!itemSize && cols) {
    console.log(cols)
    var rows = cols
    var itemWidth = usefulWidth / cols
    var itemHeight = itemWidth

  }
  else if (itemSize && !cols) {
    // Layout of grid determined automatically by size of item and window.
    itemWidth = itemSize
    itemHeight = itemSize
    rows = Math.trunc(userfulHeight / itemSize)
    cols = Math.trunc(usefulWidth / itemSize)
  }
  else {

    itemWidth = 300
    itemHeight = 300
    rows = Math.trunc(userfulHeight / itemSize)
    cols = Math.trunc(usefulWidth / itemSize)
  }

  p5.translate(itemWidth / 2, itemWidth / 2)

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let buffer = p5.createGraphics(itemWidth, itemHeight)
      callback(buffer, itemWidth)
      p5.image(buffer, itemWidth * j, itemHeight * i)

    }
  }
}
