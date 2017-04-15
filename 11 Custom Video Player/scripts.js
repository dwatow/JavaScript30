//click view play and pause
function switchPlayAndPause() {
	if(video_application.paused) {
		video_application.play();
	}
	else {
		video_application.pause();
	}
}
const video_application = document.querySelector('.player__video');
const play_or_pause_ctrl = document.querySelector('.player__button[title="Toggle Play"]');

//play button
video_application.addEventListener('click', switchPlayAndPause);
play_or_pause_ctrl.addEventListener('click', switchPlayAndPause);

//video event update icon
function updateIcon() {
	const ctrl = document.querySelector('.player__button[title="Toggle Play"]');
	if(video_application.paused) {
		ctrl.textContent = '>';
	}
	else {
		ctrl.textContent = '||';
	}
}
video_application.addEventListener('play', updateIcon);
video_application.addEventListener('pause', updateIcon);
play_or_pause_ctrl.textContent = '[]';

//process
// initial process
const process = document.querySelector('.progress__filled');
process.style.flexBasis = '0%';
video_application.currentTime = 0;

//show
function updateProcessView(e) {
	const currWatched = ((video_application.currentTime / video_application.duration) * 100)
		.toPrecision(2) + '%';
	process.style.flexBasis = currWatched;
}

//change
function changeProcess(e) {
	const currWatched = (e.layerX / process_all.clientWidth) * video_application.duration;
	video_application.currentTime = currWatched;
}


const process_all = document.querySelector('.progress');
process_all.addEventListener('click', changeProcess);
video_application.addEventListener('timeupdate', updateProcessView);


//range ctrl
function changeRange() {
	video_application[this.name] = this.value;
}

// initial volume
video_application.volume = 0.5;
// initial playbackRate
video_application.playbackRate = 1;
// playbackRate
const range_ctrls = document.querySelectorAll('.player__slider');
range_ctrls.forEach(ctrl => {
	ctrl.addEventListener('change', changeRange);
	ctrl.addEventListener('mousemove', changeRange);
});

//player__button add 10s
function skip() {
	video_application.currentTime += Number(this.dataset.skip);
}

const jump_sec_ctrls = document.querySelectorAll('[data-skip]');
jump_sec_ctrls.forEach(ctrl =>
	ctrl.addEventListener('click', skip)
);
