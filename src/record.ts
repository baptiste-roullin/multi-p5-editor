// CREDITS TO
// https://github.com/juliendecharentenay/medium-selfie-segmentation/blob/main/www/src/pages/demo/App.vue


export default function record() {
	console.log("Record canvas")
	const canvas = document.querySelector("canvas")
	if (canvas === null) { alert("no canvas found "); return }

	var chunks = []
	var canvas_stream = canvas.captureStream(60) // fps


	// Create media recorder from canvas stream
	let media_recorder = new MediaRecorder(canvas_stream, { mimeType: "video/webm" })

	// Record data in chunks array when data is available
	media_recorder.ondataavailable = (evt) => { chunks.push(evt.data) }


	document.addEventListener(
		"cycled",
		(e) => {
			media_recorder.stop()
		},
		false,
	)
	// Provide recorded data when recording stops
	media_recorder.onstop = () => {

		stop(chunks)
	}

	// Start recording using a 1s timeslice [ie data is made available every 1s)
	media_recorder.start(1000)

	return media_recorder


}

function stop(chunks) {

	// Gather chunks of video data into a blob and create an object URL
	var blob = new Blob(chunks, { type: "video/webm" })
	const recording_url = URL.createObjectURL(blob)

	// Attach the object URL to an <a> element, setting the download file name
	const a = document.createElement('a')
	a.style = "display: none;"
	a.href = recording_url
	a.download = "video.webm"
	document.body.appendChild(a)

	// Trigger the file download
	a.click()

	setTimeout(() => {
		// Clean up - see https://stackoverflow.com/a/48968694 for why it is in a timeout
		URL.revokeObjectURL(recording_url)
		document.body.removeChild(a)
	}, 0)
}