const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
	// change video srouce, because this laptop without webcame
	navigator.mediaDevices.getUserMedia({
			video: true,
			audio: false
		})
		.then(localMediaStream => {
			console.log(localMediaStream);
			video.src = window.URL.createObjectURL(localMediaStream);
			video.play();
		})
		.catch(err => {
			console.error(`OH NO!!!`, err);
		});
}

var video_pid = 0;

function paintToCanvas() {
	const width = video.videoWidth;
	const height = video.videoHeight;
	// console.log(width, height);
	canvas.width = width;
	canvas.height = height;

	video_pid = setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);

		// take the pixels out
		let pixels = ctx.getImageData(0, 0, width, height);

		// mess with then
		// pixels = imageFilter(redEffect1, pixels);
		// pixels = redEffect(pixels);

		// pixels = rgbSplit(pixels);
		// ctx.globalAlpha = 0.8;

		pixels = smooth(pixels);
		// put them back
		ctx.putImageData(pixels, 0, 0);
	}, 16);

	return video_pid;
}

function takePhoto() {
	//play the sound
	snap.currentTime = 0;
	snap.play();

	//take the dta out of canvas
	const data = canvas.toDataURL('image/jpeg');
	const link = document.createElement('a');
	link.href = data;
	link.setAttribute('download', 'handsome');
	// link.textContent = 'Download Image';
	link.innerHTML = `<img src="${data}" />`;
	strip.insertBefore(link, strip.firstChild)
}

function imageFilter(filter, pixels) {
	console.log(pixels.data);
	for(let i = 0; i < pixels.data.length; i += 4) {
		pixels.data.set(filter(pixels.data.slice(i, i + 4)), i);
	}
	return pixels;
}

// function redEffect(pixels) {
// 	// console.log(pixels.data.length);
// 	for(let i = 0; i < pixels.data.length; i += 4) {
// 		pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
// 		pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
// 		pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
// 	}
// 	return pixels;
// }

function rgbSplit(pixels) {
	for(let i = 0; i < pixels.data.length; i += 4) {
		pixels.data[i - 150] = pixels.data[i + 0]; // RED
		pixels.data[i + 100] = pixels.data[i + 1]; // GREEN
		pixels.data[i - 150] = pixels.data[i + 2]; // Blue
	}
	return pixels;
}

function smooth(pixels) {
	const pixelWidth = pixels.width * 4;
	// for(let i = 0; i < pixels.data.length; i++) {
	// 	let sum = pixels.data[i + pixelWidth] +
	// 		pixels.data[i + pixelWidth - 4] +
	// 		pixels.data[i + pixelWidth + 4] +
	//
	// 		pixels.data[i - pixelWidth] +
	// 		pixels.data[i - pixelWidth - 4] +
	// 		pixels.data[i - pixelWidth + 4] +
	//
	// 		pixels.data[i] +
	// 		pixels.data[i - 4] +
	// 		pixels.data[i + 4];
	//
	// 	sum = sum / 9;
	//
	// 	pixels.data[i] = sum;
	// }
	return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
video.addEventListener('canplay', paintToCanvas);
video.addEventListener('ended', () => clearInterval(video_pid));
