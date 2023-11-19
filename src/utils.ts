import p5 from 'p5'
import type P5 from 'p5'

export function config(p5: P5) {
  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth - 100, window.innerHeight - 100)
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight, undefined, document.querySelector("canvas")!)
    p5.frameRate(60)
  }

}


