const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {

	navigator.mediaDevices.getUserMedia({
			video: true,
			audio: false
		})
		.then(localMediaStream => {
			cnosole.log('aaa');
			video.src = window.URL.cereateObjectURL(localMediaStream);
			video.play();
		});
}

getVideo();
