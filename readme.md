WARNING: VERY CRUDE, ABSOLUTELY UNFINISHED


# A p5js multi editor

A boilerplate project for a better p5js authoring experience. Basically it opens a Vue application in your browser and allows quick switching between sketches. New sketches are hot-reloaded automatically added to the left navigation bar.

The motivation is to provide the best of both worlds between the "default" mode and the [instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode#when-is-global-mode-assumed).

- Like [in the web editor](https://editor.p5js.org/), you can write concise code and quickly experiment with new sketches.
- Like in instance mode, you get inline documentation (by TS typings) and the comfort of a full IDE setup.


# Setup
1. Clone.
2. `npm install`.
5. Run `npm run dev` and `update-files` to .
6. Add p5 files in the p5 folder, with .ts extensions. Sample files and a VS Code snipped named p5-vue may help.


# How it works

With



# Warning


Known limit: deletion of files is detected only if the deletion in done in the explorer sidebar in VS Code.

![](screenshot.png)
